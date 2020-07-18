const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rovaden:Caculas4@akane.o7hy4.mongodb.net/coronaviruscrew-akane?retryWrites=true&w=majority";
const mgclient = new MongoClient(uri, { useNewUrlParser: true });
const dbName = 'coronaviruscrew-akane';

  mgclient.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // perform actions on the collection object
    try {
      
    } catch (error) {
      console.error(error);
    }
    mgclient.close();
  });
