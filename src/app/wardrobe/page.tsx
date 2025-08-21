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
import { wardrobeData, WARDROBE_CATEGORIES, USER_PROFILE } from "@/data";
import {
	TodaysRecommendationCard,
	WardrobeItemCard,
	OutfitCard,
	QuickStatsCard,
	WeeklyPlanCard,
} from "@/components/wardrobe";

// Use imported data
const wardrobeItems = wardrobeData;
export default function WardrobePage() {
	const [activeTab, setActiveTab] = useState("all");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedDay, setSelectedDay] = useState("Wednesday"); // Default to today

	const categories = ["All", ...WARDROBE_CATEGORIES];

	const filteredItems =
		selectedCategory === "All"
			? wardrobeItems.all
			: wardrobeItems.all.filter(
					(item) => item.category === selectedCategory
			  );

	// Get selected day's outfit data
	const selectedDayOutfit =
		wardrobeItems.weeklyPlan.find(
			(dayPlan) => dayPlan.day === selectedDay
		) ||
		wardrobeItems.weeklyPlan.find((dayPlan) => dayPlan.day === "Wednesday"); // Fallback to Wednesday

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

							{/* Day Switcher */}
							<div className="mb-6">
								<div className="flex items-center gap-2 mb-3">
									<svg
										className="w-4 h-4 text-muted-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<span className="text-sm font-medium text-muted-foreground">
										View outfit for:
									</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{wardrobeItems.weeklyPlan.map((dayPlan) => (
										<Button
											key={dayPlan.day}
											variant={
												selectedDay === dayPlan.day
													? "default"
													: "outline"
											}
											size="sm"
											onClick={() =>
												setSelectedDay(dayPlan.day)
											}
											className="text-xs"
										>
											<div className="flex flex-col items-center">
												<span className="font-medium">
													{dayPlan.day.slice(0, 3)}
												</span>
												<span className="text-xs opacity-70">
													{dayPlan.date.split("-")[2]}
												</span>
											</div>
										</Button>
									))}
								</div>
							</div>

							<TodaysRecommendationCard
								selectedDay={selectedDay}
								selectedDayOutfit={selectedDayOutfit}
							/>
						</div>

						{/* Compact Analytics */}
						<div className="space-y-4">
							<QuickStatsCard wardrobeItems={wardrobeItems} />

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
								<WardrobeItemCard key={item.id} item={item} />
							))}
						</div>
					</TabsContent>

					<TabsContent value="outfits" className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{wardrobeItems.outfits.map((outfit) => (
								<OutfitCard key={outfit.id} outfit={outfit} />
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
								<WeeklyPlanCard
									key={dayPlan.day}
									dayPlan={dayPlan}
								/>
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
