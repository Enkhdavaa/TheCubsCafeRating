import { Client } from "@db/postgres";

const databaseUrl =
  Deno.env.get("DATABASE_URL") ??
  "postgresql://enkhdavaabatlkhagva@localhost:5432/enkhdavaabatlkhagva";

// Opens a fresh connection for each call and always closes it afterwards.
// Long-lived pooled connections break when the database closes them (idle
// timeouts, restarts), and the driver can't recover from a broken pipe, so
// every later query would fail until the server restarts.
export async function withConnection<T>(
  run: (connection: Client) => Promise<T>
): Promise<T> {
  const connection = new Client(databaseUrl);
  await connection.connect();
  try {
    return await run(connection);
  } finally {
    await connection.end().catch(() => {});
  }
}
