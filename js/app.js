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
        
        if (siblingsText.style.display === "none" || siblingsText.style.display === "") {         //siblings filmik 13_1(?)
            siblingsText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingsText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }    
    };
    
    for (let i = 0; i < readMoreLessBtn.length; i++) {                  //filmik 13_2
        readMoreLessBtn[i].addEventListener("click", showHideText)
    };
    
    
    //newsletter
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");
    
    
    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault();                           //zapobiega przeładowaniu strony i blokuje defaultowe powiadomienia JS
//        formInfo.style.display = "block";                     //można też umieścić tylko tutaj a te poniżej usunąć
        if (input.value !== "") {
            formInfo.style.display = "block";
            formInfo.textContent = "Zapisano poprawnie do newslettera";
        } else {
            formInfo.style.display = "block";
            formInfo.textContent = "Pole nie może być puste, podaj adres e-mail";
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
    let slidesNumber = slides.length - 1;                 //dlaczego -1 ???????
    
    function goToSlide(index) {
        slider.style.left = index * (-slidesWidth) + "px";
        currentIndex = index;
    };

    goToSlide(3);
});









