export interface AvarageScore {
  cafe: string;
  product: string;
  score: number;
  count: number;
}

export interface Review {
  user: string;
  cafe: string;
  product: string;
  score: number;
}

export interface ReviewRequest {
  user: string;
  cafe: string;
  product: string;
  score: number;
}
