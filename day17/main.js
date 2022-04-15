const facebook = document.querySelector('#facebook h1')
const youtube = document.querySelector('#youtube h1')
const tiktok = document.querySelector('#tiktok h1')


function counter(el, to) {

    var count = 0;
    var time = to / 250

    var counting = setInterval(() => {
        count += time;
        if (count > to) {
            clearInterval(counting)
            el.innerText = to;
        } else {
            el.innerText = Math.round(count);
        }
    }, 1)



}

counter(facebook, 3000)
counter(youtube, 5000)
counter(tiktok, 9999)