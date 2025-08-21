import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DayPlan } from "@/data";

interface TodaysRecommendationCardProps {
	selectedDay: string;
	selectedDayOutfit: DayPlan | undefined;
}

export function TodaysRecommendationCard({
	selectedDay,
	selectedDayOutfit,
}: TodaysRecommendationCardProps) {
	return (
		<Card className="bg-primary/5 border-primary/20">
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle className="text-lg">
							{selectedDay === "Wednesday"
								? "Today's"
								: `${selectedDay}'s`}{" "}
							Perfect Look
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
							{selectedDayOutfit?.day},{" "}
							{new Date(
								selectedDayOutfit?.date || "2025-08-21"
							).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
							})}{" "}
							• {selectedDayOutfit?.weather}
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
							{selectedDayOutfit?.recommendedOutfit.confidence}%
						</span>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					{/* Enhanced Outfit Template */}
					<div className="relative mx-auto md:mx-0 p-2">
						<div className="w-full max-w-xs h-80 bg-gradient-to-b from-background to-muted/30 rounded-xl border border-border shadow-sm relative">
							{/* Clothing Items Collection - Enhanced Hero Version */}
							<div className="absolute inset-6 grid grid-cols-2 gap-4">
								{/* Top Wear */}
								<div className="bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 p-3">
									<div className="text-center">
										<svg
											className="w-10 h-10 mx-auto mb-2 text-primary/70"
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
										<span className="text-sm text-primary font-semibold">
											Tee
										</span>
									</div>
								</div>

								{/* Bottom Wear */}
								<div className="bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/20 p-3">
									<div className="text-center">
										<svg
											className="w-10 h-10 mx-auto mb-2 text-secondary/70"
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
										<span className="text-sm text-secondary font-semibold">
											Jeans
										</span>
									</div>
								</div>

								{/* Footwear */}
								<div className="bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 p-3">
									<div className="text-center">
										<svg
											className="w-10 h-10 mx-auto mb-2 text-accent/70"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.674-1.334c.343.604.398 1.33.398 2.13v.532c0 .108-.077.198-.202.21l-2.054.229a13.875 13.875 0 01-7.918 0l-2.054-.229c-.125-.012-.202-.102-.202-.21z"
											/>
										</svg>
										<span className="text-sm text-accent font-semibold">
											Shoes
										</span>
									</div>
								</div>

								{/* Optional Accessory */}
								<div className="bg-muted/30 rounded-xl flex items-center justify-center border border-muted-foreground/10 opacity-60 p-3">
									<div className="text-center">
										<svg
											className="w-8 h-8 mx-auto mb-2 text-muted-foreground/40"
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
										<span className="text-xs text-muted-foreground/50 font-medium">
											Optional
										</span>
									</div>
								</div>
							</div>

							{/* Outfit Name Badge */}
							<div className="absolute bottom-4 left-4 right-4">
								<div className="bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/60 shadow-sm">
									<p className="text-base font-semibold text-center">
										{
											selectedDayOutfit?.recommendedOutfit
												.name
										}
									</p>
								</div>
							</div>
						</div>

						{/* Confidence Badge - Positioned outside container */}
						<div className="absolute -top-1 -right-1">
							<Badge className="text-xs px-3 py-1 font-semibold shadow-sm">
								{
									selectedDayOutfit?.recommendedOutfit
										.confidence
								}
								% Match
							</Badge>
						</div>
					</div>

					{/* Outfit Details */}
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-bold mb-2">
								{selectedDayOutfit?.recommendedOutfit.name}
							</h3>
							<p className="text-muted-foreground">
								{selectedDayOutfit?.recommendedOutfit.reason}
							</p>
						</div>

						<div className="space-y-2">
							<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
								{selectedDay === "Wednesday"
									? "Today's"
									: `${selectedDay}'s`}{" "}
								Items
							</h4>
							<div className="space-y-2">
								{selectedDayOutfit?.recommendedOutfit.items.map(
									(item, index) => (
										<div
											key={index}
											className="flex items-center gap-3"
										>
											<div
												className={`w-3 h-3 rounded-full border ${
													index === 0
														? "bg-primary/20 border-primary/40"
														: index === 1
														? "bg-secondary/20 border-secondary/40"
														: "bg-accent/20 border-accent/40"
												}`}
											></div>
											<span className="text-sm">
												{item}
											</span>
										</div>
									)
								)}
							</div>
						</div>

						{/* Schedule for selected day */}
						{selectedDayOutfit?.schedule &&
							selectedDayOutfit.schedule.length > 0 && (
								<div className="space-y-2">
									<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
										{selectedDay === "Wednesday"
											? "Today's"
											: `${selectedDay}'s`}{" "}
										Schedule
									</h4>
									<div className="space-y-1">
										{selectedDayOutfit.schedule
											.slice(0, 2)
											.map((event, index) => (
												<div
													key={index}
													className="flex items-center gap-2 text-sm text-muted-foreground"
												>
													<div className="w-2 h-2 bg-primary/60 rounded-full"></div>
													{event}
												</div>
											))}
									</div>
								</div>
							)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
