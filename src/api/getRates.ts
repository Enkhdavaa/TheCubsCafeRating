import { baseUrlHostPort, getRatesEndpoint } from "./endpoints.ts";

export async function GetRates(
  user: string,
  place: string,
  product: string,
  score: number
) {
  const response = await fetch(new URL(getRatesEndpoint, baseUrlHostPort));
  const config = await response.json();
  console.log(config);
}
