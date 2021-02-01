//------------------------------------ Hover on shop item ------------------------------------ 

var navShopHover = document.querySelector(".js--nav__main--link-shop");
if(navShopHover)
{
    navShopHover.addEventListener("click", () =>
    {
        var navShopBlock = document.querySelector(".js--nav__shop");
        navShopBlock.classList.add("nav__shop--show");
    });
}
document.body.addEventListener("click", (e) =>
{
    var navShopBlock = document.querySelector(".js--nav__shop");
    var navShopHover = e.target.classList.contains("js--nav__main--link-shop");
    if(navShopBlock && !navShopHover) navShopBlock.classList.remove("nav__shop--show");
});


//------------------------------------ nav main media queries ------------------------------------ 

function myFunction(x) 
{
    if (x.matches)  // If media query matches
    {
        document.querySelector(".nav__main--cart").classList.remove("nav__main--link-hide");   
        document.querySelector(".nav__main--eqiv").classList.remove("nav__main--link-hide");

        // document.querySelector(".nav__main--list").remove();

        var navMainEquiv = document.querySelector(".nav__main--eqiv");
        var html = 
        `
            <ul class="nav__main--list">
                <li class="nav__main--item"><a class="nav__main--link js--nav__main--link-shop">Shop</a></li>
                <li class="nav__main--item"><a href="#" class="nav__main--link">MY BOYFRIENDS BACK</a></li>
                <li class="nav__main--item"><a href="#" class="nav__main--link">Staff Edit</a></li>
                <li class="nav__main--item"><a href="#" class="nav__main--link">Contact</a></li>
            </ul>
        `;
        navMainEquiv.insertAdjacentHTML("beforeend", html);
    }
    else 
    {
        document.querySelector(".nav__main--cart").classList.add("nav__main--link-hide");   
        document.querySelector(".nav__main--eqiv").classList.add("nav__main--link-hide");
    }
}

var x = window.matchMedia("(max-width: 56.25em)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


var naMainEquiv = document.querySelector(".js--nav__main--eqiv");
if(naMainEquiv)
{
    naMainEquiv.addEventListener("click", (e) =>
    {
        document.querySelector(".nav__main--list").classList.add("nav__shop--show");
        const shop = e.target.matches(".js--nav__main--link-shop"); // delegation
        if(shop)
        {
            var navShopBlock = document.querySelector(".js--nav__shop");
            navShopBlock.classList.add("nav__shop--show");
        }

    });
}
document.body.addEventListener("click", (e) =>
{
    var navEqui = document.querySelector(".nav__main--list");
    var navEquivClick = e.target.classList.contains("js--nav__main--eqiv");
    if(navEqui && !navEquivClick) navEqui.classList.remove("nav__shop--show");
});


//------------------------------------ Show cart empty ------------------------------------ 
// show cart empty when clicking on the cart
Array.from(document.querySelectorAll(".nav__main--cart, .js-cart-hide-port")).forEach(el =>
{
    if(el)
    {
        el.addEventListener("click", () =>
        {
            document.querySelector(".cart__empty").style.opacity ="1";
            document.querySelector(".cart__empty").style.width ="50%";
            document.querySelector(".cart").style.background="#eee";
            document.querySelector(".cart").style.zIndex="9999999";
        })
    }
});

// hide the empty card when clicking on close
document.querySelector(".cart__empty--row-close").addEventListener("click", () =>
{
    document.querySelector(".cart__empty").style.opacity ="0";
    document.querySelector(".cart__empty").style.width ="0%";
    document.querySelector(".cart").style.background="inherit";
    document.querySelector(".cart").style.zIndex="-1";
});

// hide the empty card when clicking anywhere in the card except the exmpty card
var cart = document.querySelector(".cart");
if(cart)
{
    cart.addEventListener("click", (e) =>
    {
        var isCartEmpty = e.target.matches(".cart__empty, .cart__empty *");
        console.log(isCartEmpty, e.target);
        if(!isCartEmpty)
        {
            document.querySelector(".cart__empty").style.opacity ="0";
            document.querySelector(".cart__empty").style.width ="0%";
            document.querySelector(".cart").style.background="inherit";
            document.querySelector(".cart").style.zIndex="-1";
        }
    });
}

//------------------------------------ Sticky nav - hide nav__login------------------------------------ 

var loginStatus = "unlogged";

if(loginStatus === "unlogged")
{
    document.querySelector(".nav__login").style.display="flex";
} 
else if (loginStatus === "logged")
{
    document.querySelector(".nav__login").style.display="none";
}

$(document).ready(function()
{
    $('.nav').waypoint(function(direction)
    {
        if($(".nav"))
        {
            if (direction == "down")
            {
                $('.nav').addClass('sticky');  
                if(loginStatus === "logged") document.querySelector(".header").style.marginTop = "8rem";
                if(loginStatus === "unlogged") document.querySelector(".header").style.marginTop = "10.5rem";
            } 
            else
            {
                $('.nav').removeClass('sticky');
                if(loginStatus === "logged" || loginStatus === "unlogged" ) document.querySelector(".header").style.marginTop = "0";
            }
        }
    },{offset:"-105px"})
});

//------------------------------------ Smooth scroll ------------------------------------ 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//------------------------------------ open page when clicking on  ------------------------------------ 

var navMainPageName = document.querySelector(".nav__main--page-name");
navMainPageName.addEventListener("click", () =>
{
    // window.open("../index.html");
    window.location.replace("../index.html")
});