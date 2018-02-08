
     let currentDiv = document.getElementById('main').lastElementChild;

    let MasterMind = function(){

        let colores = ["negro", "azul", "verde", "amarillo", "rojo", "naranja", "blanco", "marron"];
        let arrSolucion = new Array();
       
        var element = document.getElementsByClassName('container')[0];
        var nuevo = element.cloneNode(true);
        
        

        let numeroAleatorio = () => {
            return Math.floor(Math.random()*colores.length);
        }

        let init = function(){
            
            for(let i = 0; i<4;i++)
                arrSolucion.push(colores[numeroAleatorio()])
            asignarEventos();
            console.log(arrSolucion);
            
            
        }
    
        let comprobarCoincidencia = function (){
           
            let arrayD =currentDiv.getElementsByClassName('circulo');
            let array = [];
            let negros = 0;
            for(let i = 0; i<arrayD.length;i++){
                array[i] = arrayD[i].className.split(" ")[1];    
            }
            
            let coincidencias = 0;
            for(let i = 0; i < 4; i++){
                if(arrSolucion[i]===array[i]){
                    currentDiv.getElementsByClassName('check')[coincidencias].className = 'check negro';
                    negros++;
                    coincidencias++;
                }
                    
            }
            if(coincidencias != 4){
                array.forEach(function(elemento, index){
                    if(arrSolucion.indexOf(elemento) >=0 && index != arrSolucion.indexOf(elemento)){
                        currentDiv.getElementsByClassName('check')[coincidencias].className = 'check blanco';
                        coincidencias++;
                    }
                
                });

                var elementosDiv = Array.prototype.slice.call(currentDiv.getElementsByTagName('div'));
                elementosDiv.forEach(function(element){
                    element.setAttribute("style", "pointer-events: none;");
                })

                crearLinea();
               
                currentDiv = document.getElementById('main').lastElementChild;
                coincidencias = 0;
                 window.scrollTo(0, window.outerHeight);

                arrayPelotas = [undefined, undefined, undefined, undefined];
                comprobarArray();
                asignarEventos();
            }else{

                alert("Has ganado!");

            }
            
                
            
        
            
        }
        

        return{
            init: init,
            comprobar: comprobarCoincidencia
        }

    }

 
   // window.onclick = masterMind.comprobar;
    
