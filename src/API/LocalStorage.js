export const SignupStorage = (data) => {
  let users_exist_data = localStorage.getItem("users");

  const GetAndPush = () => {
    let Old_data = JSON.parse(localStorage.getItem("users"));
    Old_data.push(data);
    localStorage.setItem("users", JSON.stringify(Old_data));
  };

  if (users_exist_data === null) {
    localStorage.setItem("users", "[]");
    GetAndPush();
  } else {
    GetAndPush();
  }
};

export const SigninStorage = (data) => {
  let users_exist_data = JSON.parse(localStorage.getItem("users"));
  var bool_flag = false;

  if (users_exist_data === null) {
    bool_flag = false;
  } else {
    users_exist_data.filter((checkuser) => {
      if (
        checkuser.email === data.email &&
        checkuser.password === data.password
      ) {
        localStorage.setItem("loggeduser", JSON.stringify(checkuser));
        window.location.href = "/";
        return (bool_flag = true);
      } else return null;
    });
  }

  return bool_flag === false ? alert("user not found") : null;
};
