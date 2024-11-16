export interface UserRate {
  user: string;
  cafe: string;
  product: string;
  score: number;
}

export interface TopCafe {
  cafe: string;
  coffeeRating: number;
  tostiRating: number;
  vibeRating: number;
  overallScore: number;
}
export interface CafeProductRating {
  user: string;
  cafe: string;
  product: string;
  score: number;
}
