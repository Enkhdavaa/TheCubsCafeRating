import { AvarageScore } from "../db/interface.ts";
import { baseUrlHostPort } from "./endpoints.ts";

export async function apiGetTopTostis(): Promise<AvarageScore[]> {
  const response = await fetch(new URL("/getTopTostis", baseUrlHostPort));
  const result = await response.json();

  const topTostis = result.reviews as AvarageScore[];
  return topTostis;
}
