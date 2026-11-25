AYENAS V12 — CUSTOMER APP REBUILD (Material 3 / gaya Flutter)

Fokus: customer order — PICKUP (bayar di kaunter) atau DELIVERY COD (tunai kepada rider).
Dine In (order dari meja) dibuang: dinein.html dipadam.

index.html (customer)
- Reka bentuk Material 3: NavigationBar, SegmentedButton, FilterChip, BottomSheet, SnackBar, Dialog,
  ripple InkWell, outlined TextField, sokong dark mode automatik.
- 4 tab: Menu · Troli · Pesanan · Profil
- Menu live dari Firestore (products), carian, kategori, tanda "Habis" per outlet (soldOutByOutlet).
- Tambahan (Extra Ayam/Cheese/Sos) + nota dapur. Override per produk: field `addons` [{id,name,price}].
- Checkout: nama + telefon (validasi no. Malaysia), alamat + pin lokasi untuk delivery, maklumat diingat.
- Order tracking live + notifikasi bila status berubah, butang Telefon/WhatsApp outlet, Order semula.

Tetapan outlet (Firestore outletSettings/{tanah-merah | lembah-sireh}) — semua pilihan:
  status        'open' | 'busy' | 'closed'   (sedia ada, diset dari crew.html)
  defaultEta    nombor minit                 (sedia ada)
  deliveryFee   nombor, default 3
  deliveryEnabled  false untuk tutup delivery
  minOrder      nombor (RM)
  phone         contoh '60146089680'
  hours         7 item [Ahad..Sabtu], setiap satu ['11:00','22:30'] atau null (tutup)
  address       teks

Maklumat outlet default (dalam index.html, const OUTLETS) diambil dari carian internet — SILA SEMAK:
  Tanah Merah: Lot 1012 (No 2), Taman Kiara, Tanah Merah; tel 014-608 9680
  Waktu: 11:00–22:30, Jumaat 14:30–22:30 (dari listing foodpanda)
  Lembah Sireh: no. telefon belum dijumpai.

crew.html
- Kad order papar alamat delivery, nota rider, link Google Maps, COD/kaunter dan butang call.
- Tambahan (extrasList) dipapar nama penuh.
- Fix: order status collected/delivered/on-the-way tidak lagi naik semula ke kolum NEW.

AYENAS V13 — UI/UX PASS
- Menu: header ringkas (outlet + status + troli), kad Pickup/Delivery, "Pilihan popular" carousel,
  tab kategori melekat yang ikut skrol (scrollspy), senarai menu gaya app food delivery.
- Navigasi 3 tab: Menu · Pesanan · Akaun. Troli dibuka dari bar troli / ikon beg.
- Checkout: bar "Hantar order" + jumlah sentiasa di bawah, pilihan MASA AMBIL untuk pickup
  (secepat mungkin atau slot 15 minit ikut waktu operasi), pre-order bila outlet belum buka.
- Skrin "Order dihantar!" + nombor order, kemudian status live.
- Warna lebih neutral, ikut identiti Ayenas (merah, kuning, hitam).
- Gambar menu dibersihkan: tulisan poster (harga, "BAKAR", senarai menu, lencana) dibuang,
  pinggan/cawan di-trace atas latar studio gelap, semua 800x800.
- Order baru ada field `pickupTime` ('HH:MM' atau null). crew.html paparkan "AMBIL PUKUL".
