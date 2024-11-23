export interface AvarageScore {
  cafe: string;
  product: string;
  score: number;
  count: number;
}

export interface Review {
  username: string;
  cafe: string;
  product: string;
  score: number;
}

export interface ReviewRequest {
  username: string;
  cafe: string;
  product: string;
  score: number;
}
