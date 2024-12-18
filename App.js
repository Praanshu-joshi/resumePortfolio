const express= require('express')
const router=require('./routes/web.js')
const PORT = process.env.PORT || 5555;
const app = express()


// loading template engines
app.set('view engine','ejs');

// routing 
app.use('/',router);


// for serving static files
app.use(express.static('public'))


 app.listen(PORT,()=>{
    console.log(`Dev server started at http://localhost:${5555}`)
 })