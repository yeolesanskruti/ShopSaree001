const reviews=[
    {
        name:"Sneha Rawat",
        reviews:"Hi it's Sneha from Lahore! I absolutely love the sarees I purchased from ShopSaree! The quality and craftsmanship are outstanding. Thank you, ShopSaree, for making me feel like a queen!"
    },
    {
        name:"Marry Noah",
        reviews:"ShopSaree is my go-to saree website! The range of sarees is incredible, and the prices are affordable. I have received numerous compliments on the sarees I bought from SareeBazaar. Thank you for the impeccable service!"
    }, {
        name:"Sania Khan",
        reviews:"I'm thrilled with my saree purchase from SareeDelight! The saree arrived in perfect condition, and the quality is exceptional. Thank you, SareeDelight, for making my special occasion even more memorable!"
    }
];
const Name=document.querySelector(".test_box h4");
const Review=document.querySelector(".test_box p");
const btn=document.getElementsByClassName("next-circle");

let i=0;
setInterval(myTimer, 2000);
const reviewName=document.querySelector(".test_box");
function myTimer() {
    Name.textContent=reviews[i%3].name;
    Review.textContent=reviews[i%3].reviews;
    btn[i%3].style.backgroundColor="black";
    btn[(i+1)%3].style.backgroundColor="#ff8aa5";
    btn[(i+2)%3].style.backgroundColor="#ff8aa5";


    i++;

}
