var sectionList = ["home", "skills", "exp", "recommendations"];
function scrollToNext() {
    // TODO SCROLLING
  var currentSection = window.location.hash.split("#")[1] | "home";
  window.location.hash = '#cs';
}
