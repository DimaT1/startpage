function randomize_background(){
    var backgrounds = ["url('back1.jpg')",
                       "url('back2.jpg')",
                       "url('back3.jpg')",
                       "url('back4.png')",
                       "url('back5.jpg')",
                       "url('back7.jpg')",
                       "url('back8.jpg')",
                       "url('back9.jpg')",
                       "url('back10.jpg')",
    ];

    var random = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = backgrounds[random];
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}
