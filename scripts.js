document.getElementById('askButton').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden');
});

document.getElementById('next_btn').addEventListener('click', function() {
    const popup_container = document.getElementById('home_container');
    const main_container = document.getElementById('ask_container');
    popup_container.classList.add('hidden');
    main_container.classList.remove('hidden');
});

document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.classList.add('heart')
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformValue +'deg)'

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },1000)
})

