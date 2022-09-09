const dropdownArrows = document.querySelector(".dropdown-arrow");
const featuresDropdown = document.getElementById("features");
const features = document.querySelector(".feature-dropdown-menu");
const companyDropdown = document.getElementById("company");
const company = document.querySelector(".company-dropdown-menu");

const handleDropdown = (event) => {
  const setDisplay =
    event.type === "mouseover" ? "display:unset;" : "display:none;";

  event.target.id == "features"
    ? features.setAttribute("style", setDisplay)
    : company.setAttribute("style", setDisplay);
};

featuresDropdown.addEventListener("mouseover", handleDropdown);
featuresDropdown.addEventListener("mouseleave", handleDropdown);
companyDropdown.addEventListener("mouseover", handleDropdown);
companyDropdown.addEventListener("mouseleave", handleDropdown);
