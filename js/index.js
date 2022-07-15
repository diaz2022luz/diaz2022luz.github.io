function collar(){
    document.form1.text2.value = document.form1.select1.options[document.form1.select1.selectedIndex].text;
    document.form1.text3.value = document.form1.select1.options[document.form1.select1.selectedIndex].value;
}
function arete(){
    document.form2.text2.value = document.form2.select1.options[document.form2.select1.selectedIndex].text;
    document.form2.text3.value = document.form2.select1.options[document.form2.select1.selectedIndex].value;
}
function pulsera(){
    document.form3.text2.value = document.form3.select1.options[document.form3.select1.selectedIndex].text;
    document.form3.text3.value = document.form3.select1.options[document.form3.select1.selectedIndex].value;
}
function anillo(){
    document.form4.text2.value = document.form4.select1.options[document.form4.select1.selectedIndex].text;
    document.form4.text3.value = document.form4.select1.options[document.form4.select1.selectedIndex].value;
}
function total(){
    cant1=parseFloat(document.form1.text3.value);
    cant2=parseFloat(document.form2.text3.value);
    cant3=parseFloat(document.form3.text3.value);
    cant4=parseFloat(document.form4.text3.value);
    a1=cant1+cant2+cant3+cant4;
    a2=cant1+cant2;
    a3=cant1+cant3;
    a4=cant1+cant4;
    a5=cant2+cant3;
    a6=cant3+cant4;
    a7=cant4+cant2;
    if(a=a1){
    alert('<h1>'+'El total a pagar es: $/'+a+' \nSi desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
    }
     else if(b=a2){
      alert('El total a pagar es: $/'+b+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
      else if(c=a3){
        alert('El total a pagar es: $/'+c+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
       else if(d=a4){
        alert('El total a pagar es: $/'+d+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
        else if(e=a5){
          alert('El total a pagar es: $/'+e+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
          else if(f=a6){
            alert('El total a pagar es: $/'+f+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
           else if(g=a7){
            alert('El total a pagar es: $/'+g+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
     }
            else if(t=cant2 ){
              alert('El total a pagar es: $/'+t+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
                  }
              else if(t=cant3){
                alert('El total a pagar es: $/'+t+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
        }
                else if(t=cant4){
                  alert('El total a pagar es: $/'+t+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
          }
                  else if(t=cant1){
                    alert('El total a pagar es: $/'+t+' \n Si desea continuar con la compra presione \n CONTINUAR\nPara regresar al menú principal presione\nINICIO');
            }
}