// Get elemen
const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
buttons = document.querySelectorAll(".button");

let imageIndex = 1,
intervalid;

// define function to start automatic image slider
const autoSlide = () => {
    intervalid = setInterval(() => slideImage(++imageIndex), 2000); 
};

// call autoslide function on page load
autoSlide();

// a functiom that updates the carousel display to show the sepcified image
const slideImage = () => {

    //calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ?  images.length - 1 : imageIndex;

    // updated the caorusel display to show  the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Add mouseover event listener to wrapper elemnt to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval((intervalid)));

// Add mouseover event listener to wrapper elemnt to stop auto sliding
wrapper.addEventListener("mouseleave", autoSlide);

// a function that updates the carousel display to show the next or previous image
const updateClick = (e) => {

    //stop the automation slideshow
    clearInterval(intervalid);
    //calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // restart the automatic slideshow
    autoSlide();
}

// add event listeners to the navigation buttons
buttons.forEach(button => button.addEventListener("click", updateClick));