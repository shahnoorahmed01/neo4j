// // npm install --save neo4j-driver
// // node example.js
// const neo4j = require('neo4j-driver');
// const driver = neo4j.driver('neo4j://44.202.188.239:7687',
//                   neo4j.auth.basic('neo4j', 'possessions-assaults-classrooms'), 
//                   {/* encrypted: 'ENCRYPTION_OFF' */});

// const query =
//   `
//   MATCH (m:Movie {title:$movie})<-[:RATED]-(u:User)-[:RATED]->(rec:Movie)
//   RETURN distinct rec.title AS recommendation LIMIT 20
//   `;

// const params = {"movie": "Crimson Tide"};

// const session = driver.session({database:"neo4j"});

// session.run(query, params)
//   .then((result) => {
//     result.records.forEach((record) => {
//         console.log(record.get('recommendation'));
//     });
//     session.close();
//     driver.close();
//   })
//   .catch((error) => {
//     console.error(error);
//   });




// Version  4.4.3
// Edition  enterprise
// Status  Active
// IP address  localhost
// Bolt port  7687 
// HTTP port  7474 
// HTTPS port  7473 


// (async() => {
const neo4j = require('neo4j-driver')

const uri = 'bolt://localhost:7687';
 // const uri = 'neo4j+s://localhost:7687';
 const user = 'neo4j'
 const password = '1111';
 console.log(user,password)


const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
const session = driver.session()
 // console.log("session",session)


const query =`MATCH (n:Person) RETURN n LIMIT 20`

// const query =
//   `
//   MATCH (m:Movie {title:$movie})<-[:RATED]-(u:User)-[:RATED]->(rec:Movie)
//   RETURN distinct rec.title AS recommendation LIMIT 20
//   `;

const params = {"movie": "Crimson Tide"};

// const session = driver.session({database:"neo4j"});

session.run(query, params)
  .then((result) => {
    result.records.forEach((record) => {
        console.log(record.get('recommendation'));
    });
    session.close();
    driver.close();
  })
  .catch((error) => {
    console.error(error);
  });





// const personName = 'Alice'

// try {
//   const result = await session.run(
//     'CREATE (a:Person {name: $name}) RETURN a',
//     { name: personName }
//   )

//   const singleRecord = result.records[0]
//   const node = singleRecord.get(0)

//   console.log(node.properties.name)
// } finally {
//   await session.close()
// }

// // on application exit:
// await driver.close()

// })();




// (async() => {
//  const neo4j = require('neo4j-driver')

//  const uri = 'neo4j+s://localhost:7687';
//  const user = 'superone'
//  const password = '1111';
//  console.log(user,password)

//  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
//  const session = driver.session()

//  const person1Name = 'Alice'
//  const person2Name = 'David'

//  try {
//    // To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
//    // The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
//    const writeQuery = `MERGE (p1:Person { name: $person1Name })
//                        MERGE (p2:Person { name: $person2Name })
//                        MERGE (p1)-[:KNOWS]->(p2)
//                        RETURN p1, p2`

//    // Write transactions allow the driver to handle retries and transient errors
//    const writeResult = await session.writeTransaction(tx =>
//      tx.run(writeQuery, { person1Name, person2Name })
//    )
//    writeResult.records.forEach(record => {
//      const person1Node = record.get('p1')
//      const person2Node = record.get('p2')
//      console.log(
//        `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
//      )
//    })

//    const readQuery = `MATCH (p:Person)
//                       WHERE p.name = $personName
//                       RETURN p.name AS name`
//    const readResult = await session.readTransaction(tx =>
//      tx.run(readQuery, { personName: person1Name })
//    )
//    readResult.records.forEach(record => {
//      console.log(`Found person: ${record.get('name')}`)
//    })
//  } catch (error) {
//    console.error('Something went wrong: ', error)
//  } finally {
//    await session.close()
//  }

//  // Don't forget to close the driver connection when you're finished with it
//  await driver.close()
// })();