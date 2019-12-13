const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db('TestingFirstMongo');

    if(err){
        return console.log("Unable to connect to Mongodb server");
    }

    console.log("Connected to Mongodb server!!");

    db.collection('TestingFirstMongo').insertOne({
        taskName: 'Learning Mongodb',
        completed: false
    }, (err, result) => {
        if(err){
            console.log("There was an error inserting the new data!");
        }
    })

    client.close();

})