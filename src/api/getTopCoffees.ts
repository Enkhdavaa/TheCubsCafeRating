import { AvarageScore } from "../db/interface.ts";

export async function apiGetTopCoffees(): Promise<AvarageScore[]> {
  const response = await fetch("/api/getTopCoffees");
  const result = await response.json();

  const topCoffees = result.reviews as AvarageScore[];
  return topCoffees;
}
