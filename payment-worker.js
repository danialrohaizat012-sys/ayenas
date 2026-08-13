function cors(env){return {'Access-Control-Allow-Origin':env.ALLOWED_ORIGIN||'*','Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'GET,POST,OPTIONS'}}
function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json',...headers}})}
function safeEq(a,b){if(!a||!b||a.length!==b.length)return false;let v=0;for(let i=0;i<a.length;i++)v|=a.charCodeAt(i)^b.charCodeAt(i);return v===0}
async function hmac(secret,msg){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);const sig=await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(msg));return [...new Uint8Array(sig)].map(b=>b.toString(16).padStart(2,'0')).join('')}
function sigString(p){return [...p.keys()].filter(k=>k!=='x_signature').sort().map(k=>`${k}${p.get(k)??''}`).join('|')}

export default { async fetch(request,env){
  const url=new URL(request.url), headers=cors(env);
  if(request.method==='OPTIONS') return new Response(null,{status:204,headers});

  if(url.pathname==='/create-payment'&&request.method==='POST'){
    try{
      const body=await request.json();
      if(!body.orderId||!body.amount||!body.name) return json({error:'Invalid request'},400,headers);
      const form=new URLSearchParams();
      form.set('collection_id',env.BILLPLZ_COLLECTION_ID);
      form.set('email','payment@ayenas.local');
      form.set('name',String(body.name).slice(0,80));
      form.set('mobile',String(body.phone||''));
      form.set('amount',String(Math.round(Number(body.amount))));
      form.set('description',String(body.description||'Ayenas Order').slice(0,200));
      form.set('callback_url',`${url.origin}/billplz-callback`);
      form.set('redirect_url',body.returnUrl||env.ALLOWED_ORIGIN);
      form.set('reference_1_label','Order ID');
      form.set('reference_1',String(body.orderId));
      const auth=btoa(env.BILLPLZ_SECRET_KEY+':');
      const apiBase=env.BILLPLZ_API_BASE||'https://www.billplz-sandbox.com';
      const r=await fetch(`${apiBase}/api/v3/bills`,{method:'POST',headers:{Authorization:`Basic ${auth}`,'Content-Type':'application/x-www-form-urlencoded'},body:form});
      const data=await r.json();
      if(!r.ok) return json({error:'Billplz create bill failed',detail:data},502,headers);
      await env.PAYMENTS.put(`order:${body.orderId}`,JSON.stringify({orderId:body.orderId,billId:data.id,paid:false,state:data.state||'due',amount:Number(body.amount),createdAt:Date.now()}));
      await env.PAYMENTS.put(`bill:${data.id}`,String(body.orderId));
      return json({billId:data.id,url:data.url},200,headers);
    }catch(e){return json({error:e.message||String(e)},500,headers)}
  }

  if(url.pathname==='/billplz-callback'&&request.method==='POST'){
    const raw=await request.text(), p=new URLSearchParams(raw), received=p.get('x_signature');
    if(!received) return new Response('Missing signature',{status:400});
    const expected=await hmac(env.BILLPLZ_X_SIGNATURE_KEY,sigString(p));
    if(!safeEq(received,expected)) return new Response('Invalid signature',{status:401});
    const billId=p.get('id'), paid=p.get('paid')==='true', state=p.get('state')||'', orderId=await env.PAYMENTS.get(`bill:${billId}`);
    if(orderId){const ex=JSON.parse(await env.PAYMENTS.get(`order:${orderId}`)||'{}');await env.PAYMENTS.put(`order:${orderId}`,JSON.stringify({...ex,paid,state,paidAt:paid?Date.now():null,billId}))}
    return new Response('OK',{status:200});
  }

  if(url.pathname==='/payment-status'&&request.method==='GET'){
    const orderId=url.searchParams.get('orderId');
    if(!orderId) return json({error:'Missing orderId'},400,headers);
    const raw=await env.PAYMENTS.get(`order:${orderId}`);
    if(!raw) return json({found:false,paid:false},404,headers);
    const d=JSON.parse(raw);
    return json({found:true,paid:!!d.paid,state:d.state||'due',billId:d.billId||null},200,headers);
  }

  return json({ok:true,service:'Ayenas Billplz Payment API'},200,headers);
}};