let enddate = new Date("Jan 5, 2023 00:00:00").getTime();

let timer = setInterval(function(){
    var now = new Date().getTime()

    var diff = enddate-now

    var d = Math.floor(diff/(1000*60*60*24));
    var h = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    var m = Math.floor(diff%(1000*60*60)/(1000*60));
    var s = Math.floor(diff%(1000*60)/1000);

    document.getElementById("timer").innerHTML 
    = `${d}d ${h}h ${m}m ${s}s Left!`

},1000)


function scroll(){
    document.body.scrolltop = 0
    document.documentElement.scrolltop = 0
}

function menubutton(){
    let menu = document.getElementById("menu");
    
    if (menu.style.display === "none"){
        menu.style.display = "block"
    }

    else{
        menu.style.display = "none"
    }
}

function formSubmit(){
    // implement this
}

