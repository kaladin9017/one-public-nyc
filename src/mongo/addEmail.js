import {MongoClient} from 'mongodb';


export function addEmail() {
  let db;
  MongoClient.connect(process.env.MONGO_URL, (err, database) => {
    if(err) throw err;
    db = database;
  // export MONGO_URL=mongodb://onepublic:onepublic@ds135519.mlab.com:35519/one-public-nyc
    console.log(db)
  });
  return db
}
