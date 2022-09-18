var cailrayArr=JSON.parse(localStorage.getItem("Sephora"));
var productArr=[] ;
showdata(cailrayArr);


function filterCat(){
  var selected = document.querySelector("#brandFilter").value;

  var filterdList = cailrayArr.filter(function(elem){
    return elem.name == selected;
  });
  console.log(filterdList);
  showdata(filterdList);
  
}

function handlePriceSort(){
var selected = document.querySelector("#priceSort").value;
 if (selected == "high"){

    cailrayArr.sort(function(a, b){
    return Number(b.price)-Number(a.price)
  });
 }
 if (selected == "low"){

    cailrayArr.sort(function(a, b){
    return Number(a.price)-Number(b.price)
    });

  }
  console.log(cailrayArr);
  showdata(cailrayArr);

}


function showdata(cailrayArr){
    document.getElementById("containershra").innerHTML="";

    cailrayArr.map(function(el){
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
        brand.setAttribute("id","brandshra")

        var name=document.createElement("p");
        name.textContent=el.name2;
        name.setAttribute("id","shra");

        var colours=document.createElement("p");
        colours.textContent=el.name3;

        var price=document.createElement("p");
        price.textContent=el.price;
        price.setAttribute("id","price")
        price.setAttribute("id","priceshra");


        div2.append(image);
        div.append(div2,brand,name,colours,price);
        document.getElementById("containershra").append(div);
       

    });

    
function showProduct(el){
        productArr.push(el);
        localStorage.setItem("productDetails", JSON.stringify(productArr));
        console.log(productArr)
        window.location.href="details.html"
    }
}
