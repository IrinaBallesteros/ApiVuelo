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
async (req, res)=>{
    console.log("Recibimos peticion")
    const id = req.query.id
    res.send(await vuelosService.vuelosgetExport(id))
}
)


app.get(pathName+"/id",

async (req, res)=>{
    console.log("Recibimos Petición")
    let id = req.query.id
    console.log(id)
    res.send(await vuelosService.vuelosgetidExport(id))
}
)

app.post(pathName,
async (req, res)=>{
    console.log("Recibimos peticion")
    console.log(req.body)
    let vuelos = await vuelosService.vuelosSetExport(req.body)
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

app.put(pathName,
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
    
async (req, res)=>{
        console.log("Reserva sillas")
        console.log(req.body)
        id = req.query.id
        res.send(await vuelosService.sillasReservadasExport(req.body,id))
    }
    )
app.listen(port, 
    ()=>{
        console.log("Subio el app vuelo en el puerto "+port)
    }
)