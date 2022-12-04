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

let form = document.getElementById("newform")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let boon = confirm("Are you sure?")

    if (boon == true)
    {
        formSubmit()
    }

    else
    {
        event.preventDefault()
    }
})

function formSubmit(){
    let date = new Date()
    let datestring = date.toDateString()

    localStorage.setItem("Date",datestring)
    localStorage.setItem("Email",form.elements[0].value)
    localStorage.setItem("Type",form.elements[1].value)
    localStorage.setItem("Title",form.elements[2].value)

    alert(`Enquiry Submitted\nTime of Submission: ${datestring}\n Email: ${localStorage.getItem("Email")}`)
    form.submit()
}

let preventry = document.getElementById("form_values")

preventry.innerHTML = `Previous Entry:<br><br>Date: <br> ${localStorage.getItem("Date")}<br><br>Email: <br>${localStorage.getItem("Email")}<br>
<br>Enquiry type: <br>${localStorage.getItem("Type")}<br><br>Title: <br>${localStorage.getItem("Title")}
<br><br>Description will not be shown`