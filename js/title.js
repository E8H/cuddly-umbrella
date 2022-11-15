var i=0;
setInterval(function(){
    var titles=[
"uzi.rip",
"uzi.ri",
"uzi.r",
"uzi.",
"uzi",
"uz",
"u",
"uz",
"uzi",
"uzi.",
"uzi.r",
"uzi.ri",
"uzi.rip"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 250);
