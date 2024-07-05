
const conexion=require('../../../Tema 3/EJEMPLOMVC/database/db');


exports.saveproducto=(req,res)=>{

const xidproducto =req.body.idproducto;
const xnombreproducto=req.body.nombreproducto;
const xcategoria=req.body.categoria;
const xprecio=req.body.precio;
const xstock=req.body.stock;
conexion.query('insert into producto SET ?',{idproducto:xidproducto,nombreproducto:xnombreproducto,categoria:xcategoria,precio:xprecio,stock:xstock},(error,result)=>{

    if(error){
     
      //res.redirect(404,'/nuevoempleado');
     res.redirect('back');
    
      
    }else{
            res.redirect('/listarproducto');
    }
})
//console.log(xdni);
}