import { Review } from "../interface.ts";
import { connection } from "./dbAccess.ts";

export async function GetLastReviews(limit: number): Promise<Review[]> {
  if (limit == 0) {
    console.error("Limit should NOT BE 0");
    return [];
  }

  try {
    const result = await connection.queryObject`
        SELECT username, cafe, product, score 
        FROM CafeRating
        ORDER BY id DESC
        LIMIT ${limit}
        ;
    `;

    const rows = result.rows;
    const reviews: Review[] = rows.map((row: any) => ({
      username: row.username,
      cafe: row.cafe,
      product: row.product,
      score: row.score,
    }));

    return reviews;
  } catch (err) {
    console.error(err);
    return [];
  } finally {
    connection.release();
  }
}
