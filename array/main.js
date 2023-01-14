// const title = document.querySelector("h1")
// console.log(title)


const title = document.querySelectorAll("h1")
console.log(title)

title.forEach((item) => {
        console.log(item);
        item.style.fontSize = "55px"
})