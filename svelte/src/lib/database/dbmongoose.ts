import mongoose from "mongoose";
const URI = import.meta.env.VITE_URI

const connect =mongoose.connect(`${URI}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


export default connect