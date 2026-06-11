const galleryitem=document.querySelectorAll(".item");
const lightbox=document.getElementById("lightbox");
const lightboxing=lightbox.querySelector("img");
const closeb=document.querySelector(".close")
const nextb=document.querySelector(".next")
const prevb=document.querySelector(".prev")

let currentindex=0;
let image=[];

galleryitem.forEach((item,index)=>{
    image.push(item.querySelector("img").src);

    item.addEventListener("click",()=>{
        currentindex=index;
        showimage();
        lightbox.style.display="flex"
    });
});

function showimage(){
    lightboximg.src=image[currentindex];
}

nextb.addEventListener("click",()=>{
    currentindex=(currentindex + 1) % image.length;
});

prevb.addEventListener("click", ()=>{
    lightbox.style.display="none";
});

lightbox.addEventListener("click", (e)=>{
    if(e.target !== lightboximg && e.target !== nextb && e.target !==prevb){
        lightbox.style.display="none";
    }
});

const filterbuttons=document.querySelectorAll(".filter button");

filterbuttons.forEach(button => {
    button.addEventListener("click", () =>{
        document.querySelector(".filter .active")
        .classList.remove("active");
        button.classList.add("active")

        const filters=button.dataset.filters;

        galleryitem.forEach(item=>{
            if(filter=="all" || item.classList(filters)){
                item.style.display="block";
            }
            else{
                item.style.document='none';
            }
        });

    });
});
