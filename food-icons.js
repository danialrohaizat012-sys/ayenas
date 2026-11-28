// Ilustrasi makanan Ayenas (SVG) untuk menu yang tiada gambar.
// Dipilih ikut nama / kategori menu supaya ikon sentiasa sepadan.
const C = {
  red: '#E30613', dred: '#B8040E', yel: '#FFC928', gold: '#F2A81D', org: '#E8761E',
  chick: '#B5481A', chick2: '#D9672A', bone: '#F6EBDD', rice: '#FFD45C', rice2: '#F5B83D',
  plate: '#FFFFFF', rim: '#EADFD6', leaf: '#3FA34D', leaf2: '#2E7D3A', dark: '#3A2418',
  noodle: '#F7C948', soup: '#E8692A', choc: '#6B3A23', tea: '#C8732E', cream: '#FFF3E0',
  ice: '#DFF3FF', pink: '#F4628C', water: '#7CC4F2', silver: '#C9CED6', silver2: '#AEB4BE'
};

const drum = (x, y, r = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
  <rect x="-2.1" y="7" width="4.2" height="17" rx="2.1" fill="${C.bone}"/>
  <circle cx="-2.3" cy="25" r="2.8" fill="${C.bone}"/><circle cx="2.3" cy="25" r="2.8" fill="${C.bone}"/>
  <path d="M0-17C8-17 11-9 10-2 9 4 5 8 2.5 10h-5C-5 8-9 4-10-2-11-9-8-17 0-17z" fill="${C.chick}"/>
  <path d="M-5-11C-2-14 2-14 5-11" stroke="${C.chick2}" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <path d="M-7 0C-5 4-2 6 1 7" stroke="${C.chick2}" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".8"/>
  <circle cx="-3" cy="-5" r="1" fill="${C.cream}" opacity=".85"/><circle cx="3.5" cy="-2" r="1" fill="${C.cream}" opacity=".85"/><circle cx="1.5" cy="-10" r=".9" fill="${C.cream}" opacity=".85"/>
</g>`;
const plate = (rx = 26, ry = 12, cy = 40) => `<ellipse cx="32" cy="${cy + 2}" rx="${rx}" ry="${ry}" fill="${C.rim}"/><ellipse cx="32" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.plate}"/><ellipse cx="32" cy="${cy}" rx="${rx - 6}" ry="${ry - 3.5}" fill="none" stroke="${C.rim}" stroke-width="1.2"/>`;
const leafs = (x, y) => `<path d="M${x} ${y}c4-6 11-6 13-3-4 5-9 6-13 3z" fill="${C.leaf}"/><path d="M${x + 2} ${y + 1}c3-2 6-3 9-3" stroke="${C.leaf2}" stroke-width="1" fill="none"/>`;
const coldCup = (fill, top) => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M37 4l-4 18" stroke="${C.red}" stroke-width="3" stroke-linecap="round"/>
    <path d="M18 18c0-6 6-8 14-8s14 2 14 8z" fill="${C.ice}" stroke="#BFE3F7" stroke-width="1.2"/>
    <rect x="16" y="17" width="32" height="4" rx="2" fill="#BFE3F7"/>
    <path d="M18 21h28l-3 35a3 3 0 01-3 3H24a3 3 0 01-3-3z" fill="${C.ice}"/>
    <path d="M19.5 34h25l-1.8 22a3 3 0 01-3 3H24.3a3 3 0 01-3-3z" fill="${fill}"/>
    ${top ? `<path d="M19.5 34h25l-.4 5H19.9z" fill="${top}"/>` : ''}
    <rect x="24" y="26" width="7" height="7" rx="1.5" fill="#fff" opacity=".85" transform="rotate(12 27 29)"/><rect x="33" y="28" width="7" height="7" rx="1.5" fill="#fff" opacity=".85" transform="rotate(-10 36 31)"/></svg>`;
const wrap = (inner) => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;

const ICONS = {
  // Ayam bakar (2 ketul)
  ayam: wrap(`${plate(27, 9, 51)}${drum(22, 23, -32, 1)}${drum(42, 23, 32, 1)}`),
  // Nasi + ayam
  nasi: wrap(`${plate(27, 12, 40)}
    <path d="M10 38c0-9 8-14 15-14s14 5 14 14z" fill="${C.rice}"/>
    <g fill="${C.rice2}"><circle cx="18" cy="32" r="1.2"/><circle cx="24" cy="29" r="1.2"/><circle cx="30" cy="32" r="1.2"/><circle cx="22" cy="35" r="1.2"/></g>
    ${drum(44, 30, -30, .85)}${leafs(26, 43)}`),
  // Ramen
  ramen: wrap(`<path d="M22 6l9 20M30 4l6 22" stroke="${C.dark}" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="32" cy="30" rx="25" ry="6" fill="${C.soup}"/>
    <path d="M12 29c4-3 8 3 12 0s8 3 12 0 8 3 12 0 6 3 8 1" stroke="${C.noodle}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M7 30h50c0 14-11 24-25 24S7 44 7 30z" fill="${C.red}"/>
    <path d="M7 30h50" stroke="${C.dred}" stroke-width="2"/>
    <rect x="22" y="53" width="20" height="4" rx="2" fill="${C.dred}"/>
    <path d="M16 40h32" stroke="#fff" stroke-width="2" stroke-dasharray="3 3" opacity=".5"/>`),
  // Spageti / aglio olio
  pasta: wrap(`${plate(27, 13, 38)}
    <g fill="none" stroke="${C.noodle}" stroke-width="2.6" stroke-linecap="round">
      <ellipse cx="30" cy="35" rx="14" ry="7"/><ellipse cx="30" cy="34" rx="9" ry="4.5"/><ellipse cx="30" cy="33" rx="4.5" ry="2.2"/>
      <path d="M17 38c5 4 20 4 26 0"/></g>
    <circle cx="24" cy="34" r="2.4" fill="${C.pink}"/><circle cx="35" cy="31" r="2.4" fill="${C.pink}"/><circle cx="33" cy="38" r="2.4" fill="${C.pink}"/>
    <path d="M48 12v20M45 12v8a3 3 0 006 0v-8" stroke="${C.silver2}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`),
  // Nasi mandy talam
  mandy: wrap(`<ellipse cx="32" cy="38" rx="29" ry="16" fill="${C.silver2}"/><ellipse cx="32" cy="36" rx="29" ry="16" fill="${C.silver}"/>
    <ellipse cx="32" cy="35" rx="23" ry="12" fill="${C.gold}"/>
    <g fill="${C.rice2}"><circle cx="18" cy="35" r="1.3"/><circle cx="25" cy="40" r="1.3"/><circle cx="40" cy="41" r="1.3"/><circle cx="46" cy="34" r="1.3"/></g>
    ${drum(24, 28, 40, .78)}${drum(40, 28, -40, .78)}
    <circle cx="47" cy="40" r="4.5" fill="${C.yel}"/><circle cx="47" cy="40" r="3" fill="#FFE68A"/>${leafs(14, 39)}`),
  // Set keluarga / superbox
  family: wrap(`<rect x="5" y="16" width="54" height="38" rx="6" fill="${C.org}"/><rect x="8" y="19" width="48" height="32" rx="4" fill="${C.cream}"/>
    <rect x="10" y="21" width="20" height="13" rx="3" fill="${C.rice}"/>
    <rect x="10" y="36" width="20" height="13" rx="3" fill="${C.soup}"/><path d="M12 42c3-2 5 2 8 0s5 2 8 0" stroke="${C.noodle}" stroke-width="2" fill="none"/>
    ${drum(44, 30, -25, .8)}
    <path d="M24 11h16l-3 5H27z" fill="${C.dred}"/>`),
  // Chicken chop / western
  chop: wrap(`${plate(27, 13, 40)}
    <path d="M14 38c-2-6 4-11 10-10 3-4 10-4 12 0 6 0 8 6 5 10-1 5-8 7-14 6-6 1-12-1-13-6z" fill="${C.gold}"/>
    <path d="M17 37c3 1 5-1 7 0M27 33c2 1 4 0 6 1M30 40c2-1 5 0 7-1" stroke="${C.org}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g fill="${C.yel}"><rect x="44" y="27" width="3" height="12" rx="1.5" transform="rotate(12 45 33)"/><rect x="48" y="28" width="3" height="11" rx="1.5" transform="rotate(-8 49 33)"/></g>
    <circle cx="44" cy="45" r="4" fill="${C.choc}"/>`),
  // Menu diet / salad
  diet: wrap(`<path d="M6 32h52c0 13-11 22-26 22S6 45 6 32z" fill="${C.plate}"/><path d="M6 32h52c0 13-11 22-26 22S6 45 6 32z" fill="none" stroke="${C.rim}" stroke-width="2"/>
    <path d="M10 32c2-8 9-11 14-9 3-6 13-6 16 0 6-2 13 3 14 9z" fill="${C.leaf}"/>
    <path d="M15 31c3-5 7-6 10-5M34 24c3 2 5 5 5 7" stroke="${C.leaf2}" stroke-width="1.5" fill="none"/>
    <ellipse cx="42" cy="29" rx="6" ry="4.5" fill="#fff"/><circle cx="42" cy="29" r="2.4" fill="${C.yel}"/>
    <rect x="19" y="24" width="14" height="5" rx="2.5" fill="${C.chick2}" transform="rotate(-12 26 26)"/>
    <circle cx="30" cy="31" r="2" fill="${C.red}"/><circle cx="22" cy="30" r="1.8" fill="${C.org}"/>`),
  // Telur
  egg: wrap(`${plate(26, 12, 42)}
    <path d="M22 20c6 0 10 9 10 15s-4 10-10 10-10-4-10-10 4-15 10-15z" fill="#fff" stroke="${C.rim}" stroke-width="1.2"/><circle cx="22" cy="36" r="4.6" fill="${C.yel}"/>
    <path d="M42 22c6 0 10 9 10 15s-4 10-10 10-10-4-10-10 4-15 10-15z" fill="#fff" stroke="${C.rim}" stroke-width="1.2"/><circle cx="42" cy="38" r="4.6" fill="${C.yel}"/>
    ${leafs(28, 46)}`),
  // Burrito
  burrito: wrap(`<g transform="rotate(-30 32 34)"><rect x="12" y="22" width="40" height="22" rx="11" fill="#E8C88E"/>
    <ellipse cx="50" cy="33" rx="6" ry="11" fill="#D9B272"/><ellipse cx="50" cy="33" rx="4" ry="8.5" fill="${C.leaf}"/>
    <circle cx="50" cy="29" r="2" fill="${C.red}"/><circle cx="51" cy="36" r="2" fill="${C.yel}"/>
    <path d="M18 26c3 4 3 12 0 16M27 24c3 5 3 14 0 19" stroke="#D9B272" stroke-width="1.6" fill="none"/></g>`),
  // Tortilla nachos
  nachos: wrap(`<path d="M8 36h48l-6 16H14z" fill="${C.red}"/><path d="M8 36h48" stroke="${C.dred}" stroke-width="2.5"/>
    <g fill="${C.gold}" stroke="${C.org}" stroke-width="1"><path d="M14 36l8-20 7 20z"/><path d="M26 36l9-24 8 24z"/><path d="M38 36l9-18 7 18z"/><path d="M20 36l5-12 6 12z"/></g>
    <ellipse cx="32" cy="34" rx="9" ry="3" fill="${C.yel}"/>`),
  // Fries
  fries: wrap(`<g fill="${C.yel}" stroke="${C.gold}" stroke-width=".8">
      <rect x="18" y="10" width="5" height="26" rx="1.5" transform="rotate(-10 20 23)"/><rect x="25" y="7" width="5" height="28" rx="1.5"/>
      <rect x="32" y="8" width="5" height="28" rx="1.5" transform="rotate(6 34 22)"/><rect x="39" y="11" width="5" height="25" rx="1.5" transform="rotate(14 41 23)"/></g>
    <path d="M14 28h36l-5 28H19z" fill="${C.red}"/><path d="M14 28c6 6 30 6 36 0" fill="${C.dred}"/>
    <path d="M19 44h26" stroke="${C.yel}" stroke-width="3" opacity=".9"/>`),
  // Minuman sejuk
  cold: coldCup(C.pink),
  kopi: coldCup('#8A5A3C', '#D9B89C'),
  teh: coldCup('#D98A3A', '#F2C38F'),
  // Minuman panas (kopi/teh/coklat)
  hot: wrap(`<path d="M24 6c-3 4 3 6 0 10M32 4c-3 4 3 6 0 10M40 6c-3 4 3 6 0 10" stroke="${C.silver2}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="30" cy="54" rx="22" ry="4" fill="${C.rim}"/>
    <path d="M12 22h36v16c0 9-7 16-16 16h-4c-9 0-16-7-16-16z" fill="${C.red}"/>
    <path d="M48 27h3a7 7 0 010 14h-4" stroke="${C.red}" stroke-width="4" fill="none"/>
    <ellipse cx="30" cy="22" rx="18" ry="4" fill="${C.choc}"/><ellipse cx="27" cy="21.5" rx="7" ry="1.6" fill="#8A5234"/>
    <path d="M20 34h20" stroke="#fff" stroke-width="2" opacity=".35"/>`),
  // Air mineral
  water: wrap(`<rect x="26" y="4" width="12" height="6" rx="2" fill="${C.red}"/>
    <path d="M25 10h14v6c5 3 7 7 7 12v24a6 6 0 01-6 6H24a6 6 0 01-6-6V28c0-5 2-9 7-12z" fill="#E8F6FF" stroke="${C.water}" stroke-width="1.6"/>
    <rect x="18" y="30" width="28" height="12" fill="${C.water}"/><path d="M24 36h16" stroke="#fff" stroke-width="2"/>`),
  // Lalai
  plate: wrap(`${plate(26, 12, 40)}<ellipse cx="32" cy="37" rx="13" ry="6" fill="${C.gold}"/>${drum(32, 30, -20, .72)}
    <path d="M8 14v18M5 14v7a3 3 0 006 0v-7" stroke="${C.silver2}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M56 14v18M56 14c-3 2-3 8 0 10" stroke="${C.silver2}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`)
};

const RULES = [
  [/air mineral|mineral water/, 'water'],
  [/sparkling|freshie|sirap|bandung|lychee|milky|lemonade|smoothie|juice|jus/, 'cold'],
  [/kopi|coffee|nescafe|neslo|vico|latte|coklat|chocolate|milo/, 'kopi'],
  [/teh|tea\b|tea /, 'teh'],
  [/telur|egg/, 'egg'],
  [/burrito/, 'burrito'],
  [/fries|kentang/, 'fries'],
  [/tortilla|nacho/, 'nachos'],
  [/mandy|talam|kambing/, 'mandy'],
  [/set mesra|keluarga|superbox|family|combo/, 'family'],
  [/ramen|mee|mi /, 'ramen'],
  [/aglio|spageti|spaghetti|pasta/, 'pasta'],
  [/diet|grill|salad|sayur/, 'diet'],
  [/chop|western|steak/, 'chop'],
  [/nasi/, 'nasi'],
  [/ayam|chicken/, 'ayam'],
  [/minuman|drink/, 'cold']
];

export function foodIconKey(p) {
  const txt = `${p?.name || ''} ${p?.category || ''}`.toLowerCase();
  for (const [re, key] of RULES) if (re.test(txt)) return key;
  return 'plate';
}
export function foodIcon(p) { return ICONS[foodIconKey(p)]; }
export const FOOD_ICON_KEYS = Object.keys(ICONS);
export function foodIconByKey(k) { return ICONS[k] || ICONS.plate; }
