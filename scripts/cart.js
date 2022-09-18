

var cartArr =  JSON.parse(localStorage.getItem("CartItems")) ;

function displayData(cartArr){

document.querySelector("#container").innerHTML="";
cartArr.map(function (el,index) {

var mainDiv = document.createElement("div")
mainDiv.setAttribute("id","mainDiv")

var img = document.createElement("img")
img.setAttribute("src", el.image)

var div2 = document.createElement("div")
div2.setAttribute("id","div2")

var text = document.createElement("h2")
text.innerText="SEPHORA COLLECTION"

var name = document.createElement("p")
name.innerText = el.name

var name2 = document.createElement("p")
name2.innerText = el.name2

var innerDiv = document.createElement("div")

var price = document.createElement("p")
price.innerText = el.price+" "+"-"+" "+el.qty
console.log(price)

innerDiv.append(price)
innerDiv.setAttribute("class","priceDiv")

var btn1 = document.createElement("button");
btn1.innerText = "Add"

btn1.addEventListener("click",function(){
    increaseQty(index);
})


var btn2 =document.createElement("button");
btn2.innerText= "Remove"

btn2.addEventListener("click",function(){
    decreaseQty(index);
})

var line = document.createElement("div")
line.setAttribute("class","line")

innerDiv.append(btn1,btn2)

div2.append(text,name,name2,innerDiv)
mainDiv.append(img,div2);


document.querySelector("#container").append(mainDiv,line)

});
}


console.log(cartArr)

function ShowTotal(){

var total = cartArr.reduce(function (acc,el){
   
    return acc+(el.price * el.qty);


    // acc = acc+elem.price

    // console.log(acc)
},0);

console.log(total)
document.getElementById("total").innerText = total;
}

displayData(cartArr);
ShowTotal();
function increaseQty(index){

    // console.log(index);
    cartArr[index].qty++;
    // console.log(cartArr)
    localStorage.setItem("CartItems",JSON.stringify(cartArr))
    displayData(cartArr)
    ShowTotal();
}

function decreaseQty(index){

    // console.log(index);
    cartArr[index].qty--;
    // console.log(cartArr)
    localStorage.setItem("CartItems",JSON.stringify(cartArr))
    displayData(cartArr)
    ShowTotal();


}
document.querySelector("#P").addEventListener("click",function(){
        window.location.href = "payment.html"
    })