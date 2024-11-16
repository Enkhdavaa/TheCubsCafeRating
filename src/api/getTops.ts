import { baseUrlHostPort } from "./endpoints.ts";
import { TopCafe } from "./interface.ts";

export async function apiGet5TopCafes(): Promise<TopCafe[]> {
  const response = await fetch(new URL("/getTops", baseUrlHostPort));
  const result = await response.json();

  const topCafes: TopCafe[] = result.topCafes;
  return topCafes;
}
