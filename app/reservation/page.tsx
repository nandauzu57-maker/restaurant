"use client";
import { FormEvent, useState } from "react";

export default function Reservation() {
	const [msg, setMsg] = useState("");
	async function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
		const response = await fetch("/api/reservations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
		const data = await response.json();
		setMsg(data.message || "Reservation created");
	}

	return <main className="reservation-page"><div className="reservation-layout">
		<img className="reservation-image reservation-image-left" src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" alt="Indian food and drinks" />
		<section className="reservation-panel"><div className="reservation-kicker">Reserve</div><h1>PESAN MEJA DAN ACARA ANDA</h1><div className="reservation-divider"><span>•</span></div><form onSubmit={submit} className="reservation-form">
			<select name="branch" defaultValue="" required><option value="" disabled>Pilih Cabang</option><option>Saffron House Darmstadt</option><option>Saffron House City Center</option></select>
			<input name="customer_name" placeholder="Masukkan Nama Anda" required />
			<input name="email" type="email" placeholder="Masukkan Email Anda" required />
			<input name="phone" placeholder="Nomor Telepon" required />
			<input name="reservation_date" type="date" aria-label="Pilih Tanggal" required />
			<input name="reservation_time" type="time" aria-label="Pilih Waktu" required />
			<select name="guests" defaultValue="2" aria-label="Jumlah Orang">{[1,2,3,4,5,6,7,8].map(n=><option key={n} value={n}>{n} orang</option>)}</select>
			<textarea name="notes" placeholder="Catatan tambahan (opsional)" rows={2} />
			<button className="reservation-submit">RESERVASI SEKARANG</button>
			{msg && <p className="reservation-message">{msg}</p>}
		</form></section>
		<img className="reservation-image reservation-image-right" src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85" alt="Elegant restaurant dessert" />
	</div></main>;
}