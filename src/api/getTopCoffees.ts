import { baseUrlHostPort } from "./endpoints.ts";
import { TopCafe } from "./interface.ts";

export async function apiGetTopCoffees(): Promise<TopCafe[]> {
  const response = await fetch(new URL("/getTopCoffees", baseUrlHostPort));
  const result = await response.json();

  const topCoffees: TopCafe[] = result.topCoffees.map((rate: any) => ({
    cafe: rate.Cafe,
    coffeeRating: rate.Score,
    tostiRating: 1,
    vibeRating: 1,
  }));

  return topCoffees;
}
