import { AvarageScore } from "../db/interface.ts";

export async function apiGetTopProducts(
  product: string
): Promise<AvarageScore[]> {
  const data = new URLSearchParams({ product: product }).toString();
  const response = await fetch(`/api/getTopProducts?${data}`);
  const result = await response.json();

  const topCoffees = result.reviews as AvarageScore[];
  return topCoffees;
}
