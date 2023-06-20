var btn = document.getElementById('btn');

document.querySelector(".up-right").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(-60px, 60px) rotate(30deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".up-right").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".up-left").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(60px, 60px) rotate(-30deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".up-left").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".up").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(0px, 60px) rotate(0deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".up").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".left").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(60px, 0px) rotate(0deg)';
    btn.style.transition = '0.5s';
})

document.querySelector(".left").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".mid").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(60px, 60px) rotate(-30deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".mid").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".bottom-right").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(-60px,-60px) rotate(-30deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".bottom-right").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".right").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(-60px, 0px) rotate(0deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".right").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".bottom-left").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(60px,-60px) rotate(30deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".bottom-left").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.querySelector(".bottom").addEventListener('mouseover',function() {
    btn.style.transform = 'translate(0px, -60px) rotate(0deg)';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '0 30px 30px -2px rgba(128,128,128,0.7)';
})

document.querySelector(".bottom").addEventListener('mouseout',function() {
    btn.style.transform = '';
    btn.style.transition = '0.25s';
    btn.style.boxShadow = '';
})

document.getElementById('password').addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        btn.innerHTML = "No cheating bruh!";
        btn.style.width = '150px';
        btn.style.left = '45px';
    }
})
btn.addEventListener('click', function() {
    alert("You caught me boo.");
})