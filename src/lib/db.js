import postgres from 'postgres';
await import('dotenv').then(dotenv => dotenv.config());

const connectionString = process.env.DATABASE_URL;

const sql = postgres(connectionString);

export default sql