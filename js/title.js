var i=0;
setInterval(function(){
    var titles=[
"uzi.club",
"uzi.clu",
"uzi.cl",
"uzi.c",
"uzi.",
"uzi",
"uz",
"u",
"uz",
"uzi",
"uzi.",
"uzi.c",
"uzi.cl",
"uzi.clu",
"uzi.club"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
