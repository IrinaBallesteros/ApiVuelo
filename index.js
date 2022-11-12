const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const vuelosService = require("./VueloService.js")

const app = express()
const port = 8081


app.use(cors())
app.use(body_parse.json())

const pathName = "/vuelos"


app.get(pathName,
(req, res)=>{
    console.log("Recibimos peticion")
    console.log(req)
    res.send(vuelosService.vuelosgetExport())
}
)


app.get(pathName+"/id",

(req, res)=>{
    console.log("Recibimos Petición")
    let id = req.query.id
    console.log(id)
    res.send(vuelosService.vuelosgetidExport(id))
}
)

app.post(pathName,
(req, res)=>{
    console.log("Recibimos peticion")
    console.log(req.body)
    let vuelos = vuelosService.vuelosSetExport(req.body)
    res.send({"mensaje":"Vuelo Guardado","vuelos":vuelos})
}
)
app.delete(pathName,
(req, res)=>{
    console.log("Recibimos peticion")
    let id = req.query.id
    console.log(id)
    let vuelos = vuelosService.vuelosDeleteExport(id)
    res.send({"mensaje":"Vuelo Guardado","vuelos":vuelos})
}
)

app.put("/",
(req, res)=>{
    console.log("Recibimos peticion")
    console.log(req.body)
    res.send("Finalizada")
}
)

app.patch(pathName,
(req, res)=>{
    console.log("Recibimos peticion")
    console.log(req.body)
    res.send("Finalizada")
}
)


app.patch(pathName+"/sillas",
    (req, res)=>{
        console.log("Reserva sillas")
        console.log(req.body)
        id = req.query.id
        res.send(vuelosService.sillasReservadasExport(req.body,id))
    }
    )
app.listen(port, 
    ()=>{
        console.log("Subio el app en el puerto "+port)
    }
)