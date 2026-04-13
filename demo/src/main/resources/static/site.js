let john = true;

function showNextUser() {
    if (john == true) {
        document.getElementById("userName").innerHTML = "jane_doe"
        document.getElementById("designation").innerHTML = "Interior Designer"
        document.getElementById("userImage").src = "img_avatar2.png";
        john = false;
    } else {
        document.getElementById("userName").innerHTML = "john.doe"
        document.getElementById("designation").innerHTML = "Architect & Engineer"
        document.getElementById("userImage").src = "img_avatar.png";
        john = true;
    }
}