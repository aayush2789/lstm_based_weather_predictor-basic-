const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://aayuk279:qwerty123@cluster0.y8lt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);
const newData={
    name:'Plastic Toy',
    price:2466,
    company:'64c23350e32f4a51b19b9242',
    isFeatured:true,
};
async function main(){

    let res=await client.connect(); // Connect to the MongoDB cluster
    //console.log(res);
    const db = client.db("shop"); // Access the "shop" database
    const collection = db.collection("products"); // Access the "products" collection
    //await collection.insertOne(newData);
    // Query for products with price ==2466
    const data = await collection.aggregate([
        {$match:{price:{$lte:120}}},
        {$group:{
            _id:"$company",
            avgPrice:{$avg:"$price"}
        }},
        {$sort:{avgPrice:-1}} 
    ]).toArray();
    console.log(data); // Log the retrieved documents
    await client.close(); // Close the connection
    
};

main();
