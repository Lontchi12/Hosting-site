// Creating the hero tabs functionality
let tabs = document.getElementsByClassName("tabs");
tabs = Array.from(tabs);
let contentReset = (parent) => {
  //function to hide all the contents
  let contents = parent.getElementsByClassName("hero-content-2");
  contents = Array.from(contents);
  contents.forEach(content => {
    content.style.display = 'none';
  });
};
let showContent = (target, content) => {
  //function to show specific targeted content
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  contentReset(content.parentElement); //call the reset function to hide all the contents
  target.classList.add("active");
  content.classList.add("fade-in");
  content.style.display = "block";
};
// show specific content on click
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const content = document.getElementById(e.target.getAttribute("data-to"));
    showContent(e.target, content);
  });
});