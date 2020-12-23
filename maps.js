var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYr-rPqdhSl4nvATxVyuelSZ8yYfrj1Ps&callback=initMap&libraries=&v=weekly";
script.defer = true;

let map;

function initMap() {
  const myLatLng = { lat: -33.88163, lng: 151.21859 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 17,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Poppy Planet",
    zoomControl: false,
  });
}

document.head.appendChild(script);


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
