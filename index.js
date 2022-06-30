
let competidoresNomes = ["Rafael","Manoel","Daniel" ]
let header = ["ESTE É O PÓDIO:"]
let resultado = []

function positions(competidores){

        
       if(competidores[0] != "Daniel"){

        resultado.push(("Rafael"))
        resultado.push("Daniel")
        resultado.push("Manoel")

        
       }else if(competidores[0] == "Daniel"){
        
        resultado.push("Daniel")
        resultado.push("Rafael")
        resultado.push("Manoel")

        console.log("DANIEL É O VENCEDOR !!!")

       }

       return  header.concat(resultado)
       
}

console.log(positions(competidoresNomes))