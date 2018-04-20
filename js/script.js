function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px'
  // document.getElementById('main').style.marginLeft = '270px'
  document.querySelector('.navbar').style.cssText = "display: none;"
}


function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0'
  // document.getElementById('main').style.marginLeft = '0'
  document.querySelector('.navbar').style.cssText = "display: block;";
}


document.querySelector(".btn-open").addEventListener('click', openSlideMenu)

document.querySelector(".btn-close").addEventListener('click', closeSlideMenu)
