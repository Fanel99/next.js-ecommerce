const flowersdata = [
  {
    name: 'Boho Vibes',
    price: 35,
  },
  {
    name: 'Herbstsonne',
    price: 45,
  },
  {
    name: 'Kreative Überraschung',
    price: 50,
  },
  {
    name: 'Purple Dream',
    price: 35,
  },
  {
    name: 'Red Naomi Rosen',
    price: 25,
  },
  {
    name: 'Bemy Baby',
    price: 30,
  },
  {
    name: 'Zarte Blümchen',
    price: 35,
  },
  {
    name: 'Sonnige Freude',
    price: 25,
  },
  {
    name: 'Errötender Herbst',
    price: 40,
  },
];

// This will create the table
exports.up = async function up(sql) {
  console.log('Insert  data in  table...');
  // Looping over the array and INSERTing each item
  for (const item of flowersdata) {
    await sql`
    INSERT INTO  flowersdata
      (name, price)
    VALUES
      (${item.name}, ${item.price});
  `;
  }
};

// This will remove the table again
exports.down = async function down(sql) {
  console.log('Delete user...');
  for (const item of flowersdata) {
    await sql`
      DELETE FROM
        flowersdata
      WHERE
        name = ${item.name} AND price= ${item.price};
    `;
  }
};
