const express=require('express');
const router=express.Router();

const cnnn=require('../../../Tema 3/EJEMPLOMVC/database/db');

// RUTA PARA EL LOGIN
router.get('/',(req,res)=>{       
    res.render('login');
    //res.send('Texto en pantalla');
   

    })
    //ruta para index
    router.get('/index',(req,res)=>{
        res.render('index');
        })
   

// RUTA LISTAR PRODUCTO
        router.get('/listarproducto',(req,res)=>{
           
    cnnn.query('select * from producto',(err,result)=>{
        if(err){
            throw err;
        }
            else{
                res.render('listarproducto',{objproducto:result});
                //res.send(result);
            }
    });
 
            
            })
            //RUTA NUEVO PRODUCTO

            router.get('/nuevoproducto',(req,res)=>{
              
                res.render('nuevoproducto',{mensaje:''});
                })

                const crud=require('./crudP');
                router.post('/saveproducto',crud.saveproducto)



module.exports=router;

