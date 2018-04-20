
     let currentDiv = document.getElementById('main').lastElementChild;

    let MasterMind = function(){

        let colores = ["negro", "azul", "verde", "amarillo", "rojo", "naranja", "blanco", "marron"];
        let arrSolucion = new Array();
        let arrCopia = new Array();
        
        

        let numeroAleatorio = () => {
            return Math.floor(Math.random()*colores.length);
        }

        let init = function(){
            
            for(let i = 0; i<4;i++)
                arrSolucion.push(colores[numeroAleatorio()])
            asignarEventos();
            arrCopia = arrSolucion.slice();
            console.log(arrSolucion);
            
            
        }
    
        let comprobarCoincidencia = function (arrayD){
          
            let array = [];
            let negros = 0;
            for(let i = 0; i<arrayD.length;i++){
                array[i] = arrayD[i].className.split(" ")[1];    
            }
            
            let coincidencias = 0;
            for(let i = 0; i < 4; i++){
                if(arrCopia[i]===array[i]){
                    currentDiv.getElementsByClassName('check')[coincidencias].className = 'check negro';
                    negros++;
                    arrCopia[i] = undefined;
                    coincidencias++;
                }
                    
            }
            if(coincidencias != 4){
                array.forEach(function(elemento, index){
                    if(arrCopia.indexOf(elemento) >=0 && index != arrCopia.indexOf(elemento)){
                        currentDiv.getElementsByClassName('check')[coincidencias].className = 'check blanco';
                        arrCopia[arrCopia.indexOf(elemento)] = undefined;
                        coincidencias++;
                    }
                
                });

                var elementosDiv = Array.prototype.slice.call(currentDiv.getElementsByTagName('div'));
                elementosDiv.forEach(function(element){
                    element.setAttribute("style", "pointer-events: none;");
                })
                arrCopia = arrSolucion.slice();
                crearLinea();
               
                currentDiv = document.getElementById('main').lastElementChild;
                coincidencias = 0;

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
    
