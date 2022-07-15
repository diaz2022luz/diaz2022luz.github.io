function datos(){
    var nom=document.form6.nombre.value;
    var ape=document.form6.apellido.value;
    var dir=document.form6.direccion.value;
    var cel=document.form6.celu.value;
    var pag=document.form6.pago.value
    var tarj=document.form6.tarjet.value;
    var pa=document.form6.pag.value;
    var tot=document.form6.total.value;
    vuel=pa-tot;
    vuel2=tot-pa;
    document.write('<h1>'+'--------GEMA PRECIOSA--------'+"<br>");
    document.write('Agradecemos su compra y preferencia'+"<br>")
    document.write('<hr>');
    document.write('Nombres: '+nom +"<br>");
    document.write('Apellidos:'+ape+"<br>")
    document.write('Dirección: '+dir+"<br>");
    document.write('N.celular:'+cel+"<br>");
    document.write('Pago:$/'+pag+"<br>");
    document.write('N. de Cuenta:'+tarj+"<br>");
    document.write('Total a Pagar:$/'+tot+"<br>");
    if(pa>tot){
    document.write('Vuelto:$/'+vuel);
    }
    else if(pa<tot){
        document.write('Vuelto:$/'+vuel2);
    }
     
}