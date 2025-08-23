"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// TODO: Implement login logic
		console.log("Login attempt:", { email, password });

		// Simulate API call and redirect to wardrobe
		setTimeout(() => {
			setIsLoading(false);
			// Redirect to wardrobe page after successful login
			router.push("/wardrobe");
		}, 1000);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4">
			<div className="w-full max-w-md">
				{/* StyleSense Branding */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-foreground mb-2">
						StyleSense
					</h1>
					<p className="text-muted-foreground">
						Your Fashion Destination
					</p>
				</div>

				<Card className="shadow-lg">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-semibold text-center">
							Welcome Back
						</CardTitle>
						<CardDescription className="text-center">
							Sign in to your StyleSense account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-full"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
									className="w-full"
								/>
							</div>

							<div className="flex items-center justify-between text-sm">
								<Link
									href="/forgot-password"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Forgot password?
								</Link>
							</div>

							<Button
								type="submit"
								className="w-full"
								disabled={isLoading}
							>
								{isLoading ? "Signing in..." : "Sign In"}
							</Button>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-2 text-muted-foreground">
										Or continue with
									</span>
								</div>
							</div>

							<div className="mt-4 grid grid-cols-2 gap-3">
								<Button variant="outline" className="w-full">
									<FaGoogle className="mr-2 h-4 w-4" />
									Google
								</Button>
								<Button variant="outline" className="w-full">
									<FaTwitter className="mr-2 h-4 w-4" />
									Twitter
								</Button>
							</div>
						</div>

						<div className="mt-6 text-center text-sm">
							<span className="text-muted-foreground">
								Don't have an account?{" "}
							</span>
							<Link
								href="/signup"
								className="text-foreground hover:underline font-medium"
							>
								Sign up
							</Link>
						</div>
					</CardContent>
				</Card>

				<div className="mt-8 text-center text-xs text-muted-foreground">
					<p>
						By signing in, you agree to our{" "}
						<Link href="/terms" className="hover:underline">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link href="/privacy" className="hover:underline">
							Privacy Policy
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
