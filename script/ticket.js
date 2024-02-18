function handleTicketKeyupEvent(event){

}


const allBtn=document.getElementsByClassName("btn");

let count= 0;

let seatCount=40;

for(const btn of allBtn){
btn.addEventListener("click", function(event){
            count=count+1
            seatCount=seatCount-1

           setInnerText("seat-number", count);
           setInnerText("highest-seat", seatCount);

           const price=event.target.parentNode.parentNode.parentNode.parentNode.childNodes[15].childNodes[3].childNodes[3].childNodes[3].childNodes[1].innerText
           

           const seatName=event.target.innerText
            const economy=event.target.economy;

           const selectedContainer=document.getElementById("ticket-cost");

           const div=document.createElement("div")
           const h3=document.createElement("h3")
           h3.innerText=seatName;
            
           const h4=document.createElement("h4")
             h4.innerText=economy;
           const p=document.createElement("p")
           p.innerText=price;

           div.appendChild(h3)
           div.appendChild(h4)
           div.appendChild(p)

           selectedContainer.appendChild(div)


           const totalPrice=document.getElementById("total-price").innerText;
           
           const convertedTotalPrice=parseInt(totalPrice);
           
           document.getElementById("total-price").innerText=convertedTotalPrice + parseInt(price);
           
})
}


function setInnerText(id,value){
            document.getElementById(id).innerText=value;
}

// let seatCount=40;
// for(const btn of allBtn){
//             btn.addEventListener("click", function(event){
//                         seatCount=seatCount-1
//                        setInnerText("highest-seat", seatCount);
//             })  
// }