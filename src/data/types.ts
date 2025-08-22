export interface WardrobeItem {
	id: number;
	name: string;
	category: string;
	color: string;
	brand: string;
	image: string;
	tags: string[];
	timesWorn?: number;
	lastWorn?: string;
	purchaseDate?: string;
}

export interface Outfit {
	id: number;
	name: string;
	items: string[];
	occasion: string;
	lastWorn: string;
}

export interface RecommendedOutfit {
	name: string;
	items: string[];
	confidence: number;
	reason: string;
}

export interface AlternativeOutfit {
	name: string;
	items: string[];
	confidence: number;
}

export interface DayPlan {
	day: string;
	date: string;
	weather: string;
	schedule: string[];
	recommendedOutfit: RecommendedOutfit;
	alternatives: AlternativeOutfit[];
}

export interface WardrobeData {
	all: WardrobeItem[];
	outfits: Outfit[];
	weeklyPlan: DayPlan[];
}
