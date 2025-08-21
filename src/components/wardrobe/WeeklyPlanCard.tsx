import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DayPlan } from "@/data";

interface WeeklyPlanCardProps {
	dayPlan: DayPlan;
}

export function WeeklyPlanCard({ dayPlan }: WeeklyPlanCardProps) {
	return (
		<Card className="hover:shadow-md transition-shadow">
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
							{dayPlan.recommendedOutfit.confidence}%
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
											strokeWidth={2}
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
											strokeWidth={2}
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
											strokeWidth={2}
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
									item.includes("Blazer") ||
									item.includes("Coat") ||
									item.includes("Scarf") ||
									item.includes("Hat") ||
									item.includes("Belt") ||
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
												strokeWidth={2}
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
												strokeWidth={2}
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
									{dayPlan.recommendedOutfit.name}
								</p>
							</div>
						</div>
					</div>

					{/* Confidence Badge */}
					<Badge
						variant="default"
						className="absolute -top-2 -right-2 text-xs px-2 py-1"
					>
						{dayPlan.recommendedOutfit.confidence}%
					</Badge>
				</div>

				{/* Schedule Preview */}
				<div className="space-y-1">
					<p className="text-xs font-medium">Today's Schedule:</p>
					{dayPlan.schedule.slice(0, 2).map((event, index) => (
						<p
							key={index}
							className="text-xs text-muted-foreground flex items-center gap-1"
						>
							<svg
								className="w-2 h-2"
								fill="currentColor"
								viewBox="0 0 8 8"
							>
								<circle cx="4" cy="4" r="3" />
							</svg>
							{event.length > 25
								? event.substring(0, 25) + "..."
								: event}
						</p>
					))}
					{dayPlan.schedule.length > 2 && (
						<p className="text-xs text-muted-foreground">
							+{dayPlan.schedule.length - 2} more
						</p>
					)}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-1">
					<Button size="sm" className="flex-1 text-xs">
						Select
					</Button>
					{dayPlan.alternatives.length > 0 && (
						<Button size="sm" variant="outline" className="text-xs">
							{dayPlan.alternatives.length} Alt
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
