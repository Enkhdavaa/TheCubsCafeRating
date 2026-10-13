Prerequisites:

1. Deno 2.0+
2. PostgreSQL. Set `DATABASE_URL` to its connection string (defaults to a local database).

Create the database table once: deno task migrate

Start two terminals and run the following commands:

- To build the project: deno task build

- To start back-end & front-end: deno task serve

- To start front-end: deno task dev
