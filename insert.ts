import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  `neo4j://localhost:7687`,
  neo4j.auth.basic('neo4j', 'password')
);

const session = driver.session();

// Insert data with a relationship
const insertData = async () => {
  const writeResult = await session.run(
    'CREATE (a:Person { name: $name1 })-[:FRIEND]->(b:Person { name: $name2 })',
    { name1: 'Alice', name2: 'Bob' }
  );
  console.log(writeResult);
};

try {
  await insertData();
} catch (error) {
  console.error(error);
} finally {
  await session.close();
  await driver.close();
}
