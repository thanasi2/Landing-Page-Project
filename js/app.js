// scroll to anchor id
function scroll(evt){
  var scroll = document.getElementById('section'+ evt.target.id);
  scroll.scrollIntoView({behavior: "smooth"});
}

// determines if section is in viewport and hightlights corresponding menu item
function inView(){
  var sections = document.querySelectorAll('section');
  for (var x = 0; x< sections.length; x++){
    var sec = sections[x].id;
    var el = document.getElementById(sec);
    var pos = el.getBoundingClientRect();
    if (pos.top > -150 && pos.top < window.innerHeight - pos.top){
        var liCol = document.querySelectorAll('li');
        liCol[x].classList = 'active_li';
      }else{
        var liCol = document.querySelectorAll('li');
        liCol[x].classList.remove('active_li');
      }
    }
}

// builds nav
function buildNav(){
  var section = document.querySelectorAll('section');
  var x = 1;
  for (sec of section){
    var nav = document.getElementById('navbar__list');
    var li = document.createElement('li');
    li.textContent = sec.dataset.nav;
    li.id = x;
    x++
    nav.appendChild(li);
    li.addEventListener('click', scroll)
  }
}

buildNav();

// adds event listener for scroll runs inView function
document.addEventListener('scroll', inView);
