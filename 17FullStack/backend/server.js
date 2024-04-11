import express from 'express';

const app = express();

// app.get('/', (req,res)=>{
//   res.send("server is ready ");
// });

//list of jokes 
app.get('/api/songs',(req,res)=>{
   const songs = [
    {
        id:1,
        title:"song 1",
        content:"tujhe dekha to ye jana sanam",
    },
    {
        id:2,
        title:"song 2",
        content:"chand taro se bhi khoobsurat hai tu ",
    },
    {
        id:3,
        title:"song 3",
        content:"bole jo koyal bago me ",
    },
    {
        id:4,
        title:"song 4",
        content:"mere samne vali",
    },
    {
        id:5,
        title:"song 5",
        content:"Dekha tumko jab se bas dekha tumko yara ",
    },
   ]
   
   res.send(songs)
   //to view json data https://jsonformatter.org/
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});