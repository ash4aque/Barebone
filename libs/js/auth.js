function validate () {

	var emailid = document.loginForm.username.value;
    var pass = document.loginForm.password.value;
    
    var xmlhttp;
    if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
    }   
    else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }   
    xmlhttp.open("POST", "authenticate", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var parameter = "username="+ emailid + "&password=" + pass;
    xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState==4 && xmlhttp.status == 200) {
            	if (xmlhttp.responseText == "-1")
            		document.getElementById('loginAlert').style.display = 'block';
            	else
            		window.location.href="apphome.html";
            }   
    };   
    xmlhttp.send(parameter);
}