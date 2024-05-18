var arr = [
   { name: "Petals of roses", image: "https://cdn.pixabay.com/photo/2021/11/03/08/24/baskets-6765014_1280.jpg" },
   { name: "Animals of town", image: "https://cdn.pixabay.com/photo/2023/02/08/18/36/tawny-owl-7777285_640.jpg" },
   { name: "the crowd of city", image: "https://cdn.pixabay.com/photo/2024/05/11/06/47/tropical-8754092_640.jpg" },
   { name: "fruits of planet", image: "https://cdn.pixabay.com/photo/2020/11/20/16/26/labrador-5762115_640.jpg" },
   { name: "orange peeled", image: "https://cdn.pixabay.com/photo/2020/10/22/10/28/cow-5675684_640.jpg" },
   { name: "web design", image: "https://cdn.pixabay.com/photo/2020/10/22/10/28/cow-5675684_640.jpg" },
   { name: "apple juice", image: "https://cdn.pixabay.com/photo/2022/12/02/21/20/blue-7631674_640.jpg" }
   
   
]
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
   var clutter = ""; 
   // console.log(arr[i].image);
   clutter +=  `<div class="box">
           <img class="cursor-pointer" src="${arr[i].image}" alt="image">
           <div class="caption">${arr[i].name}</div>
       </div>`
       document.querySelector(".container").innerHTML += clutter
       // console.log(document.querySelector(".container").innerHTML);

}



function  handleSearchFunctionLity() {
var search = document.querySelector("#searchinput")
console.log(search);
   search.addEventListener("focus", function () {
       document.querySelector(".overlay").style.display  = "block"
   })    
   search.addEventListener("blur", function () {
       document.querySelector(".overlay").style.display  = "none"
   })    



   search
       .addEventListener("input", function () {
           const filterArray = arr.filter(obj => obj.name.toLowerCase().startsWith(search.value))
           var clutter = "";
           filterArray.forEach(function (obj) {
               clutter += `<div class="res flex px-8 py-3">
               <i class="ri-search-line font-semibold mr-5"></i>
               <h3 class="font-semibold">${obj.name}</h3>
           </div>`
           })
           document.querySelector(".searchdata").style.display = "block"
           document.querySelector(".searchdata").innerHTML = clutter
   
           
       })
       search
       .addEventListener("blur", function () {
           document.querySelector(".searchdata").style.display = "none";
   
           // document.querySelector("#searchinput").value = ""
           
       })
       
   }

  



handleSearchFunctionLity();