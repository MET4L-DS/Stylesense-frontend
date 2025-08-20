import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="font-sans min-h-screen bg-background">
			{/* Header */}
			<header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
				<div className="flex items-center space-x-2">
					<h1 className="text-2xl font-bold text-foreground">
						StyleSense
					</h1>
				</div>
				<div className="flex items-center space-x-4">
					<Link href="/login">
						<Button variant="outline">Sign In</Button>
					</Link>
					<Link href="/signup">
						<Button>Sign Up</Button>
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<main className="max-w-7xl mx-auto px-6 py-16">
				<div className="text-center">
					<h2 className="text-5xl font-bold text-foreground mb-6">
						Discover Your Perfect Style
					</h2>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						StyleSense brings you the latest fashion trends and
						timeless classics. Explore our curated collection of
						clothing that matches your unique style.
					</p>

					<div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
						<Link href="/shop">
							<Button size="lg" className="px-8 py-3">
								Shop Now
							</Button>
						</Link>
						<Link href="/login">
							<Button
								size="lg"
								variant="outline"
								className="px-8 py-3"
							>
								Sign In to Continue
							</Button>
						</Link>
					</div>
				</div>

				{/* Features Section */}
				<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center p-6">
						<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-6 h-6 text-primary-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Latest Trends
						</h3>
						<p className="text-muted-foreground">
							Stay ahead with the newest fashion trends curated by
							our style experts.
						</p>
					</div>

					<div className="text-center p-6">
						<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-6 h-6 text-primary-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Quality Guaranteed
						</h3>
						<p className="text-muted-foreground">
							Premium materials and craftsmanship in every piece
							we offer.
						</p>
					</div>

					<div className="text-center p-6">
						<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-6 h-6 text-primary-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Fast Shipping
						</h3>
						<p className="text-muted-foreground">
							Quick and reliable delivery to your doorstep.
						</p>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="mt-20 border-t border-border py-8">
				<div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
					<p>&copy; 2025 StyleSense. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
