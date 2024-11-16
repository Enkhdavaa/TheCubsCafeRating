import { baseUrlHostPort } from "./endpoints.ts";
import { UserRate } from "./interface.ts";

export async function apiGetLast30Rates(): Promise<UserRate[]> {
  const response = await fetch(new URL("/getRates", baseUrlHostPort));
  const result = await response.json();

  const userRate: UserRate[] = result.userRates;
  return userRate;
}
