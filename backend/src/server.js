const app= require('./app');
 const sequalize =require('../config/database')
const PORT= process.env.server_port || 8080;


sequalize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`start listining on port ${PORT}`);
        console.log('Database connection has been established successfully.')
    })
}).catch((error)=>{
    console.log("unable to connect to the database:",error);

});

// app.listen(PORT,()=>{
//     console.log(`start listining on port ${PORT}`);
//     console.log('Database connection has been established successfully.')
// })