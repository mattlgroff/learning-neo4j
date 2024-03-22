import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  `neo4j://localhost:7687`,
  neo4j.auth.basic('neo4j', 'password')
);

const session = driver.session();

// Wipe the database
const wipe = async () => {
  const result = await session.run('MATCH (n) DETACH DELETE n');
  if (result.summary.counters.containsUpdates()) {
    console.log('All nodes and relationships deleted.');
  } else {
    console.log('No nodes or relationships to delete.');
  }
};

try {
  await wipe();
} catch (error) {
  console.error(error);
} finally {
  await session.close();
  await driver.close();
}
