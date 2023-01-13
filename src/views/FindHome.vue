
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
              <div class="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
              </div>
             
            </div>
            <!-- photo Gallery -->
            <div class="LightBox-Gallary">
              <h4 class="headingSec">Photos</h4>
              
                  <lightbox css="itemphoto" :items="images" :cells="4"></lightbox>
                
            </div>
            <div class="propertytables table-responsive">
              <table class="table">
                <thead>
                  <th>Agent Information</th>
                  
                </thead>
                <tbody>
                  <tr>
                    <td class="main_color">RE/MAX REALTY ENTERPRISES INC., BROKERAGE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="propertytables table-responsive">
              <table class="table">
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody></tbody>
              </table>
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


<script>
import '@morioh/v-lightbox/dist/lightbox.css';
/* import layout */
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import Vue from 'vue'
import Lightbox from '@morioh/v-lightbox'

// global register
Vue.use(Lightbox);
export default {
  name: "FindHome",
  data() {
    return {
      isActive: false,

      /* gallary  */
      images: [
                    "https://i.wifegeek.com/200426/f9459c52.jpg",
                    "https://i.wifegeek.com/200426/71d3aa60.jpg",
                    "https://i.wifegeek.com/200426/d17ce9a0.jpg",
                    "https://i.wifegeek.com/200426/7c4deca9.jpg",
                    "https://i.wifegeek.com/200426/64672676.jpg",
                    "https://i.wifegeek.com/200426/de6ab9c6.jpg",
                    "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
                    "https://i.wifegeek.com/200426/4085d03b.jpg",
                    "https://i.wifegeek.com/200426/177ef44c.jpg",
                    "https://i.wifegeek.com/200426/d74d9040.jpg",
                    "https://i.wifegeek.com/200426/81e24a47.jpg",
                    "https://i.wifegeek.com/200426/43e2e8bb.jpg"

                ],

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

#app .lb-grid.itemphoto{
    display: flex;
    flex-wrap: wrap;
}
.lb-item{
  position: relative;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
}
.lb-grid-2 .lb-item, .lb-grid-3 .lb-item:first-child, .lb-grid-4 .lb-item:first-child{
  height: 280px;
}
.lb-grid-4 .lb-item:nth-child(2), .lb-grid-4 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(5){
  height: 280px;
}
.lb-grid-4 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4){
  top: 0;
}
.lb-grid-4 .lb-item{
  margin-bottom: 32px;
  margin-right: 11px;
  margin-left: 11px;
  width: calc(52.8% - 32px);
  border:0
  
}
.lb-more{
border-radius: 8px;
}
.lb-grid-4 .lb-item:nth-child(2),.lb-grid-4 .lb-item:nth-child(4){
  margin-right: 0;
}
.lb-grid-4 .lb-item:nth-child(3),.lb-grid-4 .lb-item:nth-child(1){
  margin-left: 0;
}

</style>

<style lang="scss" scoped>

.headingSec{

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #626262;
          
  }
#findhome{
  /* left side (the content) */
  .content{
    padding-top: 70px;
    
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
          color: #292953;
        }
      }
    }
    /* 3d tour & video  */
    .videotour{
      iframe{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }
    .propertytables{
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  margin-bottom: 30px;
}
.propertytables thead{
  background: #f5f5f5;
}
.propertytables th,.propertytables td{
padding: 20px 30px;
border: 0;
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
