// lazy load img
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  //replace src with data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(e){
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.4,
});

imgTargets.forEach(function (img) {
  return imgObserver.observe(img);
});


//show section on scroll

const allSection = document.querySelectorAll('.section')
const revealSection = function(entries, obsever){
 const [entry] = entries
 if(entry.isIntersecting){
   entry.target.classList.remove('section--hidden')
 }
}



const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSection.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden');

})