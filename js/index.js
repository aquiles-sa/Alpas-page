const openIconSideBar = document.querySelector("#icon-responsive");
const closeIconSideBar = document.querySelector("#closeSidebarIcon");
const sideBar = document.querySelector(".sidebar-responsive");
const link = document.querySelector(".sidebar-responsive-list-link");

const openSideBar = () => {
  sideBar.style.display = "flex";
};

const closeSideBar = function () {
  sideBar.style.display = "none";
};

openIconSideBar.addEventListener("click", openSideBar);
closeIconSideBar.addEventListener("click", closeSideBar);
