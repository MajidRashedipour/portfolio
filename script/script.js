const list = document.querySelectorAll("li");

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
typeWriter()