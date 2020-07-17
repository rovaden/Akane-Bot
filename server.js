const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rovaden:Caculas4@akane.o7hy4.mongodb.net/coronaviruscrew-akane?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
