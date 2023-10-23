document.addEventListener("DOMContentLoaded", function() {

    let number=document.getElementsByClassName("input")
    let test=document.getElementById("testNumber")
    let table=document.getElementById("table")
    let newGame=document.getElementById("newGame")
    let contador=0
    let arrCount=[]
    let valor1,valor2,valor3,valor4
    let arrayA=[]
    let arrayPush=[]
    let green=0
    let blue=0
    let arrBG=[]
    
    randomNumber()


        
        
        
 
        
        
        
 

    test.addEventListener('click',()=>{

 if (valor1&&valor2&&valor3&&valor4){


        let tr=this.createElement("tr")
        table.appendChild(tr)
      
        
  
        
            arrCount=[]
            contador+=1
            arrCount.push(contador)
           
        
            arrCount.forEach (item=>{
              let list=document.createElement("td")
                list.textContent=`intento N° ${item}`
                tr.appendChild(list)
        
            })
        
        
  
        compararValores()
        arrBG.push(green,blue)
        green=0
        blue=0
 
    
     
        pushNumbers()
     
       
       
        arrayPush.forEach(item=>{
            let list=document.createElement("td");
            list.textContent=item;
            tr.appendChild(list)
        
        })
        arrayPush=[]
        let listBg=document.createElement("td");
        listBg.textContent=`${arrBG[0]} misma posicion,${arrBG[1]} 	Posición diferente`
        tr.appendChild(listBg)
        arrBG=[]
        
    
        
  }

else   {
    alert('debes llenar todos los campos')
}})

    newGame.addEventListener('click',()=>{
        randomNumber()
   
        
    })

    while(arrayA.length<4){
    
    let numRandom=Math.round(Math.random()*9)
    if (!arrayA.includes(numRandom))
    arrayA.push(numRandom)
    }
   


  


   
  function randomNumber(){
while(arrayA.length<4){

let numRandom=Math.round(Math.random()*9)
if (!arrayA.includes(numRandom))
arrayA.push(numRandom)
}


  }






number[0].addEventListener("change",
function(e){

    valor1=parseInt(e.target.value);


  ;})

number[1].addEventListener("change",
function(e){
    valor2=parseInt(e.target.value)


})

number[2].addEventListener("change",
function(e){
    valor3=parseInt(e.target.value)
 

    ;
})
number[3].addEventListener("change",
function(e){
    valor4=parseInt(e.target.value)

 ;
})

function pushNumbers(){
    if (valor1&&valor2&&valor3&&valor4){
        arrayPush.push(valor1.toString()+valor2.toString()+valor3.toString()+valor4.toString())
    }
    if (valor1===0||valor2===0||valor3===0||valor4===0){
        arrayPush.push(valor1.toString()+valor2.toString()+valor3.toString()+valor4.toString())
    }
    
}

function compararValores(){

    valor1===arrayA[0]&&valor2===arrayA[1]&&valor3===arrayA[2]&&valor4===arrayA[3]?
    alert(`correcto!! el numero era ${valor1}${valor2}${valor3}${valor4}`):

    

valor1===arrayA[0]?green+=1:
valor1===arrayA[1]||valor1===arrayA[2]||valor1===arrayA[3]?blue+=1:
number[0].style.backgroundColor='white'


valor2===arrayA[1]?green+=1:
valor2===arrayA[0]||valor2===arrayA[2]||valor2===arrayA[3]?blue+=1:
number[1].style.backgroundColor='white'

valor3===arrayA[2]?green+=1:
valor3===arrayA[0]||valor3===arrayA[1]||valor3===arrayA[3]?blue+=1:
number[2].style.backgroundColor='white'

valor4===arrayA[3]?green+=1:
valor4===arrayA[0]||valor4===arrayA[1]||valor4===arrayA[2]?blue+=1:
number[3].style.backgroundColor='white'




}





})