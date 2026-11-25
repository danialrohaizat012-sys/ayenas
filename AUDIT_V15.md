# Audit Ayenas v15

Tarikh: 25 Nov 2026. Skop: `index.html` (app customer), `crew.html` (console crew), `firestore.rules`, PWA, fail dalam repo.

## Cara audit
- Semakan kod manual baris demi baris.
- axe-core 4.10 (WCAG 2 A/AA + best practice) pada 8 halaman × 3 saiz skrin (320, 390, 768 px).
- Playwright: aliran order penuh, kes tepi (outlet tutup, di luar waktu operasi, hampir tutup, waktu lepas tengah malam, menu habis, delivery ditutup, offline, pesanan tidak dijumpai), dan semakan 40 ikon.
- Crew console diuji dengan login owner palsu.

## Penemuan & status

| # | Tahap | Penemuan | Status |
|---|---|---|---|
| 1 | Kritikal | Delivery boleh di-order di luar waktu operasi | Dibaiki: disekat + mesej |
| 2 | Kritikal | "Sekarang" dibenarkan walaupun outlet hampir tutup | Dibaiki: perlu `masa penyediaan` sebelum tutup |
| 3 | Kritikal | Crew: owner tak boleh urus status Tanah Merah | Dibaiki: pemilih cawangan |
| 4 | Kritikal | Crew: tiada butang Sold Out per outlet | Dibaiki |
| 5 | Kritikal | Crew: tiada cara batal order | Dibaiki: butang Batalkan (customer nampak "Dibatalkan") |
| 6 | Kritikal | Firestore rules terima apa-apa order (status, bayaran, jumlah) | Dibaiki dalam `firestore.rules` (**perlu publish manual**) |
| 7 | Kritikal | iPhone auto-zoom pada input 14px | Dibaiki: 16px |
| 8 | Serius | Butang bersarang dalam kad (nested-interactive) | Dibaiki |
| 9 | Serius | Kontras teks kelabu/hijau tak cukup | Dibaiki |
| 10 | Serius | Tab kategori tanpa `role="tab"` | Dibaiki |
| 11 | Serius | Status pesanan berpusing selamanya jika tiada | Dibaiki: mesej "tidak dijumpai" |
| 12 | Serius | Profil hilang fokus semasa menaip | Dibaiki |
| 13 | Serius | Toast tertinggal antara halaman / tutup bar | Dibaiki |
| 14 | Serius | Bar troli tutup item terakhir | Dibaiki |
| 15 | Serius | Masa pickup dijadualkan boleh lepas tanpa disemak | Dibaiki: disemak semula semasa hantar |
| 16 | Sederhana | Tiada `<main>` / `<h1>`, dialog tanpa nama | Dibaiki |
| 17 | Sederhana | Font ikon penuh (beberapa MB) | Dibaiki: subset 40 ikon |
| 18 | Sederhana | Tiada amaran offline | Dibaiki |
| 19 | Sederhana | Banner auto-skrol semasa disentuh / reduced-motion | Dibaiki |
| 20 | Sederhana | Waktu operasi lepas tengah malam tak disokong | Dibaiki |
| 21 | Sederhana | Tiada tag OG untuk perkongsian WhatsApp | Dibaiki |
| 22 | Sederhana | Item habis dalam troli tak ditanda | Dibaiki |
| 23 | Sederhana | Crew: ETA/late masih pada order selesai | Dibaiki |
| 24 | Baru | Crew: tetapan delivery (buka/tutup, caj, min. order) & no. telefon outlet | Ditambah |

## Keputusan selepas pembaikan
- axe-core: **0 isu** pada 24 kombinasi halaman/saiz.
- Tiada limpahan mendatar pada 320 px.
- Semua kes tepi lulus; tiada ralat JavaScript.

## Belum dibuat / perlu tindakan pemilik
1. **Publish `firestore.rules`** di Firebase Console → Firestore → Rules.
2. Fail lama `index(2).html` dan `ayenas-ordering-app.html` masih public dan boleh cipta order format lama. Cadangan: padam (rules baru juga akan tolak order format lama).
3. `payment-worker.js`, `wrangler.toml`, `PAYMENT_SETUP.txt` (Billplz) tidak digunakan.
4. Harga masih dikira di peranti customer; rules menghadkan julat, tapi pengesahan harga penuh perlu Cloud Function.
5. Crew memuatkan semua order sejak awal; bila order banyak, perlu had tarikh (perlu index Firestore).
6. Order ke Firebase sebenar belum diuji dari sandbox.
