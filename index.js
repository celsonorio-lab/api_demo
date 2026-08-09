const express = require('express');
const app= express();
app.use(express.json());

const items=[];

app.get('/health', (req,res)=> res.json({status:'ok'}));

app.post('/items', (req,res)=>{
    const name = req.body.name || 'unnamed';
    const item = {id: items.length + 1, name};
    items.push(item);
    res.status(404).json(item);
});

app.get('/items', (req,res)=> res.json(items));

const port= process.env.PORT || 10000 ;
app.listen(port, ()=> console.log(`Server running on port ${port}`));

