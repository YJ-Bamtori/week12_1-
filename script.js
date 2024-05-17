const nav = document.querySelector(`.nav`);
const bar = document.querySelector(`.bar`);
const tags = document.querySelectorAll(`.name, .fir, .content`);
const buy = document.querySelector(`.button`);
const text1 = document.querySelector(`.button h1`);
const text2 = document.querySelector(`.button h2`);

tags.forEach(tag => {
    tag.style.opacity = 0
})


document.addEventListener("scroll", function(){
const move = window.scrollY;

if(move>100){
    nav.classList.add("blur");
    bar.classList.add("visible");
    

}else{
    nav.classList.remove("blur");
    bar.classList.remove("visible");
}


// const name = document.querySelector(`.name`);


let delay =0.25;
tags.forEach(tag =>{

    const top = tag.getBoundingClientRect().top
    const bottom = tag.getBoundingClientRect().bottom;
    
    if(top < window.innerHeight && bottom > 0){
        tag.style.animation=`fadeIn 2s ${delay}s both`;
        // console.log("appear");
        delay += 0.25;
    
    }else{
        tag.style.animation="0";
        // console.log("disappear");
    
    }

})

})


buy.addEventListener("mouseover", function(){
    buy.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    text1.style.color = "white"
    text2.style.color = "white"
    console.log("enter")
})

buy.addEventListener("mouseout", function(){
    buy.style.backgroundColor = "white"
    text1.style.color = "black"
    text2.style.color = "black"
    console.log("out")

})