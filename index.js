require("dotenv").config()

const express = require("express")

const app = express()

const port = 4000

app.get("/", (req, res) => {
  res.send("hello wporld")
})

app.get("/twitter", (req,res) => {
  res.send("Yabiramjad")
})

app.get("/login", (req,res) =>{
  res.send("<h1>plese login this page</h1>")
})

app.get("/youtube", (req,res) =>{
  res.send("<h2>Login Youtube</h2>")
})

app.get("/google", (req,res) =>{
  res.send("<h3>plese login Google.com</h3>")
})

app.listen(process.env.PORT, () =>{
  console.log(`Example app listening on port ${port}`)
})