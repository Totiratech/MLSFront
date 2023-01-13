<template>
  <div id="findhome" class="py-3">
    <div class="container">
      <div class="row">
        <!--left side-->
        <div class="col-md-8">
          <div class="content">
            <!-- propertyDetails -->
            <div class="propertyDetails">
              <h2 class="main_color">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
                Property Details</h2>
                <div class="propDes">
                  <h4 class="headingSec">Description</h4>
                  <p>Welcome To This Beautiful 4 Plus 1 Bed Large Century Home Settled In The Beautiful Town Of Plantagenet. This Home Has A Lot Of Beautiful Original Features That You Will Fall In Love With. Equipped With A Steel Roof, Additional Insulation Surrounds The Home That Was Done Over Time Along With A Beautiful Front Garden Area, And A Separate Detached Garage With Electronic Opener. Come See This Home And See All Of The Potential It Holds! Great View Of The River!</p>
                </div>

            </div>
            <!-- 3D Tour or Video -->
            <div class="videotour">
              <h4 class="headingSec">3D Tour or Video </h4>
              <video-embed css="embed-responsive-16by9" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
            </div>
          </div>
        </div>
        <!--right side (sticky card)-->
        <div class="col-md-4">
          <div class="sidbar sticky-top">
            <div class="card sidebarcard">
              <img
                src="@/assets/images/sidebarCard.png"
                class="card-img-top"
                alt="house image" />
              <div class="card-body pe-0">
                <div
                  class="card-title d-flex justify-content-between align-items-center">
                  <h2 class="eprice main_color">99.000$</h2>
                  <div class="actions">
                    <a
                      href="#"
                      class="makeFav"
                      @click.prevent="addFav()"
                      :class="{ active: isActive }">
                      <font-awesome-icon icon="fa-solid fa-heart" />
                    </a>

                    <span>Rent</span>
                  </div>
                </div>
                <div class="location d-flex">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <p class="card-text elocation">
                    128 Fawn ST Nation, Ontario, K0a 2M0
                  </p>
                </div>

                <a href="#" class="btn btn-crimson">Add To Rent</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://unpkg.com/v-video-embed/dist/video-embed.min.js" type="text/javascript"></script>

<script>
/* import layout */
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "FindHome",
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },

  methods: {
    /* make fav item */
    addFav(e) {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
#findhome{
  /* left side (the content) */
  .content{
    padding-top: 70px;
    .headingSec{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          text-transform: capitalize;
          color: #626262;
          
        }
    /* property details section */
    .propertyDetails{
      margin-bottom: 60px;
      h2 {
        margin-bottom: 60px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        text-transform: capitalize;
        path{
          fill: transparent;
          stroke: #b5121b;
          stroke-width: 20px;
        }
      }
      .propDes{
        
        p{  
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: capitalize;
          overflow-wrap: break-word;
          color: #A1A1A5;
        }
      }
    }
    /* 3d tour & video  */
    .videotour{
      
    }

  }




  /* right side (sticky card) */
.sidebarcard {
  width: 356px;
  height: 650px !important;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  
  img {
    width: 356px;
    height: 400px;
  }
  .card-body {
    padding: 30px 20px;
    .makeFav {
    color: transparent;
    svg {
      stroke: #b5121b;
      stroke-width: 25px;
      fill: transparent;
      height: 22px;
    }
    &.active {
      color: #b5121b;
    }
  }
    .eprice {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 38px;
      line-height: 46px;
    }
    .actions {
    span {
      background: rgba(181, 18, 27, 0.5);
      border-radius: 3px 0px 0px 3px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 19.0722px;
      line-height: 23px;
      padding: 3px 27px;
      color: #ffffff;
      margin-left: 15px;
    }
  }
  .location {
    padding-right: 20px;
    margin: 30px 0;
    .card-text {
      overflow-wrap: break-word;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #000;
      text-align: left;
    }
    svg {
      margin-right: 12px;
      margin-top: 4px;
      path {
        fill: transparent;
        stroke: #000;
        stroke-width: 20px;
      }
    }
  }

  .btn-crimson {
    background: #b5121b;
    border-radius: 4px;
    width: 306px;
    height: 48px;
    padding: 12px 0;
    margin-right: 20px;
    color: #fff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
  }
  }

}

}

/* media */
@media (min-width: 1410px) {
  .sidebarcard {
    width: 416px;

    img {
      width: 416px;
    }
  }
}
</style>
