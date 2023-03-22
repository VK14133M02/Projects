const handleHome = () => {
  window.location.href = "./index.html";
};

const handleUser = () => {
  window.location.href = "./user.html";
};

const handleAdmin = () => {
  const admin = localStorage.getItem("admin");
  if (!admin) {
    window.location.href = "./adminLogin.html";
  } else {
    window.location.href = "./admin.html";
  }
};
