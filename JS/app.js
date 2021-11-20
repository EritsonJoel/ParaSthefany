


function login(){
       
     
     
   const   dato = document.getElementById('usuario').value;


     if(dato == 'Joel' || dato  == 'zeta' || dato =='Sthefany' ){

          window.location = 'index.html';
      
     }else{
          swal('usted no puede ingresar')
     }
}






const  btnMenu = document.querySelector("#btnMenu"); //lamamos al boton menu
const menu = document.querySelector("#menu");   //llamamos al menu


btnMenu.addEventListener('click', function(){ //agregamos evento click
     menu.classList.toggle('mostrar');  //espara  crear una clase llamada mostrar(despues se crea en css: es para que cuando se haga click en en menu,se
            //despliege)
});





const subMenuBtn = document.querySelectorAll(".submenu-btn"); //llamamos y guardamos en una variable a la clase de la etiqueta PRODUCTO.

for( let i=0; i<subMenuBtn.length; i++) {   // i= 0; i<tiene que  ser menor a la cantidad de submenu que puedan existir, para que asi
     //se repita las veces , dependiendo de la cantidad de submenu que haigan,i ++ ; para que valla aumentabdo de uno en uno.

     subMenuBtn[i].addEventListener('click', function(){  
          if (window.innerWidth < 1024){  //condicional: es para cuando el ancho de la ventana se menor que 1024px (oara que funcione solo para movil)
               
                const    subMenu = this.nextElementSibling; //selecciona al submenu del la etiqueta que le e dado click,osea selecciono producto
                  //ahora selecciona al siguente elemeto que es el submenu
                 const height = subMenu.scrollHeight;  //para desplegar un alto

                // subMenu.classList.add("desplegar")     //submenu se le agrega una clase "desplegar";
                 //subMenu.style.height = height + "px";  //subemnu se le agreega a esa clase y se clase tendra style height que son px


                 if(subMenu.classList.contains("desplegar")){ //si Submenu contiene la clase desplegar () 
                      subMenu.classList.remove("desplegar"); //remover la clase desplegar.
                      subMenu.removeAttribute("style");  //remove el atrributo style .

                 }else{  //else
 
                    subMenu.classList.add("desplegar") //submenu se le agregara  una clase, Agrega la clase  deplezar
                    subMenu.style.height = height + "px";
                 }
                   
                 
          }
            
          
     });
}







//JavaScript del index03

  
function Capturar(){
       
     let dato, mensaje;
     dato = document.getElementById('nomb').value;


     if(dato == 'Joel' || dato == 'zeta' ){

          console.log("hola" + dato)
      
     }else{
          swal('usted no puede ingresar')
     }
}





//==============ANIMETE =======

//(recibe tres parametros) 1-las propiedades que tendra , 2- el tiempo que durará.



  