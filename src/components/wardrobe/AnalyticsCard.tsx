import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WardrobeData } from "@/data";

interface AnalyticsCardProps {
	wardrobeItems: WardrobeData;
}

export function AnalyticsCard({ wardrobeItems }: AnalyticsCardProps) {
	// Calculate analytics
	const totalItems = wardrobeItems.all.length;
	
	// Category breakdown
	const categoryStats = {
		shirts: wardrobeItems.all.filter(item => item.category === "Shirts").length,
		pants: wardrobeItems.all.filter(item => item.category === "Pants").length,
		jackets: wardrobeItems.all.filter(item => item.category === "Jackets").length,
		shoes: wardrobeItems.all.filter(item => item.category === "Shoes").length,
		accessories: wardrobeItems.all.filter(item => item.category === "Accessories").length,
	};

	// Wear statistics
	const wearStats = {
		totalWorn: wardrobeItems.all.reduce((sum, item) => sum + (item.timesWorn || 0), 0),
		averageWear: wardrobeItems.all.reduce((sum, item) => sum + (item.timesWorn || 0), 0) / totalItems,
		mostWornItem: wardrobeItems.all.reduce((prev, current) => 
			(current.timesWorn || 0) > (prev.timesWorn || 0) ? current : prev
		),
		leastWornItem: wardrobeItems.all.reduce((prev, current) => 
			(current.timesWorn || 0) < (prev.timesWorn || 0) ? current : prev
		),
	};

	// Time-based calculations
	const now = new Date();
	const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
	const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

	const weeklyWorn = wardrobeItems.all.filter(item => 
		item.lastWorn && new Date(item.lastWorn) >= oneWeekAgo
	).length;

	const monthlyWorn = wardrobeItems.all.filter(item => 
		item.lastWorn && new Date(item.lastWorn) >= oneMonthAgo
	).length;

	// Unworn items
	const neverWorn = wardrobeItems.all.filter(item => !item.timesWorn || item.timesWorn === 0).length;
	const leftToWear = neverWorn;

	// Repeat percentage calculation
	const itemsWornMultipleTimes = wardrobeItems.all.filter(item => (item.timesWorn || 0) > 1).length;
	const repeatPercentage = totalItems > 0 ? Math.round((itemsWornMultipleTimes / totalItems) * 100) : 0;

	const StatItem = ({ icon, label, value, color = "primary" }: {
		icon: React.ReactNode;
		label: string;
		value: string | number;
		color?: string;
	}) => (
		<div className="flex items-center justify-between p-3 rounded-lg border bg-card">
			<div className="flex items-center gap-3">
				<div className={`w-8 h-8 bg-${color}/10 rounded-full flex items-center justify-center`}>
					{icon}
				</div>
				<span className="text-sm font-medium">{label}</span>
			</div>
			<span className="font-bold text-lg">{value}</span>
		</div>
	);

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
					Wardrobe Analytics
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="categories">Categories</TabsTrigger>
						<TabsTrigger value="usage">Usage</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
							<StatItem
								icon={<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>}
								label="Total Items"
								value={totalItems}
								color="blue"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
								label="Weekly Worn"
								value={weeklyWorn}
								color="green"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
								label="Monthly Worn"
								value={monthlyWorn}
								color="purple"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
								label="Repeat Rate"
								value={`${repeatPercentage}%`}
								color="red"
							/>
						</div>
						
						<div className="pt-4 border-t">
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium">Items Left to Wear</span>
								<Badge variant="outline">{leftToWear} items</Badge>
							</div>
							<div className="w-full bg-muted rounded-full h-2">
								<div 
									className="bg-primary h-2 rounded-full transition-all" 
									style={{ width: `${((totalItems - leftToWear) / totalItems) * 100}%` }}
								/>
							</div>
							<div className="flex justify-between text-xs text-muted-foreground mt-1">
								<span>Worn: {totalItems - leftToWear}</span>
								<span>Unworn: {leftToWear}</span>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="categories" className="space-y-4 mt-4">
						<div className="grid grid-cols-1 gap-3">
							<StatItem
								icon={<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
								label="Shirts & Tops"
								value={categoryStats.shirts}
								color="blue"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
								label="Bottom Wear"
								value={categoryStats.pants}
								color="green"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.674-1.334c.343.604.398 1.33.398 2.13v.532c0 .108-.077.198-.202.21l-2.054.229a13.875 13.875 0 01-7.918 0l-2.054-.229c-.125-.012-.202-.102-.202-.21z" /></svg>}
								label="Shoes"
								value={categoryStats.shoes}
								color="purple"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
								label="Jackets & Outerwear"
								value={categoryStats.jackets}
								color="yellow"
							/>
							<StatItem
								icon={<svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
								label="Accessories"
								value={categoryStats.accessories}
								color="pink"
							/>
						</div>
					</TabsContent>

					<TabsContent value="usage" className="space-y-4 mt-4">
						<div className="space-y-3">
							<div className="p-4 rounded-lg border bg-card">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium">Most Worn Item</span>
									<Badge>{wearStats.mostWornItem.timesWorn} times</Badge>
								</div>
								<p className="text-xs text-muted-foreground">{wearStats.mostWornItem.name}</p>
							</div>
							
							<div className="p-4 rounded-lg border bg-card">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium">Least Worn Item</span>
									<Badge variant="outline">{wearStats.leastWornItem.timesWorn || 0} times</Badge>
								</div>
								<p className="text-xs text-muted-foreground">{wearStats.leastWornItem.name}</p>
							</div>

							<StatItem
								icon={<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
								label="Total Wears"
								value={wearStats.totalWorn}
								color="orange"
							/>
							
							<StatItem
								icon={<svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
								label="Average Wear"
								value={wearStats.averageWear.toFixed(1)}
								color="teal"
							/>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
