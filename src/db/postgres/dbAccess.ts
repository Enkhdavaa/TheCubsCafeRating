import * as postgres from "https://deno.land/x/postgres@v0.19.3/mod.ts";

const databaseUrl =
  Deno.env.get("DATABASE_URL") ??
  "postgresql://enkhdavaabatlkhagva@localhost:5432/enkhdavaabatlkhagva";

const pool = new postgres.Pool(databaseUrl, 3, true);

export const connection = await pool.connect();
