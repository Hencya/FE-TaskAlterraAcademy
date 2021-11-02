let validateForm = () => {
  const data = document.querySelectorAll(".form-group input");
  let x;
  let name;
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name);
    name = "" + data[i].name + "";
    x = document.forms["mainForm"][name].value;
    if (x == "") {
      alert(`${name} must be filled out`);
      return false;
    }
  }

  let password = document.forms["mainForm"]["password"].value;
  let confirmpassword = document.forms["mainForm"]["confirmpassword"].value;
  if (password != confirmpassword) {
    alert("field password tidak sama dengan confirm password");
    return false;
  }

  let email = document.forms["mainForm"]["email"].value;
  let confirmemail = document.forms["mainForm"]["confirmemail"].value;
  if (email != confirmemail) {
    alert("field email tidak sama dengan confirm email");
    return false;
  }
};

const submit = document.querySelector("#main-form button");
submit.onsubmit = validateForm();

// Jika ingin menggunakan ini tambahkan onsubmit di tag form

// let validateForm = () => {
//   let username = document.forms["mainForm"]["username"].value;
//   if (username == "") {
//     alert("field username belum terisi");
//     return false;
//   }
//   let password = document.forms["mainForm"]["password"].value;
//   if (password == "") {
//     alert("field password belum terisi");
//     return false;
//   }
//   let confirmpassword = document.forms["mainForm"]["confirmpassword"].value;
//   if (confirmpassword == "") {
//     alert("field confirmpassword belum terisi");
//     return false;
//   }
//   let email = document.forms["mainForm"]["email"].value;
//   if (email == "") {
//     alert("field email yang belum terisi");
//     return false;
//   }
//   let confirmemail = document.forms["mainForm"]["confirmemail"].value;
//   if (confirmemail == "") {
//     alert("field confirmemail belum terisi");
//     return false;
//   }
//   if (password != confirmpassword) {
//     alert("field password tidak sama dengan confirm password");
//     return false;
//   }
//   if (email != confirmemail) {
//     alert("field email tidak sama dengan confirm email");
//     return false;
//   }
// };
