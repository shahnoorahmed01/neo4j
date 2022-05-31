const neo4j = require('neo4j-driver')
const driver =  neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'm6rznbzwk7k'))
let manager =  driver.session()
manager =  driver.session({database:"superone"});
module.exports.custumNativeQuery = {


  send:  (query) => {    

    return new Promise((async (resolve, reject) => {
      let data = [];
      manager.run(query).then((result) => {

         result.records.forEach((record) => {
            record = record._fields[0]
            console.log(record.properties);
            data.push(record);
          });
      console.log(data);
        return resolve(data);
      })
 
    }));
  },

};






// session.run(query)
//   .then((result) => {
//     result.records.forEach((record) => {
//       record = record._fields[0]
//         // console.log(record.get('recommendation'));
//       console.log(record.properties);
//     });
//     session.close();
//     driver.close();
//   })
//   .catch((error) => {
//     console.error(error);
//   });
