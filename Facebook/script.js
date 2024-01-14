let cardWrap=document.getElementById('cardWrap');

function openCard(){
    cardWrap.classList.toggle('open-menu');
}

document.querySelector(".see-more").addEventListener("click", ()=> {
    document.querySelector(".third-bunch").style.display = "block";
    document.querySelector(".see-more").style.display = "none";
});

document.querySelector(".see-less").addEventListener("click", ()=> {
    document.querySelector(".third-bunch").style.display = "none";
    document.querySelector(".see-more").style.display = "flex";
});