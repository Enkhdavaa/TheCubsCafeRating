import { AvarageScore } from "../db/interface.ts";

export async function apiGetTopTostis(): Promise<AvarageScore[]> {
  const response = await fetch("/api/getTopTostis");
  const result = await response.json();

  const topTostis = result.reviews as AvarageScore[];
  return topTostis;
}
