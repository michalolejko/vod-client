var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 10,
    watchOverflow: true,
    slidesPerGroup: 8,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.addEventListener("click", (evt) => {
    const searchBtn = document.getElementById("search-btn");
    let targetElement = evt.target; 

    do {
        if (targetElement == searchBtn) {
            document.getElementById("search-txt").style.width = "240px";
            document.getElementById("search-txt").style.padding = "0 6px";
            document.getElementById("search-txt").focus();
            document.getElementById("search-box").style.border = "solid 1px white";
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);

    //outside:
    if (document.getElementById("search-txt").value === "")
    {
        document.getElementById("search-txt").style.width = "0px";
        document.getElementById("search-txt").style.padding = "0 0px";
        document.getElementById("search-box").style.border = "solid 1px black"; 
    }
    
});