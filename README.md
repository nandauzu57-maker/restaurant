# TASTY Restaurant — Full Stack Starter

## Jalankan
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Fitur
- Landing page premium
- Dynamic menu + filter
- Cart localStorage
- Checkout API
- Reservation API
- Admin dashboard UI
- SQL schema Supabase
- Struktur Stripe webhook
- Struktur Resend email
- Responsive mobile

## Untuk produksi
1. Buat project Supabase dan jalankan `supabase/schema.sql`
2. Isi `.env.local` dari `.env.example`
3. Tambahkan Stripe/Resend keys
4. Deploy ke Vercel

Catatan: tanpa environment variables, demo frontend tetap berjalan. API akan mengembalikan respons demo.
