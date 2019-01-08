function randomize_background(){
    var backgrounds = ["url('back1.png')",
                       "url('back2.jpg')",];

    var random = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = backgrounds[random];
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}
