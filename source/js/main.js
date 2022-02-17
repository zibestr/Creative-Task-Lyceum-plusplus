// плавная прокрутка для якорных ссылок
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// плавное появление элементов на экране
// реализовано на обсерверах
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}

// переключение между темами
const slider = document.querySelector(".slider");
// находит внешнюю ссылку на стиль темы
const theme = document.querySelector("#theme-link");
// для замены картинки гитхаба в разделе контактов
const github_img = document.querySelector("#github-icon");

// прослушка ивента нажатия на слайдер
slider.addEventListener("click", function() {
    // если стоит светлая тема
    if (theme.getAttribute("href") == "../css/light-theme.css") {
        // то заменяет тему на темную вместе с картинкой гитхаба
        theme.href = "../css/dark-theme.css";
        github_img.src = "../../media/icons/github-dark.png"
    } else {
        // иначе меняет тему на светлую вместе с картинкой гитхаба
        theme.href = "../css/light-theme.css";
        github_img.src = "../../media/icons/github-light.png"
    }
});
