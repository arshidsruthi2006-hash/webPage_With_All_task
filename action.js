let search=document.getElementById("search");
let symbole=document.getElementById("symbole");
let items = document.querySelectorAll(".items");
symbole.addEventListener("click",()=>{
    let value = search.value.toLowerCase();

    items.forEach(item => {
        let name = item.textContent.toLowerCase();

        if (name.includes(value)) {
            item.style.display = "inline-block";

        } else {
            item.style.display = "none";
        }
    });

});
let div=document.getElementById("logniHole");
div.addEventListener("click",()=>{
        if (document.getElementById("loginaction")) {
        return;
    }
  let loginaction=document.createElement("div");
    loginaction.id="loginaction";
   div.append(loginaction);
   
   let loginpara=document.createElement("p");
   loginpara.innerText="Login";
   loginpara.style.color="black";
   loginpara.style.fontSize="25px";
   loginaction.append(loginpara);
   
   let loginbox=document.createElement("input");
   loginbox.type="text";
   loginbox.placeholder="+code enter phone number";
   loginbox.id="loginBox";
   loginaction.append(loginbox);

   let loginButton=document.createElement("button");
   loginButton.id="loginButton";
   loginButton.innerText="Login";
   loginaction.append(loginButton);

loginButton.addEventListener("click",()=>{
    loginaction.style.display="none";
})



})



// let items = document.querySelectorAll(".items");
let banner = document.getElementById("banner");
let shopnow = document.getElementById("shopnow");
let paymentdiv = null;

items.forEach((itemsea) => {
    itemsea.addEventListener("click", () => {

        items.forEach((otherItem) => {
            otherItem.style.display = "none";
        });
        banner.style.display = "none";
        shopnow.style.display = "none";
        itemsea.style.display = "block";
        // itemsea.style.marginLeft = "600px";
        function updateItemsea() {
     if(window.innerWidth <= 1000){
    itemsea.style.marginLeft = "200px";
} else {
    itemsea.style.marginLeft = "600px";
}
        }
updateItemsea();

window.addEventListener("resize", updateItemsea);

        let buynow = document.createElement("button");
        if (!itemsea.querySelector(".buynow")) {
            buynow.innerText = "Buy Now";
            buynow.className = "buynow";
            itemsea.appendChild(buynow);
        }

        buynow.addEventListener("click",(event)=>{
            event.stopPropagation();
            itemsea.style.display="none";
            buynow.style.display="none";
            paymentdiv=document.createElement("div");
            paymentdiv.className="paymentdiv";
            let paymentPara=document.createElement("p");
            paymentPara.className="paymentPara";
            paymentPara.innerText="Payment Method";
            paymentdiv.append(paymentPara);
            
         let payment = document.createElement("div");
        
let radio = document.createElement("input");
radio.type = "radio";
radio.className="circle";

let label = document.createElement("label");
label.innerText = "Cash on Delivery";
label.id="cash";
payment.append(radio, label);
paymentdiv.append(payment);
radio.checked = true;
   
 
let order = document.createElement("button");

order.innerText = "Order";
order.className = "order";

order.style.display = "block";
order.style.position = "relative";
order.style.zIndex = "99999";
order.style.pointerEvents = "auto";

paymentdiv.append(order);

order.addEventListener("click", () => {

    let productName = itemsea.querySelector(".information").innerText;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
     let cartItem = {
        name: productName
    };
    cart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(cart));
     paymentdiv.style.display = "none";

    //  let Cart=document.getElementById("Cart");

      let home=document.createElement("div");
      home.innerText="Go To home";
     home.id="home";
     topPage.appendChild(home);

     let cartProduct=document.getElementsByClassName("cartProduct");



home.addEventListener("click", () => {
    cartContainer.style.display = "none";
    home.style.display="none";
    if (paymentdiv) {
        paymentdiv.style.display = "none";
    }
    items.forEach((item) => {
        item.style.display = "inline-block";
        item.style.marginLeft = "";
    });
    banner.style.display = "block";
    shopnow.style.display = "block";
    
});
     alert("Added to cart");
   
});
let topPage=document.getElementById("topPage");
topPage.appendChild(paymentdiv);
        })
    });
});



let topPage=document.getElementById("topPage"); 
let cartButton = document.getElementById("Cart"); 
let cartContainer = document.createElement("div"); 
cartContainer.id = "cartContainer";
 cartContainer.style.display = "none";
  topPage.appendChild(cartContainer); 
 
    cartButton.addEventListener("click", () => {
          items.forEach((item) => { 
            item.style.display = "none"; 
        });
         banner.style.display = "none"; 
         shopnow.style.display = "none";
         cartContainer.style.display = "block"; 
         cartContainer.innerHTML = ""; 
        
         let cart = JSON.parse(localStorage.getItem("cart")) || []; 
         if (cart.length === 0) {
             cartContainer.innerText="cart is empty";
            //  cartContainer.append(home);
              return;
             } 
             
    cart.forEach((product, index) => {

    let cartProduct = document.createElement("div");
    cartProduct.className = "cartProduct";

    let name = document.createElement("p");
    name.innerText = product.name;

    // let deleteButton = document.createElement("button");
    // deleteButton.innerText = "DELETE";
    // deleteButton.className = "deleteButton";

    cartProduct.append(name);
    // cartProduct.append(deleteButton);

    cartContainer.appendChild(cartProduct);

    // deleteButton.onclick = function () {

    //     console.log("DELETE CLICKED");

    //     cart.splice(index, 1);

    //     localStorage.setItem(
    //         "cart",
    //         JSON.stringify(cart)
    //     );

    //     cartProduct.remove();
    // };

                }); 
            })
            localStorage.removeItem("cart");
        