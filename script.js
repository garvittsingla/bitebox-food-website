var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var images = document.querySelector("#leftbenefits")


text1.addEventListener("click",function(){
    images.innerHTML=`<img src="img/benefit1.png" alt="">`;
})
text2.addEventListener("click",function(){
    images.innerHTML=`<img src="img/benefit2.png" alt="">`;
})
text3.addEventListener("click",function(){
    images.innerHTML=`<img src="img/benefit3.png" alt="">`;
})


