const wraper = document.querySelector(".sliderwraper")
const menuItems = document.querySelectorAll(".menuitem");
const products = [
    {
        id: 1,
        title: "Face Cream",
        price: 20,
        Img:  "Creams/creams slide img.png",
    },
    {
        id: 2,
        title: "FaceWash",
        price: 20,
        Img: "Face wash/faceWash slide img.png",
    },
    {
        id: 3,
        title: "Serums",
        price: 20,
        Img: "Serums/serum slide img.webp",
    },
    {
        id: 4,
        title: "Soaps",
        price: 20,
        Img: "Soaps/soap slide img.png",
    },
    {
        id: 5,
        title:"Moisturizers",
        price: 20,
        Img: "Moisturizers/Moisturizer slide img.png",
    },
]
let choosenproduct = products[0]

const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproducttypes = document.querySelectorAll(".type");
menuItems.forEach((item , index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wraper.style.transform = `translateX(${-100 * index}vw)`
        // Change the choosen products
        choosenproduct = products[index];
        // Change text of current title
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent =   choosenproduct.price + "%" + " 0ff";
        currentproductimg.src = choosenproduct.Img
        })
    });
        //  Open and close payment Card
        const productbutton = document.querySelector(".productbutton");
        const close = document.querySelector(".close");
        const payment = document.querySelector(".payment");
        productbutton.addEventListener("click",()=>{
            payment.style.display="flex"
        })
        close.addEventListener("click",()=>{
            payment.style.display="none"
        })