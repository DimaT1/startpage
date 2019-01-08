function randomize_background(){
    var backgrounds = ["url('back1.png')",
                       "url('back2.jpg')",];

    var random = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = backgrounds[random];
}
