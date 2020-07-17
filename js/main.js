// FOR THE NAVIGATION LIBRARY (https://github.com/oncebot/pushbar.js)
const pushbar = new Pushbar({
  blur: true,
  overlay: true,
});

//open a pushbar 
pushbar.open('mypushbar1');
//close all pushbars
pushbar.close();


// FOR THE PARALAX LIBRARY (https://cssanimation.rocks/parallax/)
var rellax = new Rellax('.rellax');


// FOR THE BACKGROUND WAVE FX 
const bodyContent = document.querySelector('main');

document.addEventListener("scroll",
  function () {
    var scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom = (document.documentElement["scrollHeight"] ||
      document.body["scrollHeight"]) - document.documentElement.clientHeight;

    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    bodyContent.style.setProperty("background-position-x", scrollPercent);
  }, { passive: true }
);


// FOR THE TOOLL TIPS
const toolTips = document.querySelectorAll('.tooltip-icon');

toolTips.forEach(tip => {
  tip.setAttribute('onmousedown', 'toggleToolTip(this)')
  tip.setAttribute('onmouseup', 'toggleToolTip(this)');
});



function toggleToolTip(tip) {
  document.querySelector(`#${tip.getAttribute('aria-controls')}`).classList.toggle('visible');
}


// FOR THE LOAD MORE TEXT FX
const loadMoreTextTriggers = document.querySelectorAll('.load-more-text > .trigger');

loadMoreTextTriggers.forEach(trigger => {
  trigger.setAttribute('onclick', 'loadMoreText(this, this.parentElement)')
});


function loadMoreText (trigger, container) {
  const activeP = container.querySelector('.active');
  const nextP = activeP.nextElementSibling;
  
  if(nextP.nodeName === 'P') {
    activeP.classList.remove('active');
    nextP.classList.add('active');
  }
  else{
    trigger.innerHTML = '<p><a href="#" >[Read more]</a></p>'
  }
}