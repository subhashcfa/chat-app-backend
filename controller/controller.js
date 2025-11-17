
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
        console.log("ram ram ji heyyy this is from second branch");
    }
}
module.exports.msgFunction=msgFunction;
