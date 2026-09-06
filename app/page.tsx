"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";

const dishes = [
  ["Mutton Ghee Roast", "Lamb ghee roast has a fiery red color and a spicy, smoky flavor. Cooked with ghee and roasted spices.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-12.35.19-2.jpeg"],
  ["Tandoori Mix ( 2 persons )", "A mixture of Chicken Tikka, Malai Tikka, Lamb Tikka and Chicken Seekh.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-11.47.06.jpeg"],
  ["Chicken Ghee Roast", "Chicken ghee roast has a fiery red color and a spicy, smoky flavor.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-11.47.06-3.jpeg"],
  ["King Prawn Masala", "One of the best seafood dishes, cooked with a mixed sauce made from selected spices and herbs.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-11.47.06-5.jpeg"],
  ["Dal Makhani", "A rich lentil dish made with whole black lentils and spices, finished with cream and butter.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-11.47.06-2.jpeg"],
  ["Hyderabadi Mandi Biryani", "Marinated and grilled chicken pieces cooked in specially spiced rice using the dum method.", "https://vimalatastytreats.de/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-12.35.19.jpeg"],
  ["Garlic Naan", "Soft tandoor-baked naan finished with garlic, butter and fresh coriander.", "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80"],
  ["Gulab Jamun", "Warm milk dumplings soaked in fragrant rose and cardamom syrup.", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85"],
];

const heroImages = [
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1800&q=88",
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((index) => (index + 1) % heroImages.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero"><div key={heroIndex} className="hero-slideshow" style={{backgroundImage:`url('${heroImages[heroIndex]}')`}} aria-hidden="true"/><div className="hero-copy"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><div className="hero-address">Wilhelminenstraße 10, Darmstadt, Hessen</div><h1>Welcome to Saffron House!</h1><p>Discover authentic Indian cuisine and treat yourself to an impressive and unforgettable dining experience.<br/>Explore Our Menu and make a reservation today.</p><div><Link href="/reservation" className="hero-link">Reservation</Link><Link href="/order" className="hero-link">Order Online</Link></div></motion.div></div></section>
      <section className="category-section"><div className="container"><div className="section-heading"><div className="eyebrow">Our special</div><h2>Discover our flavours</h2></div><div className="category-grid"><Link href="/menu" className="category-card"><h3>Vegetarian</h3></Link><Link href="/menu" className="category-card"><h3>Sea Food</h3></Link><Link href="/menu" className="category-card"><h3>Biriyanis</h3></Link></div></div></section>
      <section className="gallery-section"><div className="gallery-grid">{[
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85"
      ].map((image,index)=><figure key={image}><img src={image} alt="Saffron House food"/><figcaption>SAFFRON HOUSE <span>0{index + 1}</span></figcaption></figure> )}</div></section>
      <section className="location-section"><div className="location-card"><div><h2>VISIT OUR<br/>RESTAURANT</h2><p><b>Location</b><br/>Wilhelminenstraße 10,<br/>Darmstadt, Hessen 64283</p><p><b>Restaurant Timings</b><br/>Lunch: 11:00 – 14:30<br/>Dinner: 17:00 – 22:30<br/>Closed: Monday</p></div><img src="https://vimalatastytreats.de/wp-content/uploads/2024/08/IMG_9797-768x576.jpg" alt="Restaurant interior"/></div><div className="map-card"><iframe title="Map showing example location at Tokyo Tower" src="https://www.google.com/maps?q=Tokyo%20Tower%2C%20Japan&output=embed" loading="lazy" /></div></section>
      <section className="featured"><div className="container"><div className="section-heading"><div className="eyebrow">featured dishes</div><h2>Our Menu</h2></div><div className="featured-grid">{dishes.map(([name,description,image])=><article className="food-tile" key={name}><img src={image} alt={name}/><div className="food-tile-content"><h3>{name}</h3><p>{description}</p></div></article>)}</div><div style={{textAlign:"center",marginTop:38}}><Link href="/menu" className="btn btn-outline">View Full Menus <ArrowRight size={16}/></Link></div></div></section>
      <section className="bestsellers-section"><div className="container"><div className="section-heading"><div className="eyebrow">Most loved</div><h2>Best Sellers</h2><p>The dishes our guests return for again and again.</p></div><div className="bestsellers-grid"><article><div className="best-seller-image"><img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85" alt="Butter Chicken"/><span>01</span></div><div className="best-seller-copy"><div><h3>Butter Chicken</h3><small>Chef's choice</small></div><strong>€16.90</strong></div><p>Silky tomato sauce, tender chicken and a signature blend of aromatic spices.</p><Link href="/order" className="best-seller-link">Order this dish <ArrowRight size={15}/></Link></article><article><div className="best-seller-image"><img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85" alt="Royal Biryani"/><span>02</span></div><div className="best-seller-copy"><div><h3>Royal Biryani</h3><small>Guest favourite</small></div><strong>€18.50</strong></div><p>Fragrant basmati rice layered with herbs, saffron and warming spices.</p><Link href="/order" className="best-seller-link">Order this dish <ArrowRight size={15}/></Link></article><article><div className="best-seller-image"><img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85" alt="Tandoori Grill"/><span>03</span></div><div className="best-seller-copy"><div><h3>Tandoori Grill</h3><small>From the fire</small></div><strong>€21.90</strong></div><p>Char-grilled favourites finished with herbs, lemon and a touch of smoke.</p><Link href="/order" className="best-seller-link">Order this dish <ArrowRight size={15}/></Link></article></div></div></section>
      <section className="experience-section"><div className="container experience-grid"><div><div className="eyebrow">The Saffron experience</div><h2>Made for long evenings and unforgettable moments.</h2><p>From the first welcome to the final cup of chai, every detail is designed to make your visit feel special.</p></div><div className="experience-points"><div><span>01</span><strong>Authentic flavours</strong><p>Traditional recipes with a refined modern touch.</p></div><div><span>02</span><strong>Warm hospitality</strong><p>Thoughtful service for relaxed celebrations.</p></div><div><span>03</span><strong>Private moments</strong><p>A beautiful setting for every occasion.</p></div></div></div></section>
      <section className="reviews-section"><div className="container"><div className="section-heading"><div className="eyebrow">Guest book</div><h2>Words from our table</h2></div><div className="reviews-grid"><article><div className="stars"><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/></div><p>“Beautiful atmosphere, generous food and flavours that stayed with us long after dinner.”</p><strong>Amelia R.</strong></article><article><div className="stars"><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/></div><p>“The perfect place for a special evening. The service was warm and every dish arrived beautifully.”</p><strong>Daniel K.</strong></article><article><div className="stars"><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/></div><p>“Our new favourite restaurant. The biryani and house chai are absolutely exceptional.”</p><strong>Sophia M.</strong></article></div></div></section>
      <section className="footer"><div className="footer-restaurant"><img src="https://vimalatastytreats.de/wp-content/uploads/2024/07/VIMALAS.png" alt="Saffron House restaurant interior"/><div className="footer-overlay"><div className="footer-logo">SAFFRON HOUSE<small>AUTHENTIC INDIAN KITCHEN</small></div><p>Wilhelminenstraße 10,<br/>Darmstadt, Hessen 64283</p><h3>OPENING HOURS</h3><p><b>Restaurant Timings</b><br/>Lunch: 11:00 – 14:30 | Dinner: 17:00 – 22:30<br/>We are Closed on Monday</p><Link href="/reservation" className="btn btn-gold">Make a Reservation <CalendarDays size={16}/></Link><div className="footer-links"><Link href="/">HOME</Link><Link href="/menu">OUR MENUS</Link><Link href="/contact">CONTACT</Link><Link href="/reservation">RESERVATION</Link><Link href="/contact">IMPRINT</Link></div><small>© ALL RIGHTS RESERVED<br/>SAFFRON HOUSE</small></div></div></section>
    </main>
  );
}
