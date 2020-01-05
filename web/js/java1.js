function validate() {
var u = document.getElementById("name").value;
var p1 = document.getElementById("email").value;
var p2 = document.getElementById("password-repeat").value;

if(u== "") {
alert("Vui lòng nhập tên!");
return false;
}
if(p1 == "") {
alert("Vui lòng nhập mật khẩu!");
return false;
}
if(p2 == "") {
alert("Vui lòng xác minh mật khẩu!");
return false;
}

alert("Xin hãy điền đúng thông tin!")

return true;
}