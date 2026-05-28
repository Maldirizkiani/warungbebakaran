function register(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Register berhasil");

  window.location.href = "login.html";
}

function login(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const savedEmail =
  localStorage.getItem("email");

  const savedPassword =
  localStorage.getItem("password");

  if(email === savedEmail &&
     password === savedPassword){

     alert("Login berhasil");

     window.location.href = "index.html";

  }else{

     alert("Email atau password salah");

  }
}

function logout(){

  localStorage.removeItem("email");
  localStorage.removeItem("password");

  window.location.href = "login.html";
}

