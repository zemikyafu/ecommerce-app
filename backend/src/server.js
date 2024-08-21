const app= require('./app');
const PORT= process.env.server_port || 8080;
app.listen(PORT,()=>{
    console.log(`start listining on port ${PORT}`);
})