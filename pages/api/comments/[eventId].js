import { MongoClient } from 'mongodb';

async function handler(req ,res) {

    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://NextjsCource:Gg158008532@cluster0.wnisj.mongodb.net/?retryWrites=true&w=majority');
    
    if(req.method === 'POST') {
        
        const { email ,name ,text } = req.body;

        
        if(!email || !email.includes('@') || name.trim() === '' || !name || text.trim() === '' ) {
            res.status(422).json({message : "Invalid Inputs"});
            return;
        }
        
        const newComment = {
            eventId,
            email,
            name,
            text
        }

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        
        const db = client.db('events');
        
        const result = await db.collection('comments').insertOne({...newComment});
        
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        
        res.status(201).json({message : "Message Added" ,comment : newComment});

    }
    else if(req.method === 'GET') {

        const db = client.db('events');

        const documents = await db.collection('comments').find().sort({_id : -1}).toArray();

        res.status(200).json({comments : documents})
    }

    client.close();
}

export default handler;