AYENAS FIREBASE V1

Files:
- index.html       Customer ordering app
- crew.html        Crew / owner console
- firestore.rules  Firestore security rules
- products-seed.json
- *.jpg             Clean menu product images (semua di root, tiada folder assets)
- manifest.webmanifest, service-worker.js, icons

FIREBASE SETUP REQUIRED

1. Authentication
   Enable:
   - Anonymous
   - Email/Password

2. Firestore Database
   Create Firestore and publish the included firestore.rules.

3. Firebase Storage
   TAK PERLU. Versi ini tidak menggunakan Firebase Storage.
   Crew boleh pilih gambar terus dari phone/computer.
   Browser akan auto-resize + compress ke JPEG sebelum gambar disimpan dalam field imageUrl di Firestore.

4. Create owner login
   Firebase Console > Authentication > Users > Add user.
   Create your owner email/password.

5. Create owner profile in Firestore
   Copy the UID from Authentication.
   Create collection: users
   Document ID: <OWNER UID>
   Fields:
     active   boolean  true
     role     string   owner
     name     string   <owner name>
     outletId string   all

For branch crew:
     active   boolean  true
     role     string   crew
     name     string   <crew name>
     outletId string   tanah-merah
OR
     outletId string   lembah-sireh

6. Deploy all files to GitHub Pages.
   Customer app: /index.html
   Crew console: /crew.html

7. Login crew.html as owner, open Menu, and press IMPORT MENU ASAS once.
   After that, customer index.html reads the live Firestore menu.

IMPORTANT
- Customer orders require Anonymous Authentication to be enabled.
- Product image upload requires Firebase Storage.
- Crew order list updates live through Firestore onSnapshot.


V2 FLAT STRUCTURE
Semua fail dan gambar berada dalam root yang sama. Tiada folder assets diperlukan.


V3 NO-STORAGE IMAGE UPLOAD
- Tiada Firebase Storage.
- Crew boleh upload/tukar gambar terus melalui crew.html.
- Gambar di-compress dalam browser (maks dimension 1000px, JPEG adaptive quality).
- Sasaran saiz sekitar 160 KB sebelum disimpan sebagai data URL dalam document product Firestore.
- Sesuai untuk MVP / menu berskala kecil.
- Elakkan upload gambar terlalu banyak atau gambar resolusi ekstrem dalam satu masa.
