var details = JSON.parse(localStorage.getItem("productDetails"));
var cartArr = JSON.parse(localStorage.getItem("CartItems")) || [];
showdetails(details);


function showdetails(details) {
    document.getElementById("containershra").innerHTML = "";

    details.map(function (el) {

        var div2 = document.createElement("div2");
        div2.setAttribute("id", "imagebox");

        var image = document.createElement("img");
        image.setAttribute("src", el.image);

        var div = document.createElement("div");
        div.setAttribute("id", "product");

        var brand = document.createElement("p");
        brand.textContent = el.name;
        brand.setAttribute("id", "brandshra");
        console.log(brand)

        var name = document.createElement("p");
        name.textContent = el.name2;
        name.setAttribute("id", "secondshra");

        var price = document.createElement("p");
        price.textContent = el.price;
        price.setAttribute("id", "priceshra");

        var about = document.createElement("p");
        about.textContent = el.about;
        about.setAttribute("id", "aboutshra");



        div3 = document.createElement("div")
        var btn = document.createElement("button");
        btn.setAttribute("id", "btn");
        btn.textContent = "Add To Basket";
        // btn.textContent="for Standard Shipping";
        btn.addEventListener('click', function () {
            addToCart(el)
        })

        div2.append(image);
        div.append(brand, name, price, about, btn);
        document.getElementById("containershra").append(div2, div);



    })
}

function addToCart(el) {
    cartArr.push(el);
    console.log(el);
    localStorage.setItem("CartItems", JSON.stringify(cartArr));
    window.location.href = "finalcart.html";
    // alert("Item added Successfully")

}
