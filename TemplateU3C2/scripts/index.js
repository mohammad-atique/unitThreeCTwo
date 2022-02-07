let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
let cart=JSON.parse(localStorage.getItem("cart"))||[];
async function getDish(){
    try{
        let res= await fetchUrl(url);
        
         res=[res]
        
        showdata(res[0].meals)
    }
    catch(err){
        console.log(err);
    }
}
getDish();

function fetchUrl(url){
    return fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function(res){
        return res;
    })
    .catch(function(err){
        console.log(err);
    });
}

function showdata(data){
    console.log(data)
    let menu=document.getElementById("menu");
    menu.innerHTML="";
    data.forEach(function (elem,index){
        let container=document.createElement("div");
        let image=document.createElement("img");
        image.src=elem.strMealThumb;
        let name=document.createElement("p");
        name.textContent=elem.strMeal;
        let price=document.createElement("p");
        let pr=Math.floor(Math.random()*501);
        price.textContent=`$ ${pr}`;
        data[index].price=pr;
        let btn=document.createElement("button");
        btn.textContent="Add to Cart"
        btn.onclick=function (el){
            el.preventDefault();
            addToCart(elem);
        }
        container.append(image,name,price,btn);
        menu.append(container)
    });



}
function addToCart(elem){
    cart.push(elem);
    cartCount(cart)
    // console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))
}
cartCount(cart)

function cartCount(cart){
    let cartCount=document.getElementById("count");
    cartCount.textContent=`Cart Count: ${cart.length}`
}

