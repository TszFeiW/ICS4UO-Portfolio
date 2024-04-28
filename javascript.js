function randomImage() {
    let image = document.getElementById('image');
    let images = ['feiheart.jpg', 'feihide.jpg', 'feiflowers.jpg', 'fei.png'];
    setInterval(function(){
        let random = Math.floor(Math.random()*4);
        image.src =  images[random];
    }, 1200);
}

function otherRandomImage() {
    let image2 = document.getElementById('image2');
    let images2 = ['feiheart.jpg', 'feihide.jpg', 'feiflowers.jpg', 'fei.png'];
    setInterval(function(){
        let random = Math.floor(Math.random()*4);
        image2.src =  images2[random];
    }, 1200);
}
