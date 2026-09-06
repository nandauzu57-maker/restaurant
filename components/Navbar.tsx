"use client";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { useState } from "react";

export default function Navbar() {
	const { items } = useCart();
	const [open, setOpen] = useState(false);
	const cartCount = items.reduce((total: number, item: any) => total + item.qty, 0);
	return <header className="site-header"><div className="container nav-inner">
		<Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span><strong>SAFFRON HOUSE</strong><small>AUTHENTIC INDIAN KITCHEN</small></span></Link>
		<nav className={`main-nav ${open ? "is-open" : ""}`}><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/menu" onClick={() => setOpen(false)}>Menus</Link><Link href="/reservation" onClick={() => setOpen(false)}>Reservation</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><Link href="/admin" onClick={() => setOpen(false)}>Admin</Link></nav>
		<div className="nav-actions"><Link href="/order" className="order-link"><ShoppingBag size={17}/> Order online <span>({cartCount})</span></Link><button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={28}/> : <Menu size={30}/>}</button></div>
	</div></header>;
}