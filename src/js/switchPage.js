
window.addEventListener("resize", remainOnWindow);

function remainOnWindow() {
  location.assign(`${location.href}`);
  console.log(location.href)
}


// remainOnWindow() 