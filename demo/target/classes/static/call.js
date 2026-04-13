async function loadUser() {
    let response = await fetch("https://randomuser.me/api");
    let data = await response.json();

    let user = data.results[0];

    let username = user.login.username;
    let gender = user.gender;
    let actualImage = user.picture.large;

    document.getElementById("userName").innerHTML = username;
    document.getElementById("designation").innerHTML = "Software Engineer";

    // Step 1: show default image
    if (gender === "male") {
        document.getElementById("userImage").src = "img_avatar.png";
    } else {
        document.getElementById("userImage").src = "img_avatar2.png";
    }

    // Step 2: after 2 sec show actual API image
    setTimeout(() => {
        document.getElementById("userImage").src = actualImage;
    }, 2000);
}