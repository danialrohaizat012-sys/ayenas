AYENAS V8 OPERATIONAL LAYER

Added:
1. Outlet status: Open / Busy / Closed.
2. Default outlet ETA: 15 / 30 / 45 min.
3. Per-order ETA buttons: 15 / 30 / 45 min.
4. WhatsApp payment confirmation button. Payment remains unpaid until crew confirms.
5. Product Sold Out state by outlet.
6. Customer app listens to outlet status live and blocks new orders when Closed.
7. Customer tracking displays ETA.
8. Order status and payment status remain separate.

IMPORTANT:
- Upload the bundled firestore.rules because V8 adds outletSettings access.
- Owner with outletId=all currently operates the Lembah Sireh operations panel by default. Branch selector can be added next for owner multi-outlet control.
