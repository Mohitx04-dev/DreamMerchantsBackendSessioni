exports.myFunction = (req,res) => {
    console.log("called")
    let n = req.body.num1;
    let {num2} = req.body;
    console.log(n,num2);
    res.send({Result : n*num2});
}
exports.myFunctionDiv = (req,res) => {
    console.log("called")
    let n = req.body.num1;
    let {num2} = req.body;
    console.log(n,num2);
    try{
        if(num==0){
            throw ("divide by zero");
        }
        res.send({Result : n/num2});
    }
    catch(e){
        res.send({status:404 , message : "Invalid"})
    }
}

