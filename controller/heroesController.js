const fs = require('fs')

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json' , 'utf-8'))

const heroesController ={
    index:(req , res) =>{
        res.send(`Ni Superman, IronMan o La Mujer Maravilla son tan        importantes cómo las y los Heroes de carne y
        hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
        inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
        ti! `)
    },
    datos:(req,res)=>{
        res.send(heroes)
    },
    datosProfresionales:(req,res)=>{
        const nombre = req.params.id

        heroes.forEach(idHeroe => {
            if(nombre == idHeroe.id){
                res.send(`Hola mi nombre es ${idHeroe.nombre} y esta es mi profesion ${idHeroe.profesion}`)
            }else if( nombre != idHeroe.id){
                res.send('Por el Momento en nuestra base de datos no corresponde...')
            }
        });
    },
    bioOk:(req,res)=>{
        
        const idHeroe = req.params.id
        const confirmacion = req.params.ok

        heroes.forEach(oki =>{
            if(idHeroe == oki.id && confirmacion == 'ok'){
                res.send(`Hola Amigo!!!!!!`)
            }
        })
    },
    creditos:(req,res)=>{
        res.send('Esta practica fue realiza por Ivan Almendra ☼╦╚µ╔')
    }
}
module.exports = heroesController