{
    let masterMind = new MasterMind();
    let arrayPelotas = [undefined, undefined, undefined, undefined];
    let currentDiv = document.getElementById('main').firstElementChild;

    let comprobarArray = function(){
        if(!arrayPelotas.includes(undefined)){
            document.getElementById("check").setAttribute("class", "checkIN")
            document.getElementById("check").setAttribute("style", "pointer-events: ;");
            document.getElementById("check").addEventListener('click', comprobarIntento);
            
        }else{
            document.getElementById("check").setAttribute("class", "checkOUT");
            document.getElementById("check").setAttribute("style", "pointer-events: none;");
        }
            
    }
    let comprobarIntento = function(){
        let objetoPelotas = masterMind.comprobar(arrayPelotas);

        if(objetoPelotas.victoria)

            ganador();

        else{

            for(let i = 0; i < 4; i++){
                if(objetoPelotas.negras > 0){
                    currentDiv.getElementsByClassName('check')[i].className = 'check negro';
                    objetoPelotas.negras-= 1;
                }   
                else if(objetoPelotas.blancas > 0){
                    currentDiv.getElementsByClassName('check')[i].className = 'check blanco';
                    objetoPelotas.blancas-= 1;
                }
            }
    
            desactivarLinea();
    
            reiniciarIntento(); 
        }

          
        
    }
    let ganador = function(){
        alert("¡Has ganado!");
    }
    let reiniciarIntento = function(){

        crearLinea();
        currentDiv = document.getElementById('main').firstElementChild;
        arrayPelotas = [undefined, undefined, undefined, undefined];
        comprobarArray();
        asignarEventos();
    }
    let desactivarLinea = function(){
        var elementosDiv = Array.prototype.slice.call(currentDiv.getElementsByTagName('div'));
        elementosDiv.forEach(function(element){
            element.setAttribute("style", "pointer-events: none;");
        });
    }
    let pintar = function(){
        let color =  this.className.split(" ")[1];
        let arrayPrueba = currentDiv.getElementsByClassName('circulo');

        for(let i = 0; i<currentDiv.getElementsByClassName("circulo").length;i++){
            if(arrayPrueba[i].getAttribute("name") != "coloreado"){
                arrayPrueba[i].className += " "+color;
                arrayPrueba[i].setAttribute('name', 'coloreado');
                arrayPelotas[i] = color;
                comprobarArray();   
                return 0;
            }
        }
    
    }
    let borrar = function(index){
    arrayPelotas[index] = undefined;
    currentDiv.getElementsByClassName('circulo')[index].className = "circulo";
    currentDiv.getElementsByClassName('circulo')[index].setAttribute("name", "prueba");
    comprobarArray();  
    
    
    }
    let crearLinea = function(){
        let div = document.createElement('div');
        let dd = document.createElement('dd');
        let circulo;
        let check;

        div.setAttribute("class", "container");
    

        
        for(let i = 0; i<4;i++){
            circulo = document.createElement('div');
            circulo.setAttribute("class", "circulo");
            circulo.setAttribute("name", "prueba");
            div.appendChild(circulo);
        }
        div.appendChild(dd);
        for(let i = 0; i<4;i++){
            check = document.createElement('div');
            check.setAttribute("class", "check gris");
            div.appendChild(check);
        } 
        document.getElementById('main').insertBefore(div, currentDiv);

    }

    let asignarEventos = function(){
        document.getElementsByName('prueba').forEach(function(element, index){
            element.addEventListener('click', borrar.bind(this, index));
        });
        
    }

    for(let i = 0; i<document.getElementsByName('menu').length;i++){
        document.getElementsByName('menu')[i].addEventListener('click', pintar);
    }

    let init = function(){
        

        masterMind.init();
        asignarEventos();
    }

    
    window.onload = init;

}


    
