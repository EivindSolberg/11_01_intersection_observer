// Intersection Observer er et alternativ Event listner onScroll 
// sier bare i fra når innholdet går inn og ut av viewport

// kobler opp class fra html'en til JavaScript'en
const sectionOne = document.querySelector(".section01");

const sections = document.querySelectorAll("section");

const options = {
    root: null, //standard innstilling - referer til viewport
    threshold:0.2, // Hvor stor andel av elementet som må være synlig 1=100% 0.2=20%
    rootMargin:"-250px" //styrer hvor stort synsfeltet til intersectio observer er
};

const observer = new IntersectionObserver(function(entries, observer){
   entries.forEach(entry => {
       //! er det samme som ikke (not)
       if(!entry.isIntersecting){
        return;
       }  
       console.log(entry.target);
       entry.target.classList.add("fargebytte");
   });

}, options);

sections.forEach(section => {
    observer.observe(section);
});

