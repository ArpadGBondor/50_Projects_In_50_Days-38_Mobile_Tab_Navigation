const contents = document.querySelectorAll('.content');
const menus = document.querySelectorAll('nav ul li');

menus.forEach((menu, index) => {
  menu.addEventListener('click', () => selectContent(index));
});

function selectContent(index) {
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('show');
    if (i === index) {
      contents[i].classList.add('show');
    }
  }
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove('active');
    if (i === index) {
      menus[i].classList.add('active');
    }
  }
}
