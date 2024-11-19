import { AvarageScore } from "../db/interface.ts";
import { baseUrlHostPort } from "./endpoints.ts";

export async function apiGetTopCoffees(): Promise<AvarageScore[]> {
  const response = await fetch(new URL("/getTopCoffees", baseUrlHostPort));
  const result = await response.json();

  const topCoffees = result.reviews as AvarageScore[];
  return topCoffees;
}
