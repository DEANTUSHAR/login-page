function pass() {
    var username = document.getElementById("uus").value
    var password = document.getElementById("password").value

    if (username == "admin" && password == "user") {
        alert("login sucessfully");
        return false;

    } else {
        alert("login failed");

    }


}
