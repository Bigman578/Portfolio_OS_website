
function clickLeft() {
  let container = document.querySelector('#card-container');
  container.scrollTo({
      left:container.scrollLeft - 200,
      top: 0,
      behavior: "smooth"
  });
}

function clickRight() {
  let container = document.querySelector('#card-container');
  container.scrollTo({
      left:container.scrollLeft + 200,
      top: 0,
      behavior: "smooth"
  });
}
