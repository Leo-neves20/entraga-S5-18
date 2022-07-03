
let competidoresNomes = ["Rafael","Manoel","Daniel" ]
let header = ["Este é o pódio"]
let posiçãoDaniel = 0
let resultado = []


function positions(competidores){
    
       for(let i = 0; i < competidores.length; i++){

           posiçãoDaniel = competidoresNomes.indexOf("Daniel")

           if(posiçãoDaniel == 0){

              resultado.push("Lugar: Daniel") 
              resultado.push("Lugar: Rafael")
              resultado.push("Lugar: Manoel")

              console.log("Daniel é o vencedor")

           }else if(posiçãoDaniel == 1){

              resultado.push("Lugar: Daniel")
              resultado.push("Lugar: Rafael")
              resultado.push("Lugar: Manoel")

              console.log("Daniel é o vencedor")

           }else{

              resultado.push("Lugar: Rafael")
              resultado.push("Lugar: Daniel")
              resultado.push("Lugar: Manoel")

           }

           

           return header.concat(resultado)

       }

       
}

console.log(positions(competidoresNomes))