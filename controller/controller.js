
const msgFunction= async function(req,res)
{
    try{
        console.log("called api");
        let a =5;
        let b =7;
    }
    catch(err)
    {
        console.log("err",err);
        console.log("ram ram ji hey this is from third branch");
    }
}
module.exports.msgFunction=msgFunction;

const newMessage= async function(req,res)
{
    try{
        console.log("called api");
    }
    catch(err)
    {
        console.log("err",err);
    }
}
module.exports.newMessage=newMessage;
