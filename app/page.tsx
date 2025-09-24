"use client";

import { useEffect } from "react";
import "./globals.css";

export default function Home() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		document.querySelectorAll<HTMLElement>(".poster-card").forEach((card) => observer.observe(card));
		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-black text-white">
			<nav className="relative z-50 px-6 py-6 bg-black/90 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<img src="/assets/images/logos/photo_5940513526915385472_y.jpg" alt="Nextwavetech Logo" className="w-12 h-12 rounded-lg object-cover" />
						<span className="text-3xl font-bold text-white">
							Nextwavetech <span className="green-text">VIP</span>
						</span>
					</div>
					<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-gradient hover:shadow-lg hover:shadow-green-500/25 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg green-glow inline-block">Join Telegram</a>
				</div>
			</nav>

			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/hero-overlays/download (2).png')" }} />
					<div className="absolute inset-0 bg-black/60" />
					<div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-900/20 to-transparent" />
					<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/20 to-transparent" />
					<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
				</div>

				<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Unlimited Movies, Series & Live TV
						<br />
						<span className="green-text">— Anytime, Anywhere</span>
					</h1>
					<p className="text-xl text-white mb-8 font-light max-w-2xl mx-auto">All your entertainment in one subscription</p>
					<div className="flex justify-center">
						<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-gradient hover:shadow-lg hover:shadow-green-500/25 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3 green-glow">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l8-5-8-5z" /></svg>
							<span>Start Watching Now</span>
						</a>
					</div>
					<div className="mt-12">
						<p className="text-lg green-text font-semibold mb-3">Top quality for the best price!</p>
						<p className="text-gray-300 max-w-xl mx-auto text-sm">Do you have questions or want more info? We are always ready to help you quickly and personally ✓</p>
					</div>
				</div>
			</section>
		</div>
	);
}


