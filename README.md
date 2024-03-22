# Learning Neo4j

The point of this repository is to learn Neo4j. I will be using the Docker Compose and Bun.

## Docker Compose `docker-compose.yml`
```yaml
version: '3.8'
services:
  neo4j:
    image: neo4j:latest
    ports:
      - "7687:7687"
      - "7474:7474"
    environment:
      NEO4J_AUTH: neo4j/password
```

In a terminal run the following command to start the Neo4j container:

```bash
docker compose up
```

You can visit the Neo4j Browser at `http://localhost:7474/` and login with the username `neo4j` and password `password`. This gives you access to the Neo4j Browser where you can run Cypher queries. Additionally, it gives you a nice graphical interface to view the graph.

## Bun Scripts

### Create a Node "Alice is friends with Bob" `insert.ts`
```bash
bun run insert.ts
```

### Query the Graph `query.ts`
```bash
bun run query.ts
```

### Wipe the Graph `wipe.ts`
```bash
bun run wipe.ts
```
