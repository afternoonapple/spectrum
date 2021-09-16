var buttonpress = 0

function buttoncollapse() {
    document.getElementById("button-collapse").style.display = "none"
    buttonpress = buttonpress+1
    if (buttonpress % 2 == 1) {
        document.getElementById("button-collapse").style.display = "block";
    }
    if (buttonpress % 2 == 0) {
        document.getElementById("button-collapse").style.display = "none";
    }
    if (buttonpress == 5) {
        alert('stop pushing my buttons');
    }
    if (buttonpress == 12) {
        alert('seriously??');
    }
    if (buttonpress == 20) {
        alert("if you keep doing this, i'll reveal my special attack.");
    }
    if (buttonpress == 30) {
        alert("......");
    }
    if (buttonpress == 40) {
        alert("alright, you asked for this.");
        setTimeout(window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 2000);
    }
}