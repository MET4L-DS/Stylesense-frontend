"use client";

import { useState } from "react";
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

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// TODO: Implement signup logic
		console.log("Signup attempt:", formData);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
			<div className="w-full max-w-md">
				{/* StyleSense Branding */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-neutral-900 mb-2">
						StyleSense
					</h1>
					<p className="text-neutral-600">Your Fashion Destination</p>
				</div>

				<Card className="border-neutral-200 shadow-lg">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-semibold text-center">
							Create Account
						</CardTitle>
						<CardDescription className="text-center">
							Join StyleSense and discover your perfect style
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">
										First Name
									</Label>
									<Input
										id="firstName"
										name="firstName"
										type="text"
										placeholder="First name"
										value={formData.firstName}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										name="lastName"
										type="text"
										placeholder="Last name"
										value={formData.lastName}
										onChange={handleChange}
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="Create a password"
									value={formData.password}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="confirmPassword">
									Confirm Password
								</Label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									placeholder="Confirm your password"
									value={formData.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>

							<Button
								type="submit"
								className="w-full bg-neutral-900 hover:bg-neutral-800 text-white"
								disabled={isLoading}
							>
								{isLoading
									? "Creating Account..."
									: "Create Account"}
							</Button>
						</form>

						<div className="mt-6 text-center text-sm">
							<span className="text-neutral-600">
								Already have an account?{" "}
							</span>
							<Link
								href="/login"
								className="text-neutral-900 hover:underline font-medium"
							>
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>

				<div className="mt-8 text-center text-xs text-neutral-500">
					<p>
						By creating an account, you agree to our{" "}
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
