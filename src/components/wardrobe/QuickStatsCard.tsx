import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WardrobeData } from "@/data";

interface QuickStatsCardProps {
	wardrobeItems: WardrobeData;
}

export function QuickStatsCard({ wardrobeItems }: QuickStatsCardProps) {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle className="text-base">Quick Stats</CardTitle>
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
						<span className="text-sm">Total Items</span>
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
						<span className="text-sm">Saved Outfits</span>
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
						<span className="text-sm">Most Worn</span>
					</div>
					<span className="font-bold text-sm">Jeans</span>
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
						<span className="text-sm">Style Score</span>
					</div>
					<span className="font-bold">8.5/10</span>
				</div>
			</CardContent>
		</Card>
	);
}
