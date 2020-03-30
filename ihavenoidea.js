
const express = require('express')
const session = require ('express-session')
const {
    PORT =5000,
    NODE_ENV = 'development',
    SESS_NAME ='sid',
    SESS_SECRET = 'SSH! QUIET, IT\'S A SECRET!',
    SESS_LIFETIME = TWO_HOURS

} = process.env


const IN_PROD = NODE_ENV ==='production'
const app = express()

const app = express()
app.use(session( {
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD

    }
}))

   app.listen(PORT, () => console.log (
       `http://localhost:${PORT}`
   )











// const fs = require("fs")
 
// fs.mkdir("./new-directory-name", function(err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("New directory successfully created.")
//   }
// })