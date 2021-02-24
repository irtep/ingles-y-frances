const info1 = document.getElementById('information1');
// js file for Main Menu:

function menuClick(clickedButton){
  let informaatio;

  switch (clickedButton){
    case 'Academia':
      informaatio = `Doy clases de ingles y frances en internet`;
    break;
    case 'Profesora':
informaatio = `Yo soy profesora Irene`;
    break;
    case 'Contactame':
      informaatio = `contactame con email`;
    break;
    case 'Media social':
      informaatio = `Siguenos en facebook!`;
    break;
    default: console.log('menuClick: not found clickedButton', clickedButton);
  }
  info1.innerHTML = informaatio;
}

//  -------- ONLOAD:  ------------
window.onload = ()=> {
  document.getElementById('invis').classList.add("noShow");
  // start texts:
  info1.innerHTML = `hi`;
};
