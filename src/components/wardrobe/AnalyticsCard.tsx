import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WardrobeData, calculateAnalytics } from "@/data";
import {
	HiChartBar,
	HiTag,
	HiCheckCircle,
	HiCalendar,
	HiRefresh,
	HiUser,
	HiShieldCheck,
	HiColorSwatch,
	HiClock,
	HiSparkles,
	HiTrendingUp,
	HiScale,
} from "react-icons/hi";

interface AnalyticsCardProps {
	wardrobeItems: WardrobeData;
}

export function AnalyticsCard({ wardrobeItems }: AnalyticsCardProps) {
	// Calculate all analytics using the data module
	const analytics = calculateAnalytics(wardrobeItems);
	const { totalItems, categoryStats, wearStats, timeBasedStats, usageStats } =
		analytics;

	const StatItem = ({
		icon,
		label,
		value,
		color = "primary",
	}: {
		icon: React.ReactNode;
		label: string;
		value: string | number;
		color?: string;
	}) => (
		<div className="flex items-center justify-between p-3 rounded-lg border bg-card">
			<div className="flex items-center gap-3">
				<div
					className={`w-8 h-8 bg-${color}/10 rounded-full flex items-center justify-center`}
				>
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
					<HiChartBar className="w-5 h-5" />
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
								icon={
									<HiTag className="w-4 h-4 text-blue-600" />
								}
								label="Total Items"
								value={totalItems}
								color="blue"
							/>
							<StatItem
								icon={
									<HiCheckCircle className="w-4 h-4 text-green-600" />
								}
								label="Weekly Worn"
								value={timeBasedStats.weeklyWorn}
								color="green"
							/>
							<StatItem
								icon={
									<HiCalendar className="w-4 h-4 text-purple-600" />
								}
								label="Monthly Worn"
								value={timeBasedStats.monthlyWorn}
								color="purple"
							/>
							<StatItem
								icon={
									<HiRefresh className="w-4 h-4 text-red-600" />
								}
								label="Repeat Rate"
								value={`${usageStats.repeatPercentage}%`}
								color="red"
							/>
						</div>

						<div className="pt-4 border-t">
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium">
									Items Left to Wear
								</span>
								<Badge variant="outline">
									{usageStats.leftToWear} items
								</Badge>
							</div>
							<div className="w-full bg-muted rounded-full h-2">
								<div
									className="bg-primary h-2 rounded-full transition-all"
									style={{
										width: `${
											((totalItems -
												usageStats.leftToWear) /
												totalItems) *
											100
										}%`,
									}}
								/>
							</div>
							<div className="flex justify-between text-xs text-muted-foreground mt-1">
								<span>
									Worn: {totalItems - usageStats.leftToWear}
								</span>
								<span>Unworn: {usageStats.leftToWear}</span>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="categories" className="space-y-4 mt-4">
						<div className="grid grid-cols-1 gap-3">
							<StatItem
								icon={
									<HiUser className="w-4 h-4 text-blue-600" />
								}
								label="Shirts & Tops"
								value={categoryStats.shirts}
								color="blue"
							/>
							<StatItem
								icon={
									<HiShieldCheck className="w-4 h-4 text-green-600" />
								}
								label="Bottom Wear"
								value={categoryStats.pants}
								color="green"
							/>
							<StatItem
								icon={
									<HiColorSwatch className="w-4 h-4 text-purple-600" />
								}
								label="Shoes"
								value={categoryStats.shoes}
								color="purple"
							/>
							<StatItem
								icon={
									<HiClock className="w-4 h-4 text-yellow-600" />
								}
								label="Jackets & Outerwear"
								value={categoryStats.jackets}
								color="yellow"
							/>
							<StatItem
								icon={
									<HiSparkles className="w-4 h-4 text-pink-600" />
								}
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
									<span className="text-sm font-medium">
										Most Worn Item
									</span>
									<Badge>
										{wearStats.mostWornItem.timesWorn} times
									</Badge>
								</div>
								<p className="text-xs text-muted-foreground">
									{wearStats.mostWornItem.name}
								</p>
							</div>

							<div className="p-4 rounded-lg border bg-card">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium">
										Least Worn Item
									</span>
									<Badge variant="outline">
										{wearStats.leastWornItem.timesWorn || 0}{" "}
										times
									</Badge>
								</div>
								<p className="text-xs text-muted-foreground">
									{wearStats.leastWornItem.name}
								</p>
							</div>

							<StatItem
								icon={
									<HiTrendingUp className="w-4 h-4 text-orange-600" />
								}
								label="Total Wears"
								value={wearStats.totalWorn}
								color="orange"
							/>

							<StatItem
								icon={
									<HiScale className="w-4 h-4 text-teal-600" />
								}
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
