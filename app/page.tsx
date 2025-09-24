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

			{/* Highlights Section */}
			<section className="px-6 py-12">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center place-items-center justify-items-center">
						<div>
							<div className="w-16 h-16 green-gradient rounded-full flex items-center justify-center mx-auto mb-5 green-glow">
								<svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l8-5-8-5z"/></svg>
							</div>
							<h3 className="text-xl font-semibold text-white">10,000+ Movies & Series</h3>
							<p className="text-gray-400 mt-2 max-w-xs mx-auto">Endless entertainment at your fingertips</p>
						</div>
						<div>
							<div className="w-16 h-16 green-gradient rounded-full flex items-center justify-center mx-auto mb-5 green-glow">
								<svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Live Sports & TV Channels</h3>
							<p className="text-gray-400 mt-2 max-w-xs mx-auto">Never miss your favorite shows</p>
						</div>
						<div>
							<div className="w-16 h-16 green-gradient rounded-full flex items-center justify-center mx-auto mb-5 green-glow">
								<svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Works on Any Device</h3>
							<p className="text-gray-400 mt-2 max-w-xs mx-auto">Stream anywhere, anytime</p>
						</div>
						<div>
							<div className="w-16 h-16 green-gradient rounded-full flex items-center justify-center mx-auto mb-5 green-glow">
								<svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Affordable Pricing</h3>
							<p className="text-gray-400 mt-2 max-w-xs mx-auto">Premium content, budget‑friendly</p>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="px-6 py-14">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">Something for Everyone</h2>
					<p className="text-lg text-gray-400 text-center mt-2 mb-8">From Hollywood blockbusters to TV classics.</p>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center justify-items-center">
						{[
							"/assets/images/gallery/3500.webp",
							"/assets/images/gallery/images (2).jpg",
							"/assets/images/gallery/images (3).jpg",
							"/assets/images/gallery/MV5BYjQxYWNiNzgtOTc2Yi00OGEwLTk5MjAtODdiZTk0ZDJlZGY4XkEyXkFqcGc@._V1_.jpg",
							"/assets/images/gallery/MV5BZmI4YmU0NzMtNWM1Ni00NTZiLWJmZGMtZjMzNjk0ZmNmZDEzXkEyXkFqcGc@._V1_.jpg",
							"/assets/images/gallery/tlc-dom-online-payoff-1sheet-wheelbarrow.avif",
						].map((src, i) => (
							<div key={src} className="relative rounded-2xl overflow-hidden poster-card shadow-lg">
								<img src={src} alt={`Poster ${i + 1}`} className="w-full h-64 md:h-80 object-cover" />
								<div className="poster-overlay absolute inset-0 bg-black" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Watch Anywhere */}
			<section className="relative px-6 py-16 overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/overlays/free-iptv-featured-image.webp')" }} />
				<div className="absolute inset-0 -z-10 bg-black/60" />
				<div className="absolute top-0 left-0 -z-10 w-1/3 h-full bg-gradient-to-r from-green-900/20 to-transparent" />
				<div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-green-900/20 to-transparent" />
				<div className="absolute bottom-0 left-0 -z-10 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center justify-center">
					<div className="text-center">
						<h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Watch Anywhere,<br/>Anytime.</h2>
						<p className="text-gray-300 mt-4 text-lg">Compatible with Smart TVs, Android, iOS, Firestick, and more. Your entertainment follows you everywhere.</p>
						<div className="mt-8 grid sm:grid-cols-2 gap-4 place-items-center justify-items-center">
							{["Smart TV","Mobile & Tablet","Desktop","Firestick"].map((label) => (
								<div key={label} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-black/60 border border-green-500/30 hover:border-green-500/60 transition">
									<div className="w-5 h-5 text-green-400">●</div>
									<span className="text-white font-medium">{label}</span>
								</div>
							))}
						</div>
						<div className="mt-8 flex justify-center">
							<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-gradient hover:shadow-lg hover:shadow-green-500/25 text-white font-semibold px-6 py-3 rounded-xl green-glow inline-block">Get Started Today</a>
						</div>
					</div>
					<div className="glass-card rounded-2xl p-8 max-w-xl lg:ml-auto text-center mx-auto">
						<h3 className="text-2xl md:text-3xl font-bold text-white">Stream in 4K Quality</h3>
						<p className="text-gray-300 mt-3">Experience crystal-clear picture quality on any device, anywhere in the world.</p>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="px-6 py-12">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center place-items-center justify-items-center">
						{[
							["10M+","Active Users"],
							["50K+","Movies & Shows"],
							["99.9%","Uptime"],
							["4.9","Rating"],
						].map(([num, label]) => (
							<div key={label as string}>
								<div className="text-4xl md:text-5xl font-extrabold green-text mb-2">{num}</div>
								<div className="text-gray-400 text-sm md:text-base">{label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Solutions */}
			<section className="px-6 py-14">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">Our Entertainment Solutions</h2>
					<p className="text-lg text-gray-400 text-center mt-2 mb-8">Flexible options to fit your streaming needs</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center justify-items-center">
						{[
							["Premium Subscription","Full access to our entertainment library with unlimited streaming subscriptions","Learn More"],
							["Panel Provision","Complete streaming panel solutions for businesses and resellers","Explore"],
							["Credit System","Flexible payment options with our digital credit system","Get Credits"],
							["Rebrand Services","Personalized streaming experience with your own custom branding","Customize"],
						].map(([title, desc, cta]) => (
							<div key={title as string} className="solution-card streaming-card rounded-2xl p-8 text-center w-full min-h-[380px] flex flex-col">
								<div className="card-overlay rounded-2xl" />
								<div className="w-16 h-16 green-gradient rounded-full flex items-center justify-center mx-auto mb-6 green-glow" />
								<h3 className="text-xl font-semibold text-white">{title}</h3>
								<p className="text-gray-400 mt-3">{desc}</p>
								<div className="mt-auto flex justify-center">
									<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-border text-white px-5 py-2 rounded-lg hover:bg-green-500/10 transition inline-block">{cta}</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="px-6 py-14">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">What Our Users Say</h2>
					<p className="text-lg text-gray-400 text-center mt-2 mb-8">Real feedback from happy streamers</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center justify-items-center">
						{[
							["/assets/images/testimonials/sahrah.webp","Sahrah Johnson","Way better than cable! I love having all my shows in one place."],
							["/assets/images/testimonials/mike.jpg","Mike Chen","I can watch my shows anywhere. Perfect for my commute!"],
							["/assets/images/testimonials/davis.jpg","Emma Davis","Great service, highly recommend. Amazing value for money!"],
						].map(([src,name,quote]) => (
							<div key={name as string} className="streaming-card rounded-2xl p-8 w-full max-w-xl relative">
								<div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.25)" }} />
								<div className="flex items-center gap-4">
									<img src={src as string} alt={name as string} className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
									<div>
										<div className="text-white font-semibold">{name}</div>
										<div className="text-yellow-400 text-sm">★★★★★</div>
									</div>
								</div>
								<p className="text-gray-300 mt-5">{quote}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="px-6 py-16">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">Ready to Start Streaming?</h2>
					<p className="text-xl text-gray-300 mb-6">Join thousands of users who trust Nextwavetech for their entertainment needs.</p>
					<div className="flex justify-center">
						<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-105 green-glow inline-block">Get Started Now</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="px-6 py-14 border-t border-green-900/20 bg-black">
				<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-2xl font-extrabold text-white">Nextwavetech <span className="green-text">VIP</span></h3>
						<p className="text-gray-400 mt-3 max-w-md">Your premium destination for unlimited entertainment. Stream movies, series, and live TV anywhere.</p>
					</div>
					<div>
						<h4 className="text-white font-semibold mb-3">Services</h4>
						<ul className="space-y-2 text-gray-300">
							<li>Premium Subscriptions</li>
							<li>Panel Provision</li>
							<li>Rebrand Services</li>
							<li>Credit System</li>
						</ul>
					</div>
					<div>
						<h4 className="text-white font-semibold mb-3">Connect</h4>
						<a href="https://t.me/nextwavetech0" target="_blank" rel="noopener" className="green-gradient text-white px-6 py-3 rounded-lg font-semibold green-glow inline-block">Join Our Telegram</a>
					</div>
				</div>
				<div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-gray-500 text-sm text-center">© 2024 Nextwavetech VIP. All rights reserved.</div>
			</footer>
		</div>
	);
}


