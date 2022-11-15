var app = document.getElementById('typeapp');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('cynical')
    .pauseFor(2500)
    .deleteAll()
    .typeString('czar')
    .pauseFor(5)
    .deleteAll()
    .typeString('xankin')
    .pauseFor(5)
    .deleteAll()
    .start();
