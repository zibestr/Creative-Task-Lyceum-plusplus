// плавная прокрутка
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
// Select the button
const slider = document.querySelector(".slider");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
const github_img = document.querySelector("#github-icon");

// Listen for a click on the button
slider.addEventListener("click", function() {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "../css/light-theme.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "../css/dark-theme.css";
        github_img.src = "../../media/icons/github-dark.png"
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "../css/light-theme.css";
        github_img.src = "../../media/icons/github-light.png"
    }
});
