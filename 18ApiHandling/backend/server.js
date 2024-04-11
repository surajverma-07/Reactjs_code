import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is running ......");
})
app.get('/api/products',(req,res)=>{
    const products = [
        {
            id:1,
            name:'pen',
            price:10,
            image:"https://images.pexels.com/photos/5594347/pexels-photo-5594347.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:2,
            name:'flower',
            price:20,
            image:"https://images.pexels.com/photos/4612227/pexels-photo-4612227.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:3,
            name:'phone',
            price:30,
            image:"https://images.pexels.com/photos/5370674/pexels-photo-5370674.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:4,
            name:'cat',
            price:40,
            image:"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:5,
            name:'bike',
            price:50,
            image:"https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]

    // queries like http://localhost:3000/api/products?search=pen
    if(req.query.search){
        const filterProduct = products.filter((product)=>(
            product.name.includes(req.query.search)))
        res.send(filterProduct);
        return; 
    }
    setTimeout(()=>{
        res.send(products);

    },3000);

})
const  port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})