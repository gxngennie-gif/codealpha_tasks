const cards=document.querySelectorAll(".project-card, .card");
window.addEventListener("scroll", ()=>{
    cards.forEach((card)=>{
        const position=card.getBoundingClientRect().top;
        const ScreenPosition=window.innerHeight/1.3;

        if(position<ScreenPosition){
            card.classList.add("active")
        }
    });
});