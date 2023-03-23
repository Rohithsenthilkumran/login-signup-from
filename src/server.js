const express=require('express');

const path=require('path')
const app= express();
const collection=require('./mongodb')
const templatepath=path.join(__dirname,'../template');




app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.set('view engine','hbs');
app.set('views',templatepath)


app.get('/',(req,res)=>{
    res.render('login');
})
app.post('/Signup',async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
    }
    await collection.insertMany(data)
    res.render("home")
})
app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.post('/login',async(req,res)=>{
    
    try{
        const check=await collection.findOne({name:req.body.name});
   if(check.name===req.body.name && check.password===req.body.password){
    res.render("home");
   }
   else{
    res.render("signup");
   }
}
   catch{
    res.send("wrong message ")
  }


})


app.listen(2001,()=>{
    console.log('server running on port 2001....');
});