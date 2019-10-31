const images = document.querySelectorAll("[data-src]");
console.log(images)

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.onload = () => {
        img.removeAttribute("data-src")
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            observer.unobserve(item.target);
        }
    });
},imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});