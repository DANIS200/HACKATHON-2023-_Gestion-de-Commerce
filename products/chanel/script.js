//selectedIndex

const data = document.querySelector("select");
const prix = [230, 140, 100, 75];
const affichagePrix = document.querySelector(".affichage-prix")
console.log(data);

function price(){
    const index = data.selectedIndex;
    affichagePrix.innerText=`${prix[index]} €`
}
price();
data.addEventListener('change', price)

// apparition au scroll

const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  const handleIntersec = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('apparition-active')
            observer.unobserve(entry.target)
        }
    })
  }
const observer = new IntersectionObserver(handleIntersec, options);

document.querySelectorAll('.img-product').forEach(function(r){
    observer.observe(r)
})

// panier-counter

const bulle = document.getElementById('basket')
const btn = document.querySelector('button')
var nbClic = 0;

btn.addEventListener('click', ()=> {
    bulle.classList.add('panier')
    nbClic++
    bulle.innerHTML = `${nbClic}`
})

// slider

// const btnRight = document.querySelector('.slide-right')
// const btnLeft = document.querySelector('.slide-left')


    

