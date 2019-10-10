document.addEventListener("DOMContentLoaded", function() {
    //nested menu
    const nestedMenu = document.querySelector(".nested-menu");
    const menuTriggerEl = document.querySelector(".menu-trigger-el");
    
    menuTriggerEl.addEventListener("mouseover", function() {
      nestedMenu.style.display = "block";      
    });
    
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";                               //this
    });
    
    //read more less
    const readMoreLessBtn = document.querySelectorAll(".read-more-less-btn");
    
    function showHideText() {
        const siblingsText = this.previousElementSibling;
        
        if (siblingsText.style.display === "none" || siblingsText.style.display === "") {         //siblings video 13_1(?)
            siblingsText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingsText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }    
    };
    
    for (let i = 0; i < readMoreLessBtn.length; i++) {                  //video13_2
        readMoreLessBtn[i].addEventListener("click", showHideText)
    };
    
    
    //newsletter
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");
    
    
    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formInfo.style.display = "block";
        
        if (input.value == "") {
            formInfo.textContent = "Pole puste, wpisz adres e-mail";
            input.value = "";
        } else if (!input.value.includes("@")) {
            formInfo.textContent = "Wpisz poprawnie adres e-mail"
        } else {
            formInfo.textContent = "Wpisz adres e-mail";
        }
    });

//stage
    const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".slider-stage");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous");
    const next = document.querySelector(".next");
    
    const slidesWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber=slides.length-1;
    
    function goToSlide(index) {
        if (index <0) {
            index = slidesNumber;
        } else if (index > slidesNumber) {
            index = 0;
        }
            
        slider.style.left= index * (-slidesWidth) + "px";
        currentIndex = index;
    }
    
    
    function slideToNext() {
        goToSlide(currentIndex + 1);
    }
    
    function slideToPrev() {
        goToSlide(currentIndex - 1);
    }
    
    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    setInterval(slideToNext, 5000);


//go-up-Button

    const goUpBtn = document.querySelector(".go-up i");
    
    goUpBtn.addEventListener("click", function() {
       window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth"
       });
    });

});



