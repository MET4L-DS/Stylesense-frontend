"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for wardrobe items
const wardrobeItems = {
	all: [
		{
			id: 1,
			name: "Classic White Button-Down",
			category: "Shirts",
			color: "White",
			brand: "StyleSense",
			image: "/api/placeholder/200/300",
			tags: ["Business", "Casual"],
		},
		{
			id: 2,
			name: "Dark Wash Skinny Jeans",
			category: "Pants",
			color: "Dark Blue",
			brand: "Denim Co",
			image: "/api/placeholder/200/300",
			tags: ["Casual", "Weekend"],
		},
		{
			id: 3,
			name: "Black Blazer",
			category: "Jackets",
			color: "Black",
			brand: "StyleSense",
			image: "/api/placeholder/200/300",
			tags: ["Business", "Formal"],
		},
		{
			id: 4,
			name: "Striped Long Sleeve Tee",
			category: "Shirts",
			color: "Navy/White",
			brand: "Basic Wear",
			image: "/api/placeholder/200/300",
			tags: ["Casual"],
		},
		{
			id: 5,
			name: "Wool Coat",
			category: "Jackets",
			color: "Camel",
			brand: "Winter Collection",
			image: "/api/placeholder/200/300",
			tags: ["Winter", "Formal"],
		},
		{
			id: 6,
			name: "High-Waisted Trousers",
			category: "Pants",
			color: "Black",
			brand: "Professional",
			image: "/api/placeholder/200/300",
			tags: ["Business", "Formal"],
		},
	],
	outfits: [
		{
			id: 1,
			name: "Business Meeting",
			items: [
				"Classic White Button-Down",
				"Black Blazer",
				"High-Waisted Trousers",
			],
			occasion: "Work",
			lastWorn: "2025-08-15",
		},
		{
			id: 2,
			name: "Weekend Casual",
			items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
			occasion: "Casual",
			lastWorn: "2025-08-18",
		},
	],
	weeklyPlan: [
		{
			day: "Monday",
			date: "2025-08-25",
			weather: "Sunny, 22°C",
			schedule: [
				"9:00 AM - Team Meeting",
				"2:00 PM - Client Presentation",
			],
			recommendedOutfit: {
				name: "Professional Power",
				items: [
					"Classic White Button-Down",
					"Black Blazer",
					"High-Waisted Trousers",
				],
				confidence: 95,
				reason: "Perfect for important meetings and presentations",
			},
			alternatives: [
				{
					name: "Smart Casual",
					items: [
						"Striped Long Sleeve Tee",
						"Black Blazer",
						"Dark Wash Skinny Jeans",
					],
					confidence: 80,
				},
			],
		},
		{
			day: "Tuesday",
			date: "2025-08-26",
			weather: "Cloudy, 18°C",
			schedule: [
				"10:00 AM - Casual Team Sync",
				"4:00 PM - Coffee with Friends",
			],
			recommendedOutfit: {
				name: "Casual Comfort",
				items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
				confidence: 90,
				reason: "Comfortable for casual work and social activities",
			},
			alternatives: [
				{
					name: "Layered Look",
					items: [
						"Classic White Button-Down",
						"Wool Coat",
						"Dark Wash Skinny Jeans",
					],
					confidence: 75,
				},
			],
		},
		{
			day: "Wednesday",
			date: "2025-08-27",
			weather: "Rainy, 15°C",
			schedule: ["Working from Home"],
			recommendedOutfit: {
				name: "Cozy WFH",
				items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
				confidence: 85,
				reason: "Comfortable for video calls and home productivity",
			},
			alternatives: [],
		},
		{
			day: "Thursday",
			date: "2025-08-28",
			weather: "Partly Cloudy, 20°C",
			schedule: [
				"11:00 AM - Department Meeting",
				"6:00 PM - Dinner Date",
			],
			recommendedOutfit: {
				name: "Day to Night",
				items: [
					"Classic White Button-Down",
					"Black Blazer",
					"High-Waisted Trousers",
				],
				confidence: 92,
				reason: "Versatile enough for work and can transition to evening",
			},
			alternatives: [
				{
					name: "Chic Alternative",
					items: [
						"Striped Long Sleeve Tee",
						"Wool Coat",
						"High-Waisted Trousers",
					],
					confidence: 78,
				},
			],
		},
		{
			day: "Friday",
			date: "2025-08-29",
			weather: "Sunny, 25°C",
			schedule: ["Casual Friday", "7:00 PM - Happy Hour"],
			recommendedOutfit: {
				name: "Casual Friday",
				items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
				confidence: 88,
				reason: "Perfect for relaxed work atmosphere and after-work socializing",
			},
			alternatives: [
				{
					name: "Smart Casual",
					items: [
						"Classic White Button-Down",
						"Dark Wash Skinny Jeans",
					],
					confidence: 82,
				},
			],
		},
		{
			day: "Saturday",
			date: "2025-08-30",
			weather: "Sunny, 27°C",
			schedule: ["10:00 AM - Brunch", "3:00 PM - Shopping"],
			recommendedOutfit: {
				name: "Weekend Chic",
				items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
				confidence: 90,
				reason: "Comfortable for walking and stylish for social activities",
			},
			alternatives: [],
		},
		{
			day: "Sunday",
			date: "2025-08-31",
			weather: "Cloudy, 19°C",
			schedule: ["Relaxation Day", "2:00 PM - Family Visit"],
			recommendedOutfit: {
				name: "Cozy Comfort",
				items: ["Striped Long Sleeve Tee", "Dark Wash Skinny Jeans"],
				confidence: 85,
				reason: "Comfortable for relaxing and appropriate for family time",
			},
			alternatives: [
				{
					name: "Polished Casual",
					items: [
						"Classic White Button-Down",
						"Dark Wash Skinny Jeans",
					],
					confidence: 75,
				},
			],
		},
	],
};

export default function WardrobePage() {
	const [activeTab, setActiveTab] = useState("all");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Shirts", "Pants", "Jackets", "Accessories"];

	const filteredItems =
		selectedCategory === "All"
			? wardrobeItems.all
			: wardrobeItems.all.filter(
					(item) => item.category === selectedCategory
			  );

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b border-border">
				<div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
					<div className="flex items-center space-x-6">
						<Link href="/">
							<h1 className="text-2xl font-bold text-foreground">
								StyleSense
							</h1>
						</Link>
						<nav className="hidden md:flex space-x-6">
							<Link
								href="/wardrobe"
								className="text-foreground font-medium"
							>
								My Wardrobe
							</Link>
							<Link
								href="/shop"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Shop
							</Link>
							<Link
								href="/outfits"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Outfit Builder
							</Link>
						</nav>
					</div>

					<div className="flex items-center space-x-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="relative h-8 w-8 rounded-full"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage
											src="/api/placeholder/32/32"
											alt="@user"
										/>
										<AvatarFallback>U</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-56"
								align="end"
								forceMount
							>
								<DropdownMenuLabel className="font-normal">
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">
											John Doe
										</p>
										<p className="text-xs leading-none text-muted-foreground">
											john@example.com
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									Profile Settings
								</DropdownMenuItem>
								<DropdownMenuItem>
									Style Preferences
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Log out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-6 py-8">
				{/* Welcome Section with Today's Outfit */}
				<div className="mb-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<h2 className="text-3xl font-bold text-foreground mb-2">
								Welcome back, John!
							</h2>
							<p className="text-muted-foreground mb-6">
								Manage your wardrobe and create amazing outfits.
							</p>

							{/* Today's Recommendation */}
							<Card className="bg-primary/5 border-primary/20">
								<CardHeader>
									<div className="flex items-center justify-between">
										<div>
											<CardTitle className="text-lg">
												Today's Perfect Look
											</CardTitle>
											<CardDescription className="flex items-center gap-2">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z"
													/>
												</svg>
												Wednesday, August 21 • Rainy,
												15°C
											</CardDescription>
										</div>
										<div className="flex items-center gap-1">
											<svg
												className="w-5 h-5 text-yellow-500"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
											</svg>
											<span className="text-lg font-bold">
												85%
											</span>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-6">
										<div className="w-32 h-40 bg-gradient-to-b from-background to-muted/30 rounded-lg flex flex-col items-center justify-center border border-border relative overflow-hidden">
											{/* Clothing Items Collection - Hero Version */}
											<div className="absolute inset-3 grid grid-cols-2 gap-2">
												{/* Top Wear */}
												<div className="bg-primary/10 rounded-md flex items-center justify-center border border-primary/20">
													<div className="text-center">
														<svg
															className="w-5 h-5 mx-auto mb-1 text-primary/60"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
															/>
														</svg>
														<span className="text-xs text-primary/80 font-medium">
															Tee
														</span>
													</div>
												</div>

												{/* Bottom Wear */}
												<div className="bg-secondary/10 rounded-md flex items-center justify-center border border-secondary/20">
													<div className="text-center">
														<svg
															className="w-5 h-5 mx-auto mb-1 text-secondary/60"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
															/>
														</svg>
														<span className="text-xs text-secondary/80 font-medium">
															Jeans
														</span>
													</div>
												</div>

												{/* Footwear */}
												<div className="bg-accent/10 rounded-md flex items-center justify-center border border-accent/20">
													<div className="text-center">
														<svg
															className="w-5 h-5 mx-auto mb-1 text-accent/60"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
														<span className="text-xs text-accent/80 font-medium">
															Shoes
														</span>
													</div>
												</div>

												{/* Optional Accessory */}
												<div className="bg-muted/30 rounded-md flex items-center justify-center border border-muted-foreground/10 opacity-50">
													<div className="text-center">
														<svg
															className="w-4 h-4 mx-auto mb-1 text-muted-foreground/40"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M12 6v6m0 0v6m0-6h6m-6 0H6"
															/>
														</svg>
														<span className="text-xs text-muted-foreground/40 font-medium">
															-
														</span>
													</div>
												</div>
											</div>

											{/* Outfit Name */}
											<div className="absolute bottom-2 left-2 right-2">
												<div className="bg-background/95 backdrop-blur-sm rounded px-2 py-1 border border-border/50">
													<p className="text-xs font-medium text-center">
														Cozy WFH
													</p>
												</div>
											</div>
										</div>
										<div className="flex-1">
											<h3 className="font-semibold mb-2">
												Cozy WFH
											</h3>
											<p className="text-sm text-muted-foreground mb-3">
												Perfect for video calls and home
												productivity
											</p>
											<div className="space-y-1 mb-4">
												<p className="text-sm">
													• Striped Long Sleeve Tee
												</p>
												<p className="text-sm">
													• Dark Wash Skinny Jeans
												</p>
											</div>
											<div className="flex gap-2">
												<Button size="sm">
													Wear This Today
												</Button>
												<Button
													size="sm"
													variant="outline"
												>
													See Alternatives
												</Button>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Compact Analytics */}
						<div className="space-y-4">
							<Card>
								<CardHeader className="pb-3">
									<CardTitle className="text-base">
										Quick Stats
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
												<svg
													className="w-4 h-4 text-primary"
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
											<span className="text-sm">
												Total Items
											</span>
										</div>
										<span className="font-bold">
											{wardrobeItems.all.length}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
												<svg
													className="w-4 h-4 text-red-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
													/>
												</svg>
											</div>
											<span className="text-sm">
												Saved Outfits
											</span>
										</div>
										<span className="font-bold">
											{wardrobeItems.outfits.length}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
												<svg
													className="w-4 h-4 text-green-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
													/>
												</svg>
											</div>
											<span className="text-sm">
												Most Worn
											</span>
										</div>
										<span className="font-bold text-sm">
											Jeans
										</span>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
												<svg
													className="w-4 h-4 text-yellow-600"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
												</svg>
											</div>
											<span className="text-sm">
												Style Score
											</span>
										</div>
										<span className="font-bold">
											8.5/10
										</span>
									</div>
								</CardContent>
							</Card>

							{/* Weekly Progress */}
							<Card>
								<CardHeader className="pb-3">
									<CardTitle className="text-base">
										This Week
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="flex justify-between text-sm">
											<span>Outfits Planned</span>
											<span className="font-medium">
												5/7
											</span>
										</div>
										<div className="w-full bg-muted rounded-full h-2">
											<div
												className="bg-primary h-2 rounded-full"
												style={{ width: "71%" }}
											></div>
										</div>
										<div className="flex justify-between text-xs text-muted-foreground">
											<span>Avg Confidence: 89%</span>
											<span>3 Versatile Pieces</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>

				{/* Wardrobe Management */}
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="space-y-6"
				>
					<div className="flex justify-between items-center">
						<TabsList>
							<TabsTrigger value="all">All Items</TabsTrigger>
							<TabsTrigger value="outfits">
								Saved Outfits
							</TabsTrigger>
							<TabsTrigger value="weekly">
								Weekly Planner
							</TabsTrigger>
							<TabsTrigger value="wishlist">Wishlist</TabsTrigger>
						</TabsList>

						<Button>
							<svg
								className="w-4 h-4 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
							Add Item
						</Button>
					</div>

					<TabsContent value="all" className="space-y-6">
						{/* Category Filter */}
						<div className="flex space-x-2">
							{categories.map((category) => (
								<Button
									key={category}
									variant={
										selectedCategory === category
											? "default"
											: "outline"
									}
									size="sm"
									onClick={() =>
										setSelectedCategory(category)
									}
								>
									{category}
								</Button>
							))}
						</div>

						{/* Items Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredItems.map((item) => (
								<Card
									key={item.id}
									className="group cursor-pointer hover:shadow-md transition-shadow"
								>
									<CardContent className="p-4">
										<div className="aspect-[3/4] bg-muted rounded-lg mb-4 flex items-center justify-center">
											<span className="text-muted-foreground text-sm">
												Image
											</span>
										</div>
										<div className="space-y-2">
											<h3 className="font-semibold text-sm">
												{item.name}
											</h3>
											<p className="text-xs text-muted-foreground">
												{item.brand}
											</p>
											<div className="flex items-center justify-between">
												<Badge
													variant="secondary"
													className="text-xs"
												>
													{item.category}
												</Badge>
												<span className="text-xs text-muted-foreground">
													{item.color}
												</span>
											</div>
											<div className="flex flex-wrap gap-1">
												{item.tags.map((tag) => (
													<Badge
														key={tag}
														variant="outline"
														className="text-xs"
													>
														{tag}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>

					<TabsContent value="outfits" className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{wardrobeItems.outfits.map((outfit) => (
								<Card
									key={outfit.id}
									className="cursor-pointer hover:shadow-md transition-shadow"
								>
									<CardHeader>
										<CardTitle className="text-lg">
											{outfit.name}
										</CardTitle>
										<CardDescription>
											Last worn:{" "}
											{new Date(
												outfit.lastWorn
											).toLocaleDateString()}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<Badge variant="outline">
												{outfit.occasion}
											</Badge>
											<div className="space-y-1">
												<p className="text-sm font-medium">
													Items:
												</p>
												{outfit.items.map(
													(item, index) => (
														<p
															key={index}
															className="text-sm text-muted-foreground"
														>
															• {item}
														</p>
													)
												)}
											</div>
											<div className="flex space-x-2 pt-2">
												<Button
													size="sm"
													variant="outline"
												>
													Edit
												</Button>
												<Button size="sm">
													Wear Today
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>

					<TabsContent value="weekly" className="space-y-6">
						<div className="mb-6">
							<h3 className="text-xl font-semibold text-foreground mb-2">
								This Week's Outfit Recommendations
							</h3>
							<p className="text-muted-foreground">
								AI-powered outfit suggestions based on your
								schedule, weather, and style preferences
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{wardrobeItems.weeklyPlan.map((dayPlan) => (
								<Card
									key={dayPlan.day}
									className="hover:shadow-md transition-shadow"
								>
									<CardHeader className="pb-3">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle className="text-base">
													{dayPlan.day}
												</CardTitle>
												<CardDescription className="text-xs">
													{dayPlan.date}
												</CardDescription>
											</div>
											<div className="flex items-center gap-1">
												<svg
													className="w-3 h-3 text-yellow-500"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
												</svg>
												<span className="text-xs font-medium">
													{
														dayPlan
															.recommendedOutfit
															.confidence
													}
													%
												</span>
											</div>
										</div>
									</CardHeader>
									<CardContent className="space-y-3">
										{/* Weather */}
										<div className="flex items-center gap-2 text-xs text-muted-foreground">
											<svg
												className="w-3 h-3"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z"
												/>
											</svg>
											{dayPlan.weather}
										</div>

										{/* Outfit Image Template */}
										<div className="relative">
											<div className="aspect-[3/4] bg-gradient-to-b from-background to-muted/30 rounded-lg flex flex-col items-center justify-center border border-border relative overflow-hidden">
												{/* Clothing Items Collection */}
												<div className="absolute inset-2 grid grid-cols-2 gap-1">
													{/* Top Wear */}
													<div className="bg-primary/10 rounded-md flex items-center justify-center border border-primary/20">
														<div className="text-center">
															<svg
																className="w-4 h-4 mx-auto mb-1 text-primary/60"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={
																		2
																	}
																	d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
																/>
															</svg>
															<span className="text-xs text-primary/80 font-medium">
																Top
															</span>
														</div>
													</div>

													{/* Bottom Wear */}
													<div className="bg-secondary/10 rounded-md flex items-center justify-center border border-secondary/20">
														<div className="text-center">
															<svg
																className="w-4 h-4 mx-auto mb-1 text-secondary/60"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={
																		2
																	}
																	d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
																/>
															</svg>
															<span className="text-xs text-secondary/80 font-medium">
																Bottom
															</span>
														</div>
													</div>

													{/* Footwear */}
													<div className="bg-accent/10 rounded-md flex items-center justify-center border border-accent/20">
														<div className="text-center">
															<svg
																className="w-4 h-4 mx-auto mb-1 text-accent/60"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={
																		2
																	}
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span className="text-xs text-accent/80 font-medium">
																Shoes
															</span>
														</div>
													</div>

													{/* Accessory (conditional) */}
													{dayPlan.recommendedOutfit.items.some(
														(item) =>
															item.includes(
																"Blazer"
															) ||
															item.includes(
																"Coat"
															) ||
															item.includes(
																"Scarf"
															) ||
															item.includes(
																"Hat"
															) ||
															item.includes(
																"Belt"
															) ||
															item.includes("Bag")
													) ? (
														<div className="bg-yellow-50 rounded-md flex items-center justify-center border border-yellow-200">
															<div className="text-center">
																<svg
																	className="w-4 h-4 mx-auto mb-1 text-yellow-600"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
																	/>
																</svg>
																<span className="text-xs text-yellow-700 font-medium">
																	Extra
																</span>
															</div>
														</div>
													) : (
														<div className="bg-muted/30 rounded-md flex items-center justify-center border border-muted-foreground/10 opacity-50">
															<div className="text-center">
																<svg
																	className="w-3 h-3 mx-auto mb-1 text-muted-foreground/40"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d="M12 6v6m0 0v6m0-6h6m-6 0H6"
																	/>
																</svg>
																<span className="text-xs text-muted-foreground/40 font-medium">
																	Optional
																</span>
															</div>
														</div>
													)}
												</div>

												{/* Outfit Name */}
												<div className="absolute bottom-1 left-1 right-1">
													<div className="bg-background/95 backdrop-blur-sm rounded px-2 py-1 border border-border/50">
														<p className="text-xs font-medium text-center truncate">
															{
																dayPlan
																	.recommendedOutfit
																	.name
															}
														</p>
													</div>
												</div>
											</div>

											{/* Confidence Badge */}
											<Badge
												variant="default"
												className="absolute -top-2 -right-2 text-xs px-2 py-1"
											>
												{
													dayPlan.recommendedOutfit
														.confidence
												}
												%
											</Badge>
										</div>

										{/* Schedule Preview */}
										<div className="space-y-1">
											<p className="text-xs font-medium">
												Today's Schedule:
											</p>
											{dayPlan.schedule
												.slice(0, 2)
												.map((event, index) => (
													<p
														key={index}
														className="text-xs text-muted-foreground flex items-center gap-1"
													>
														<svg
															className="w-2 h-2"
															fill="currentColor"
															viewBox="0 0 8 8"
														>
															<circle
																cx="4"
																cy="4"
																r="3"
															/>
														</svg>
														{event.length > 25
															? event.substring(
																	0,
																	25
															  ) + "..."
															: event}
													</p>
												))}
											{dayPlan.schedule.length > 2 && (
												<p className="text-xs text-muted-foreground">
													+
													{dayPlan.schedule.length -
														2}{" "}
													more
												</p>
											)}
										</div>

										{/* Action Buttons */}
										<div className="flex gap-1">
											<Button
												size="sm"
												className="flex-1 text-xs"
											>
												Select
											</Button>
											{dayPlan.alternatives.length >
												0 && (
												<Button
													size="sm"
													variant="outline"
													className="text-xs"
												>
													{
														dayPlan.alternatives
															.length
													}{" "}
													Alt
												</Button>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Simplified Weekly Overview */}
						<Card className="mt-6">
							<CardHeader>
								<CardTitle className="text-lg">
									Weekly Overview
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<div className="text-center p-3 bg-primary/5 rounded-lg">
										<div className="text-xl font-bold text-foreground">
											7
										</div>
										<p className="text-xs text-muted-foreground">
											Days Planned
										</p>
									</div>
									<div className="text-center p-3 bg-green-50 rounded-lg">
										<div className="text-xl font-bold text-foreground">
											89%
										</div>
										<p className="text-xs text-muted-foreground">
											Avg Confidence
										</p>
									</div>
									<div className="text-center p-3 bg-blue-50 rounded-lg">
										<div className="text-xl font-bold text-foreground">
											12
										</div>
										<p className="text-xs text-muted-foreground">
											Items Used
										</p>
									</div>
									<div className="text-center p-3 bg-yellow-50 rounded-lg">
										<div className="text-xl font-bold text-foreground">
											3
										</div>
										<p className="text-xs text-muted-foreground">
											Versatile Pieces
										</p>
									</div>
								</div>
								<div className="mt-4 flex gap-2">
									<Button
										variant="outline"
										size="sm"
										className="flex-1"
									>
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
											/>
										</svg>
										Regenerate Week
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="flex-1"
									>
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										Preferences
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="wishlist" className="space-y-6">
						<div className="text-center py-12">
							<div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
								<svg
									className="w-12 h-12 text-muted-foreground"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold mb-2">
								Your wishlist is empty
							</h3>
							<p className="text-muted-foreground mb-4">
								Start adding items you'd like to purchase
							</p>
							<Link href="/shop">
								<Button>Browse Shop</Button>
							</Link>
						</div>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
