var bronzerArr=JSON.parse(localStorage.getItem("broArr"));
var productArr=  [] ;

showdata(bronzerArr);


function filterCat(){
  var selected = document.querySelector("#brandFilter").value;

  var filterdList = bronzerArr.filter(function(elem){
    return elem.name == selected;
  });
  console.log(filterdList);
 showdata(filterdList);
  
}

function handlePriceSort(){
var selected = document.querySelector("#priceSort").value;
 if (selected == "high"){

 bronzerArr.sort(function(a, b){
    return Number(b.price)-Number(a.price)
  });
 }
 if (selected == "low"){

    bronzerArr.sort(function(a, b){
    return Number(a.price)-Number(b.price)
    });

  }
  console.log(bronzerArr);
  showdata(bronzerArr);
 
} 



function showdata(bronzerArr){
    document.getElementById("containershra").innerHTML="";

    bronzerArr.map(function(el){
        var div=document.createElement("div");
        div.setAttribute("id", "productshra");

        div.addEventListener("click",function(){
            showProduct(el);
        })

        var div2=document.createElement("div2");
        div2.setAttribute("id", "imagebox");

        var image=document.createElement("img");
        image.setAttribute("src", el.image);

        var brand=document.createElement("p");
        brand.textContent=el.name;
        brand.setAttribute("id","brandshra");

        var name=document.createElement("p");
        name.textContent=el.name2;
        name.setAttribute("id","shra");

        var colours=document.createElement("p");
        colours.textContent=el.color;

        var price=document.createElement("p");
        price.textContent=el.price;
        price.setAttribute("id","priceshra");


        div2.append(image);
        div.append(div2,brand,name,colours,price);
        document.getElementById("containershra").append(div);
       

    });

    function showProduct(el){
        productArr.push(el);
        el.qty = 1;
        localStorage.setItem("productDetails", JSON.stringify(productArr));
        console.log(productArr)
        window.location.href="details.html"
    }

}


function search(){
var searchText = document.querySelector("#searchbar").value
 console.log(searchText)
var filterdata =    bronzerArr.filter(function(item){
    return item.name.includes(searchText);

})
console.log(filterdata)
showdata(filterdata)

}