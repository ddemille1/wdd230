if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyLoad");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    let script = document.createElement('script');
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
    document.body.appendChild(script);
}