<template>
  <div class="about-slider" ref="slider">
    <section class="panel first-panel about-header">
      <h1 class="hero-h">ABOUT<br />CRIMSON<br />ROSE</h1>
      <div class="t-line"></div>
    </section>

    <section class="panel about-meet">
      <div class="row">
        <div class="col-12 col-lg-4 about-butterfly-section">
          <div class="row">
            <p class="col-12">
              Crimson Rose is more than an online Rental/Leasing platform.We're
              here to simplify your life. Our mission is to find a great place
              to live intuitively and without stress. We deliver you the fastest
              experience in the industry of online rentals to move renters
              seamlessly through their journey.
            </p>
            <p class="col-12">
              Crimson Rose saves both the time and money of property
              renters/buyers.We focus on finding your home through a complete
              100% online booking system. You don't need in-person viewings,
              Anymore! Our virtual tours and detailed descriptions of homes and
              neighbouring districts will assist you in making your decision.
              Don’t forget to check our terms and policies before you book!
            </p>
          </div>

          <img
            src="@/assets/images/about/Group 1171275338.png"
            alt="crimson butterfly logo"
          />
        </div>
        <div class="col-lg-6 col-12 meet">
          <div class="meet-img">
            <img src="@/assets/images/about/about.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="panel">
      <div class="container">
        <div class="row project-management">
          <h2>Why Choose Us ?</h2>
          <p>
            We offer an easy online Rental/Leasing experiment to enhance your
            experience of spending time on what you really would like to.
          </p>
          <div class="about-grid">
            <div class="grid-txt view">
              <h3>View, Check & Decide</h3>
              <p>
                We help you check the properties and identify them online as
                found in reality. Photos, videos, and accurate detailed
                descriptions of the properties are delivered truthfully to
                enable you to make safe decisions.
              </p>
            </div>
            <div class="grid-txt secure">
              <h3>Secure Personal Information</h3>
              <p>
                Nobody will be able to access your social security number.
                Crimson Rose doesn't store or provide access to your social
                security number. We encrypt all of your sensitive information.
              </p>
            </div>
            <div class="grid-img1"></div>
            <div class="grid-img2"></div>

            <div class="grid-txt flexible">
              <h3>Our Services Are Flexible</h3>
              <p>
                We can provide personalized services according to your needs.
                Crimson Rose is the name of your guide in your journey to
                rent/buy your dream home. Make your experiment inspired to do
                your best day in and day out.
              </p>
            </div>
            <div class="grid-txt trust">
              <h3>You Can Trust Us</h3>
              <p>
                Keeping in line with our mission to free your life from the
                properties' troubles, each one. We work with all of our hearts
                and souls to gain your trust. Innovation is also a trademark for
                us, as we are the first to introduce properties that match your
                proper budget with innovative designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="panel partners">
      <h2>Our Partners</h2>
      <div class="container">
        <div class="row">
          <div class="partners-imgs col-lg-5 col-12">
            <h2>Our Partners</h2>
            <img
              src="@/assets/images/about/partner.png"
              alt=""
              class="partner col-12 col-lg-6"
            />
            <img
              src="@/assets/images/about/partner.png"
              alt=""
              class="partner col-12 col-lg-6"
            />
            <img
              src="@/assets/images/about/partner.png"
              alt=""
              class="partner col-12 col-lg-6"
            />
            <img
              src="@/assets/images/about/partner.png"
              alt=""
              class="partner col-12 col-lg-6"
            />
            <img
              src="@/assets/images/about/partner.png"
              alt=""
              class="partner col-12 col-lg-6"
            />
          </div>
          <div class="meet-img col-lg-7">
            <h2>Meet Our Agents</h2>
            <div class="imgg">
              <img
                src="@/assets/images/about/390-sandhurst-069-uai-405x720 2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="panel agents">
      <h2>Meet Our Agents</h2>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
      <div class="member agent">
        <img src="@/assets/images/about/jacob.jpg" alt="" />
        <h5>Jacob Sharawi</h5>
        <p>President</p>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted: function () {
    // const timeline = new TimelineLite()
    this.aboutAnimation();
  },
  methods: {
    aboutAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      let mm = gsap.matchMedia();
      let aboutSections = gsap.utils.toArray(".panel");
      mm.add("(min-width: 992px)", () => {
        gsap.to(aboutSections, {
          xPercent: -100 * (aboutSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".about-slider",
            pin: true,
            scrub: 1,
            snap: 1 / (aboutSections.length - 1),
            end: () =>
              "+=" + document.querySelector(".about-slider").offsetWidth,
          },
        });

        // const childSplit = new SplitText(".hero-h", {
        //   type: "lines",
        //   linesClass: "split-child"
        // });
        // const parentSplit = new SplitText(".hero-h", {
        //   // type: "lines",
        //   linesClass: "split-parent"
        // });

        // const pChildSplit = new SplitText(".hero-p", {
        //   type: "lines",
        //   linesClass: "split-child"
        // });
        // const pParentSplit = new SplitText(".hero-p", {
        //   // type: "lines",
        //   linesClass: "split-parent"
        // });

        // gsap.timeline()
        // .from(childSplit.lines, {
        //   duration: 1.5,
        //   yPercent: 100,
        //   ease: "power4",
        //   //onComplete:allDone
        // }).from(pChildSplit.lines, {
        //   duration: 1,
        //   yPercent: 100,
        //   ease: "power4",
        //   stagger: 0.2,
        //   //onComplete:allDone
        // },'-=0.5');

        gsap.from(".t-line", {
          scaleX: 0,
          transformOrigin: "left",
          duration: 2,
          delay: 1,
        });

        gsap.from(".about-butterfly-section>img", {
          y: "100vh",
          scrollTrigger: {
            trigger: ".about-butterfly-section>img",
          },
        });
      });

      // gsap.from('.about-butterfly-section>p',{
      // x: '100vw',
      // scrollTrigger: {
      //     trigger: ".about-butterfly-section>p",
      // }
      // });
      //project managment animation
      // gsap.from('.pro-txt',{
      // x: '-100vw',
      // scrollTrigger: {
      //     trigger: ".pro-txt",
      // }
      // })
      // gsap.from('.project-management img',{
      // x: '100vw',
      // scrollTrigger: {
      //     trigger: ".project-management img",
      // }
      // })

      // //Design animation
      // gsap.from('.design .section-txt',{
      // x: '-100vw',
      // scrollTrigger: {
      //     trigger: ".project-management .section-txt",
      // }
      // })
      // gsap.from('.design img',{
      // y: '100vh',
      // scrollTrigger: {
      //     trigger: ".design img",
      // }
      // })

      // gsap.from('.innovation .section-txt',{
      // x: '50vw',
      // delay: 0.65,
      // scrollTrigger: {
      //     trigger: ".design img",
      // }
      // })

      // gsap.from('.innovation img',{
      // x: '-100vw',
      // scrollTrigger: {
      //     trigger: ".innovation img",
      //     start: 'center top'
      // }
      // })

      // gsap.from('.resources .section-txt',{
      // x: '50vw',
      // delay: 0.65,
      // scrollTrigger: {
      //     trigger: ".innovation img",
      // }
      // })
    },
  },
};
</script>

<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  /* overflow-scrolling: touch; */
}
body {
  overflow-y: visible;
  background-color: #000;
  font-family: "PT Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
html,
body {
  overflow-x: hidden;
  margin: 0;
}
img {
  max-width: 100%;
}

.panel {
  width: 100vw;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(212, 5, 5);
  outline: none;
  padding: 0 1rem;
}

.first-panel {
  flex-direction: column;
  gap: 50px;
}

.first-panel h1 {
  /* font-family: 'Literata'; */
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #000000;
  text-align: center;
}

.first-panel p {
  /* font-family: 'Lato'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  text-transform: capitalize;
  color: #000000;
  max-width: 750px;
}

.split-parent {
  overflow: hidden;
}
.split-child {
  display: inline-block;
}

.butterfly-txt {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
}

.butterfly-txt p {
  max-width: 550px;
  order: 2;
}

.butterfly-txt img {
  max-width: 100%;
  order: 1;
}

.slide-2 + .panel {
  padding-top: 50vh;
}

.meet {
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.meet-img {
  display: none;
  align-items: flex-end;
}

.meet img {
  max-width: 100%;
}

.meet .l-txt {
  margin: auto;
  font-size: 1.8rem;
  color: #c8c8c8;
  z-index: 2;
}

.members {
  height: auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  max-width: 280px;
}

.member img {
  width: 200px;
  border-radius: 20px;
}

.member h3 {
  /* font-family: 'Lato'; */
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.6rem;
  text-transform: capitalize;
  color: #b5121b;
}

.member p {
  /* font-family: 'Lato'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #c8c8c8;
}

.members-mob {
  height: auto;
  margin-top: 350px;
}

.panel:last-of-type {
  margin-top: -50px;
}
/* 
.member:nth-child(even){
    align-self: flex-end;
}

.member:nth-child(odd){
    align-self: flex-start;
} */

/* .members2{
    margin-left: -40%;
}


.members2 .member:nth-child(even){
    align-self: flex-start;
}

.members2 .member:nth-child(odd){
    align-self: flex-end;
}

.members3{
    margin-left: -50%;
}
 */

@media (min-width: 992px) {
  .slider-container {
    width: 500%;
    max-height: 100vh;
    display: flex;
    flex-wrap: nowrap;
  }

  .panel {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    outline: none;
  }

  .first-panel {
    flex-direction: column;
    gap: 50px;
  }

  .first-panel h1 {
    /* font-family: 'Literata'; */
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 6vw;
    line-height: 107px;
    color: #000000;
  }

  .first-panel p {
    /* font-family: 'Lato'; */
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;
    color: #c8c8c8;
    max-width: 750px;
  }

  .split-parent {
    overflow: hidden;
  }
  .split-child {
    display: inline-block;
  }

  .butterfly-txt {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: -10%;
    text-align: left;
  }

  .butterfly-txt p {
    order: 1;
    max-width: 550px;
  }

  .butterfly-txt img {
    order: 2;
    max-width: 100%;
  }
  .slide-2 + .panel {
    padding-top: 0;
  }

  .meet {
    padding-top: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .meet-img {
    display: flex;
    align-items: flex-end;
  }

  .meet img {
    max-width: 100%;
  }

  .meet .l-txt {
    margin: 0;
    font-size: 60px;
    color: #c8c8c8;
    z-index: 2;
  }

  .members {
    height: 80vh;
    margin: 10vh 0;
    display: flex;
    flex-direction: row;
    margin-left: -20%;
    gap: 0;
  }

  .member {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    max-width: 280px;
  }

  .member img {
    border-radius: 20px;
  }

  .member h3 {
    /* font-family: 'Lato'; */
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: capitalize;
    color: #b5121b;
  }

  .member p {
    /* font-family: 'Lato'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c8c8c8;
  }

  .member:nth-child(even) {
    align-self: flex-end;
  }

  .member:nth-child(odd) {
    align-self: flex-start;
  }

  .members2 {
    margin-left: -20%;
  }

  .members2 .member:nth-child(even) {
    align-self: flex-start;
  }

  .members2 .member:nth-child(odd) {
    align-self: flex-end;
  }

  .members3 {
    margin-left: -50%;
  }

  .members-mob {
    height: 100vh;
    margin-top: 0px;
  }

  .panel:last-of-type {
    margin-top: 0px;
  }
}

/*****About******/

.about-slide > .panel {
  height: 150vh;
  display: flex;
  flex-wrap: nowrap;
}

.about-header {
  position: relative;
  height: 100vh;
}

.about-header h1 {
  font-family: "Literata";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: #b5121b;
}

/* .about-header .t-line{
    width: 70vw;
    height: 2px;
    background-color: #FFFFFF;
    position: absolute;
    top: 34%;
    right: -38vw;
} */

.about-butterfly-section {
  position: relative;
}

.about-butterfly-section p {
  font-size: 1rem;
  line-height: 1.3rem;
  color: #000000;
  text-align: left;
  max-width: 600px;
  margin: auto;
}

.about-butterfly-section p:last-of-type {
  margin-top: 30px;
}

.about-butterfly-section img {
  display: none;
  position: absolute;
  right: -112px;
  top: 189px;
}

.project-management {
  gap: 30px;
  justify-content: space-between;
}

.about-slider .panel .row .section-txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 2rem 0;
  max-width: 600px;
  margin: auto;
}

.about-slider .panel .row .section-txt h2 {
  /* font-family: 'Lato'; */
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
}

.about-slider .panel .row .section-txt p {
  /* font-family: 'Lato'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #c8c8c8;
}

.partner {
  max-width: 200px;
}

.partners-imgs h2 {
  display: none;
}

.project-management > h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #b5121b;
  text-transform: capitalize;
}

.project-management > p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 15px;
  width: 500px;
  color: #000000;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 150px 150px 150px 150px 150px;
  gap: 10px;
}

.about-grid .view {
  grid-column: 1/2;
  grid-row: 1/2;
}

.about-grid .secure {
  grid-column: 1/2;
  grid-row: 2/3;
}

.about-grid .grid-img1 {
  grid-column: 2/3;
  grid-row: 1/3;
  background-image: url(@/assets/images/about/11.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}

.about-grid .grid-img1 img,
.about-grid .grid-img2 img {
  max-height: 100%;
}

.about-grid .grid-img1 .img-mob {
  display: block;
}

.about-grid .grid-img1 .img-lg {
  display: none;
}
.about-grid .grid-img2 {
  grid-column: 1/3;
  grid-row: 3/4;
  background-image: url(@/assets/images/about/22.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}

.about-grid .flexible {
  grid-column: 1/3;
  grid-row: 4/5;
}

.about-grid .trust {
  grid-column: 1/3;
  grid-row: 5/6;
}

.about-grid .grid-txt {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
}

.about-grid .grid-txt h3 {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #626262;
}

.about-grid .grid-txt p {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #626262;
}

.about-meet .meet-img {
  display: block;
  margin: auto;
}

.agents {
  height: 250vh;
}

.agent {
  margin: 2rem 0 1rem;
  max-width: 150px;
  gap: 5px;
}

.partners .meet-img {
  display: none;
}

.project-management img,
.design img {
  max-width: 600px;
  margin: auto;
}

.innovation img {
  margin: auto;
}

.why {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.why-img {
  display: flex;
  align-items: flex-end;
  margin: auto;
}

.why .l-txt {
  font-size: 2.6rem;
  color: #c8c8c8;
  font-weight: 700;
  z-index: 2;
  text-align: center;
}

.why-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

/* .why-flex p{
    width: 300px;
} */

.two-sec {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.two-sec {
  text-align: center;
}

.why-flex div,
.two-sec div:last-of-type {
  width: 400px;
}

@media (min-width: 992px) {
  .about-slider {
    width: 500%;
    max-height: 100vh;
    display: flex;
    flex-wrap: nowrap;
  }

  .about-header {
    position: relative;
  }

  .about-header h1 {
    font-family: "Literata";
    font-style: normal;
    font-weight: 400;
    font-size: 10rem;
    line-height: 10rem;
    text-transform: capitalize;
    color: #b5121b;
  }

  .about-header .t-line {
    width: 75vw;
    height: 2px;
    background-color: #b5121b;
    position: absolute;
    top: 38%;
    right: -43vw;
  }

  .about-butterfly-section {
    position: relative;
  }

  .about-butterfly-section p {
    margin-top: -5%;
    padding-bottom: 10px;
    margin: 0;
    font-size: 1rem;
    line-height: 1rem;
  }

  .about-butterfly-section img {
    display: block;
    position: absolute;
    right: -112px;
    top: 189px;
  }

  .project-management > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #b5121b;
    text-transform: capitalize;
  }

  .project-management > p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 15px;
    width: 500px;
    color: #000000;
  }

  .about-slider .panel .row .section-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    max-width: auto;
  }

  .about-slider .panel .row .section-txt h2 {
    /* font-family: 'Lato'; */
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: capitalize;
  }

  .about-slider .panel .row .section-txt p {
    /* font-family: 'Lato'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c8c8c8;
  }

  .partners {
    flex-direction: column;
  }

  .partners > h2 {
    color: #b5121b;
    align-self: flex-start;
    padding-left: 5rem;
  }

  .project-management .project-imgs {
    width: 50%;
    display: flex;
    flex-direction: column;
    /* grid-template-areas: 
    '. bed bed'
    'st bed bed'
    'st st .'
    ; */
  }

  .agents {
    flex-direction: column;
    justify-content: space-around;
  }

  .agents-flex {
    display: flex;
    flex-wrap: wrap;
  }

  .why {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .why-img {
    display: flex;
    align-items: flex-end;
  }

  .why .l-txt {
    font-size: 2.6rem;
    color: #c8c8c8;
    font-weight: 700;
    z-index: 2;
  }

  .why-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 50vh;
  }

  /* .why-flex p{
    width: 300px;
} */

  .two-sec {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .two-sec {
    text-align: center;
    padding: 0 1rem;
  }

  .why-flex div,
  .two-sec div:last-of-type {
    width: 400px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 150px 100px 150px;
    gap: 10px;
  }

  .about-grid .view {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  .about-grid .secure {
    grid-column: 4/6;
    grid-row: 1/2;
  }

  .about-grid .grid-img1 {
    grid-column: 2/4;
    grid-row: 1/2;
  }

  .about-grid .grid-img1 img,
  .about-grid .grid-img2 img {
    max-height: 100%;
  }

  .about-grid .grid-img1 .img-mob {
    display: block;
  }

  .about-grid .grid-img1 .img-lg {
    display: none;
  }
  .about-grid .grid-img2 {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .about-grid .flexible {
    grid-column: 2/4;
    grid-row: 2/4;
  }

  .about-grid .trust {
    grid-column: 4/5;
    grid-row: 2/4;
  }

  .about-grid .grid-txt {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 10px;
  }

  .about-grid .grid-txt h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #626262;
  }

  .about-grid .grid-txt p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #626262;
  }

  .about-meet .meet-img {
    display: block;
    margin: auto;
  }

  .agents {
    flex-direction: row;
    padding: 10vh 0;
  }

  .agents > h2,
  .partners > h2 {
    display: none;
  }

  .partners-imgs {
    align-self: center;
  }

  .partners-imgs h2 {
    display: block;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: capitalize;
    color: #b5121b;
  }

  .partners .meet-img {
    display: flex;
    flex-direction: column;
  }

  .partners .meet-img h2 {
    font-size: 5rem;
    font-family: "Literata";
    font-style: normal;
    font-weight: 700;
    font-size: 74px;
    line-height: 110px;
    /* identical to box height */
    align-self: center;
    text-transform: capitalize;
  }

  .partners .meet-img .imgg {
    display: flex;
    justify-content: center;
  }

  .partners .meet-img .imgg h2 {
    transform: rotate(270deg);
    width: 100%;
    height: 100%;
  }

  .agent h5 {
    color: #b5121b;
  }

  .agent {
    margin: 0;
    max-width: 150px;
  }

  .agent:nth-child(2) {
    align-self: flex-start;
  }
  .agent:nth-child(even) {
    align-self: flex-end;
  }
}
</style>
