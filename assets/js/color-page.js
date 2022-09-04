

// Get the root element
var roott = document.querySelector(':root');
// start color one

let flags = 0 
document.querySelector(".awes-icon").addEventListener('click', e => {
    if (flags == 0) {
        document.getElementById("color-change-key").style.left = '0px'
        flags = 1;
    }
    else {
        document.getElementById("color-change-key").style.left = '-107px'
        flags = 0;
    }
})
document.querySelectorAll('.photo_bottom').forEach(e => {
    e.innerHTML += `<div class='afters allInner' style="background-image: url('assets/images/inner-img/shape-two-inners.png'); bottom: 0;"></div>`
})

document.querySelectorAll('.photo_top').forEach(e => {
    e.innerHTML += `<div class='befores allInner' style="background-image: url('assets/images/inner-img/shape-two-top-inners.png'); top: 0;"></div>`
})

document.querySelectorAll('.photo_bottom_down').forEach(e => {
    e.innerHTML += `<div class='afters' style="background-image: url('assets/images/inner-img/shape-one-inners.png'); bottom: 0;"></div>`
})
document.querySelectorAll('.colors').forEach(e => {
    e.addEventListener('click', function () {
         roott.style.setProperty('--min-color',`${e.style.color}`)
         roott.style.setProperty('--color-two',`${e.style.backgroundColor}`)
         roott.style.setProperty('--titl-color',`${e.style.fill}`)
         document.querySelectorAll(`.allInner`).forEach(m => {
            m.style.backgroundImage = `${m.style.backgroundImage.slice(0, m.style.backgroundImage.indexOf('inners')+6)}${this.getAttribute('data-color')}.png")`
        })
    })
})
