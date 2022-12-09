import "./styles.css"

const body = document.querySelector('body')
const calculator = document.getElementById('calculator')
const keyboard = document.getElementById('keyboard')
const inputHistory = document.getElementById('history')
const theming_area_light = document.getElementById('theme-btns-light')
const theming_area_dark = document.getElementById('theme-btns-dark')
const right_btns = document.getElementById('col-6').getElementsByTagName('button')
const other_element = document.getElementById('other')

function lightTheme() {
    body.style.backgroundColor = "#002ead"
    calculator.style.backgroundColor = "#eeeef0"
    inputHistory.style.backgroundColor = "#eeeef0"
    calculator.style.color = "#3b3b4f"
    inputHistory.style.color = "#3b3b4f"
    theming_area_light.style.backgroundColor = '#d0d0d5'
    theming_area_dark.style.backgroundColor = '#fff'
    keyboard.style.backgroundColor = "#d0d0d5"
    for (let elem of right_btns) {
        elem.style.backgroundColor = "coral"
      }
}
function darkTheme() {
    body.style.backgroundColor = "#0a0a23"
    calculator.style.backgroundColor = "#3b3b4f"
    inputHistory.style.backgroundColor = "#3b3b4f"
    calculator.style.color = "#eeeef0"
    inputHistory.style.color = "#eeeef0"
    theming_area_light.style.backgroundColor = '#fff'
    theming_area_dark.style.backgroundColor = '#d0d0d5'
    keyboard.style.backgroundColor = "#1b1b32"
    for (let elem of right_btns) {
        elem.style.backgroundColor = "yellow"
        elem.style.color = "#3b3b4f"
      }
}

const light_btn = new Image('12px', '12px')
light_btn.setAttribute('src', "../src/icons/sun-regular.svg")
light_btn.setAttribute('alt', 'li');
light_btn.setAttribute('width', '12px');
light_btn.setAttribute('height', '12px');


const dark_btn = new Image('12px', '12px')
dark_btn.setAttribute('src', "../src/icons/moon-regular.svg")
dark_btn.setAttribute('alt', 'di');
dark_btn.setAttribute('width', '12px');
dark_btn.setAttribute('height', '12px');

theming_area_light.appendChild(light_btn)
theming_area_dark.appendChild(dark_btn)

function openRows() {
    const col1_element = document.getElementById('col-1')
    const col2_element = document.getElementById('col-2')
    const col7_element = document.getElementById('col-7')
    if (col1_element.style.display === 'none') {
        col1_element.style.display = 'flex';
    } else {
        col1_element.style.display = 'none';
    }
    if (col2_element.style.display === 'none') {
        col2_element.style.display = 'flex';
    } else {
        col2_element.style.display = 'none';
    }
    if (col7_element.style.display === 'none') {
        col7_element.style.display = 'flex';
    } else {
        col7_element.style.display = 'none';
    }
}

other_element.addEventListener("click", openRows)
theming_area_light.addEventListener("click", lightTheme)
theming_area_dark.addEventListener("click", darkTheme)