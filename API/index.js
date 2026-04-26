const express = require('express');
const cors = require('cors');
const { Pool } = require( 'pg' )
require ( 'dotenv' ).config()

const app = express();
const PORT =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
 
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized:false
 }
});

app.get('/',async(req,res)=>{
    try{
        res.json({message:"AOA,weeldone"});

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/blood_inventory',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM blood_inventory ' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/blood-type',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM blood_types' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/hospital',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM hospitals ' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/blood_requests',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM  blood_requests' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.get('/donations',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM  donations' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/donors',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM  donors' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
app.get('/patients',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM  patients' );
        res.json( result.rows );

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT}`);
} );