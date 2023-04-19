// import connectDB from "./mongo";
// import studentModel from "../../model/schema";


// export default function handler(req, res){
//     connectDB();
//     res.status(200).json({name :"John"})
// }

import nextConnect from 'next-connect';
import middleware from './mongo';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('login').findOne()
    console.log(doc);
    res.json(doc);
});

export default handler;