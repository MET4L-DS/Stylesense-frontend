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
				{/* Welcome Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Welcome back, John!
					</h2>
					<p className="text-muted-foreground">
						Manage your wardrobe and create amazing outfits.
					</p>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Items
							</CardTitle>
							<svg
								className="h-4 w-4 text-muted-foreground"
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
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{wardrobeItems.all.length}
							</div>
							<p className="text-xs text-muted-foreground">
								pieces in wardrobe
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Saved Outfits
							</CardTitle>
							<svg
								className="h-4 w-4 text-muted-foreground"
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
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{wardrobeItems.outfits.length}
							</div>
							<p className="text-xs text-muted-foreground">
								outfit combinations
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Most Worn
							</CardTitle>
							<svg
								className="h-4 w-4 text-muted-foreground"
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
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">Jeans</div>
							<p className="text-xs text-muted-foreground">
								this month
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Style Score
							</CardTitle>
							<svg
								className="h-4 w-4 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
								/>
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">8.5</div>
							<p className="text-xs text-muted-foreground">
								out of 10
							</p>
						</CardContent>
					</Card>
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
