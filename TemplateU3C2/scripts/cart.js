let cartArr=JSON.parse(localStorage.getItem("cart"));
console.log(cartArr);
let total=cartArr.reduce(function (acc, cv){
    return acc+cv.price
},0);
// console.log(total)
document.getElementById("total").textContent=` $ ${total}`
let cart=document.getElementById("cart");

cartArr.forEach(function(ele,index){
    let conatiner=document.createElement("div");
    let image=document.createElement("img");
    image.src=ele.strMealThumb;
    let name=document.createElement("p");
    name.textContent=ele.strMeal;
    let price=document.createElement("p");
    price.textContent=ele.price;
    let delet=document.createElement("button");
    delet.textContent="remove";
    delet.onclick= function (){
        
        remove(index);
    }
    conatiner.append(image,name,price,delet);
    cart.append(conatiner)
})

function remove(index){
    cartArr.splice(index,1)
    console.log(cartArr)
    localStorage.setItem("cart",JSON.stringify(cartArr))
    cartArr=JSON.parse(localStorage.getItem("cart"));
    cartArr.forEach(function(ele,index){
        let conatiner=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.strMealThumb;
        let name=document.createElement("p");
        name.textContent=ele.strMeal;
        let price=document.createElement("p");
        price.textContent=ele.price;
        let delet=document.createElement("button");
        delet.textContent="remove";
        delet.onclick= function (event){
            event.preventDefault()
            remove(index);
        }
        conatiner.append(image,name,price,delet);
        cart.append(conatiner);
    })
}