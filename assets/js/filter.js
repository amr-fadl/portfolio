

let links = document.querySelectorAll(".filter")

let items = document.querySelectorAll(".filter-img")

links.forEach(link => {
    link.addEventListener('click', function () {
        let filter = link.getAttribute('data-filter');

        links.forEach(link => link.classList.remove('active'))

        this.classList.add('active')

        items.forEach(item => item.style.display = "none")

        document.querySelectorAll(`${filter}`).forEach(item => item.style.display = "block")

    })

})

