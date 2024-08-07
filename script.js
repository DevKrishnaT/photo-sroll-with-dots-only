const btns = document.querySelectorAll(".all-btn");
const images = document.querySelectorAll(".images");
const imageOne = document.getElementsByClassName("image-1")[0];
const imageTwo = document.getElementsByClassName("image-2")[0];
const imageThree = document.getElementsByClassName("image-3")[0];
const imageFour = document.getElementsByClassName("image-4")[0];
const container = document.querySelector(".image-see");

function reset(){
    images.forEach(image => {
        image.className = "images";
    });
    btns.forEach(button => {
        button.className = "all-btn";
    });
}

function addEventClick(button){
    reset();
    switch (button.id) {
        case "btn-1":
            imageOne.classList.add("display");
            button.classList.add("backg");
            break;
        case "btn-2":
            imageTwo.classList.add("display");
            button.classList.add("backg");
            break;
        case "btn-3":
            imageThree.classList.add("display");
            button.classList.add("backg");
            break;
        case "btn-4":
            imageFour.classList.add("display");
            button.classList.add("backg");
            break;
        default:
            break;
    }
}

container.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('all-btn')) {
        addEventClick(event.target);
    }
});

btns.forEach(button => {
    button.addEventListener('click', (event) => {
        addEventClick(event.target);
    });
});
