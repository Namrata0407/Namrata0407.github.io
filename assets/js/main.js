/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById( toggleId ),
      nav = document.getElementById( navId );
  
    if ( toggle && nav ) {
      toggle.addEventListener( "click", () => {
        nav.classList.toggle( "show" );
      } );
    }
  };
  showMenu( "nav-toggle", "nav-menu" );
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll( ".nav-link" );
  const sections = document.querySelectorAll( ".section" );
  
  window.addEventListener( "scroll", () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if ( scrollY >= sectionTop - 390 ) {
        current = section.getAttribute( 'id' );
      }
    } )
  
    navLinks.forEach( link => {
      link.classList.remove( 'active' );
      if ( link.classList.contains( current ) ) {
        link.classList.add( 'active' );
      }
    } )
  } )
  
  // function linkAction() {
  //   /*Active link*/
  //   navLinks.forEach((n) => n.classList.remove("active"));
  //   this.classList.add("active");
  
  //   /*Remove menu mobile*/
  const navMenu = document.getElementById( "nav-menu" );
  //   navMenu.classList.remove("show");
  // }
  navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );
  
  /*===== COPY Email =====*/
  const copy = document.getElementById( "copy" );
  copy.addEventListener( "click", () => {
    navigator.clipboard.writeText( "namrataawasthi077@gmail.com" );
    copy.innerHTML = "copied";
    setTimeout( () => {
      copy.innerHTML = null;
    }, 1000 );
  } );
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal( {
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  } );
  
  /*SCROLL HOME*/
  sr.reveal( ".home-title", {} );
  sr.reveal( ".button", { delay: 100 } );
  sr.reveal( ".home-img", { delay: 200 } );
  sr.reveal( ".home-social-icon", { interval: 100 } );
  
  /*SCROLL ABOUT*/
  sr.reveal( ".about-img", {} );
  sr.reveal( ".about-subtitle", { delay: 200 } );
  sr.reveal( ".about-text", { delay: 200 } );
  
  /*SCROLL SKILLS*/
  sr.reveal( ".skills-subtitle", {} );
  sr.reveal( ".skills-text", {} );
  sr.reveal( ".skills-data", { interval: 100 } );
  // sr.reveal(".skills-img", { delay: 600 });
  
  /*SCROLL projects*/
  sr.reveal( ".project-img", { interval: 100 } );
  
  /*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });

/*===== APP SLIDER =====*/
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.app-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  // Auto slide function
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Dot click function
  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = slideIndex;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);

  /*SCROLL APP SHOWCASE*/
  sr.reveal(".app-description", { origin: 'left' });
  sr.reveal(".phone-mockup", { origin: 'right', delay: 200 });
});
  