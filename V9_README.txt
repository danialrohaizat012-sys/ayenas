AYENAS V9 — SPLIT CUSTOMER FLOW / NO POINTS

CUSTOMER FRONTENDS
1) index.html = PICKUP + DELIVERY
   - Choose outlet
   - Choose Pickup or Delivery
   - Pickup: pay at counter
   - Delivery: address + contact + GPS pin
   - Delivery payment: COD or WhatsApp

2) dinein.html = DINE IN ONLY
   - Designed for QR code on each table
   - Outlet + table number come from URL parameters
   - No outlet/order-type selection
   - Pay at counter
   - Live order status + ETA

QR URL EXAMPLES
dinein.html?outlet=tanah-merah&table=01
dinein.html?outlet=tanah-merah&table=08
dinein.html?outlet=lembah-sireh&table=01
dinein.html?outlet=lembah-sireh&table=12

CREW
- One crew.html for all order types
- Tabs: ALL / DINE IN / PICKUP / DELIVERY
- Dine In: New > Preparing > Served
- Pickup: New > Preparing > Ready for Pickup > Collected
- Delivery: New > Preparing > Ready for Delivery > On The Way > Delivered
- Table number is stored on dine-in orders
- Owner branch selector added
- Existing Sold Out / ETA / Open-Busy-Closed / WhatsApp payment confirmation retained

POINTS / REWARDS
- Removed from customer ordering flow and order creation.
- No points are awarded by V9.

FIREBASE
- Replace Firestore Rules with firestore.rules in this package and Publish.
