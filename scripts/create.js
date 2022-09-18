document.querySelector("#form").addEventListener("submit",formsub)

var arr = JSON.parse(localStorage.getItem("signup")) ||[];
console.log(arr)

    function formsub(){

    event.preventDefault();

            var obj = {

                name:document.querySelector("#name").value,
                // fname:document.querySelector("#fname").value,
                // lname:document.querySelector("#lname").value,
                 email:document.querySelector("#email").value,
                 pass:document.querySelector("#pass").value,
                 phone:document.querySelector("#phone").value,
                 zip:document.querySelector("#zip").value
            };
            arr.push(obj);
            // console.log(obj)

            localStorage.setItem("signup",JSON.stringify(arr));

            document
            .querySelector("form>input:last-child")
           

            window.location.href = "sign.html"
            
            }; 