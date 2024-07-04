// JavaScript para controlar o acordeão
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.duvidas h3');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            const answer = toggle.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } 
        });
    });
});