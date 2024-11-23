import { AvarageScore } from "../interface.ts";
import { connection } from "./dbAccess.ts";

export async function GetAvgScoresByCafe(
  product: string,
  limit: number
): Promise<AvarageScore[]> {
  if (product != "Coffee" && product != "Tosti" && product != "Vibe") {
    console.error("Product is NOT VALID");
    return [];
  }

  if (limit == 0) {
    console.error("Limit should NOT BE 0");
    return [];
  }

  try {
    const result = await connection.queryObject`
      SELECT Cafe, ROUND(AVG(Score)::numeric, 1) AS AvarageScore, COUNT(*) AS ReviewCount
      FROM CafeRating
      WHERE Product = ${product}
      GROUP BY Cafe
      ORDER BY AvarageScore DESC
      LIMIT ${limit}
      ;
      `;

    const rows = result.rows;
    const scores: AvarageScore[] = rows.map((row: any) => ({
      cafe: row.cafe,
      product: product,
      score: Number(row.avaragescore),
      count: Number(row.reviewcount),
    }));

    return scores;
  } catch (err) {
    console.error(err);
    return [];
  } finally {
    connection.release();
  }
}
