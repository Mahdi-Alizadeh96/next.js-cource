function handler(req ,res) {

    const eventId = req.query.eventId;

    
    if(req.method === 'POST') {
        
        const { email ,name ,text } = req.body;

        if(!email || !email.includes('@') || name.trim() === '' || !name || text.trim() === '' ) {
            res.status(422).json({message : "Invalid Inputs"});
            return;
        }

        const newComment = {
            id : String(new Date().getMilliseconds()),
            email,
            name,
            text
        }

        res.status(201).json({message : "Message Added" ,comment : newComment});
        console.log(email ,text ,name);

    }
    else if(req.method === 'GET') {

        const dummyList = [
            {id : 'c1' ,name : 'Dashi' ,text : "Some comment here"},
            {id : 'c2' ,name : 'Mashti' ,text : "Some comment here 222"}
        ]

        res.status(200).json({comments : dummyList})
    }
}

export default handler;