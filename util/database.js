import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// import product5 from '../public/pictures/1.jpeg';
// import product1 from '../public/pictures/2.jpeg';
// import product2 from '../public/pictures/3.jpeg';
// import product3 from '../public/pictures/4.jpeg';
// import product4 from '../public/pictures/5.jpeg';
// import product6 from '../public/pictures/6.jpeg';

// Read in the environment variables
// in the .env file, making it possible
// to connect to PostgreSQL
dotenvSafe.config();

module.exports = function setPostgresDefaultsOnHeroku() {
  if (process.env.DATABASE_URL) {
    const { parse } = require('pg-connection-string');

    // Extract the connection information from the Heroku environment variable
    const { host, database, user, password } = parse(process.env.DATABASE_URL);

    // Set standard environment variables
    process.env.PGHOST = host;
    process.env.PGDATABASE = database;
    process.env.PGUSERNAME = user;
    process.env.PGPASSWORD = password;
  }
};

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getProducts() {
  const products = await sql`
    SELECT * FROM flowersdata;
  `;
  return products.map((product) => {
    return camelcaseKeys(product);
  });
}

export async function getProduct(id) {
  const products = await sql`
    SELECT
      *
    FROM
      flowersdata
    WHERE
      id = ${id}
  `;
  return camelcaseKeys(products[0]);
}

// const flowersData = [
//   {
//     id: '1',
//     name: 'Boho Vibes',
//     price: 35,
//     image: product1,
//   },
//   {
//     id: '2',
//     name: 'Herbstsonne',
//     price: 45,
//     image: product2,
//   },
//   {
//     id: '3',
//     name: 'Kreative Überraschung',
//     price: 50,
//     image: product3,
//   },
//   {
//     id: '4',
//     name: 'Purple Dream',
//     price: 35,
//     image: product4,
//   },
//   {
//     id: '5',
//     name: 'Red Naomi Rosen',
//     price: 25,
//     image: product5,
//   },
//   {
//     id: '6',
//     name: 'Bemy Baby',
//     price: 30,
//     // image: product6,
//   },
// ];

// export { flowersData };
