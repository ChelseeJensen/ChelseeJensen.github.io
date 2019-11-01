const images = document.querySelectorAll(img"[data-src]");
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

const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    });
},imgOptions);

images.forEach((img) => {
    imgObserver.observe(img);
});