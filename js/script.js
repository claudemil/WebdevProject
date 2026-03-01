const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('text-anim')) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove("show");
        }
    });
}));

const textContainers = document.querySelectorAll(".text-anim");
textContainers.forEach(textContainer => observer.observe(textContainer));
const images = document.querySelectorAll(".img-anim");
images.forEach(image => observer.observe(image));

const cards = document.querySelectorAll(".observer-wrapper");
cards.forEach(card => observer.observe(card));
