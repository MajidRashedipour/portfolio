const list = document.querySelectorAll("li");
const elements = document.querySelectorAll("section")

function activeItem(item)
{
    if(item.path[0] != list[8])
    {
        list.forEach((item) => {
            item.classList.remove("active")
            this.classList.add("active")
        })
    }
}

list.forEach((item) => {
    item.addEventListener("click", activeItem)
})

list[8].addEventListener("click", () => {
    document.body.classList.toggle("dark")
    document.querySelector(".mode").classList.toggle("fa-moon")
    document.querySelector(".mode").classList.toggle("fa-sun")
})

var i = 0;
var welcomeText = ', to My Website.';
var aboutText = ', a Web Developer.';
var favoriteText = 'I Love the Allah and My Life and Nature and Travel and coding ...';
var speed = 200;

function typeWriter() {
  if (i < favoriteText.length) {
    document.getElementById("welcome").innerHTML += welcomeText.charAt(i);
    document.getElementById("about").innerHTML += aboutText.charAt(i);
    document.getElementById("favorite").innerHTML += favoriteText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



function home() {
    typeWriter()
    document.querySelector(".home").classList.add("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
    
}

function about() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.add("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
}

function resume() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.add("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
    
}

function linkedin() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.add("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
}

function github() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.add("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
}

function telegram() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.add("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.remove("active");
}

function instagram() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.add("active");
    document.querySelector(".message").classList.remove("active");
}

function message() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".resume").classList.remove("active");
    document.querySelector(".linkedin").classList.remove("active");
    document.querySelector(".github").classList.remove("active");
    document.querySelector(".telegram").classList.remove("active");
    document.querySelector(".instagram").classList.remove("active");
    document.querySelector(".message").classList.add("active");
}