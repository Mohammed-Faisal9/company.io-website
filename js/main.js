// navbar
const toggleBtn = document.getElementById('toggle');
const list = document.querySelector('.main-header .list');

toggleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
})

// testimonials slide
const bullets = document.querySelectorAll('.bullets span');
bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        bullets.forEach(e => {
            e.classList.remove('active')
        })
        bullet.classList.add('active')
        document.querySelector('.testimonials .container').classList.toggle('move');
    })
})