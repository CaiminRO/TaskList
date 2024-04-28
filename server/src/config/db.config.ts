import pgPromise from 'pg-promise';
import { Pool } from 'pg';
import session from 'express-session';
import ConnectPgSimple from 'connect-pg-simple';

// pg-promise setup
const pgp = pgPromise();
const dbConnectionDetails = {
  host:         process.env.DB_HOST,
  port:         parseInt(process.env.DB_PORT || '5432'),
  database:     process.env.DB_NAME,
  user:         process.env.DB_USER,
  password:     process.env.DB_PASSWORD,
};

// Create the database instance with pg-promise
const db = pgp(dbConnectionDetails);

// pg (node-postgres) setup
const pool = new Pool(dbConnectionDetails);

// Session store setup
const pgSession = ConnectPgSimple(session);
const sessionStore = new pgSession({
  pool: pool,
  tableName: 'session',
});


// Export configuration
export { db, pool, sessionStore };
