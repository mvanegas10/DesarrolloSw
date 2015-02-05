/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcular() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
 
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                else
                {
                    var rta = parseInt(x) + parseInt(y);
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }
function concatenar() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                var rta = x + y;
                document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                
            }
function ordenar() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                var rta;
                if (isNaN(x)) {
                    if (isNaN(y)){
                        if(x < y){
                            rta = x + " - " + y;
                        }
                        else{
                            rta = y + " - " + x;
                        }
                    }
                    else{
                        rta = x + " - " + y;
                    }
                }
                else{
                    if (parseInt(x) < parseInt(y)){
                        rta = x + " - " + y;
                    }
                    else{
                        rta = y + " - " + x;
                    }  
                    
                }                   
                document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta en órden ascendente es: "+ rta +"</div>";;
                
            }

