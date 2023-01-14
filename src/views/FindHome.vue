<template>
  <div id="findhome" class="py-3">
    <div class="container">
      <div class="row">
        <!--left side-->
        <div class="col-lg-8 col-md-12">
          <div class="content">
            <!-- propertyDetails -->
            <div class="propertyDetails">
              <h2 class="main_color">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
                Property Details
              </h2>
              <div class="propDes">
                <h4 class="headingSec">Description</h4>
                <p>
                  Welcome To This Beautiful 4 Plus 1 Bed Large Century Home
                  Settled In The Beautiful Town Of Plantagenet. This Home Has A
                  Lot Of Beautiful Original Features That You Will Fall In Love
                  With. Equipped With A Steel Roof, Additional Insulation
                  Surrounds The Home That Was Done Over Time Along With A
                  Beautiful Front Garden Area, And A Separate Detached Garage
                  With Electronic Opener. Come See This Home And See All Of The
                  Potential It Holds! Great View Of The River!
                </p>
              </div>
            </div>
            <!-- 3D Tour or Video -->
            <div class="videotour">
              <h4 class="headingSec">3D Tour or Video</h4>
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <!-- photo Gallery -->
            <div class="LightBox-Gallary">
              <h4 class="headingSec">Photos</h4>
              <lightbox css="itemphoto" :items="images" :cells="4"></lightbox>
            </div>
            <!--Agent Information-->
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
            <!--Property Details-->
            <div class="propertydetails">
              <h4 class="headingSec">Property Details</h4>
            <div class="propertytables table-responsive">
              
              
                <table class="table">
                <thead>
                  <th> Property MLS </th>
                  <th>Property Type</th>
                  <th>Property Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td> X5485218</td>
                    <td>  2-Storey</td>
                    <td>389,000$</td>
                  </tr>
                  <tr class="thead">
                    <th>Parking Type</th>
                    <th colspan="2">Annual Property Taxes</th>
                    
                  </tr>
                  <tr>
                    <td>Detached</td>
                    <td colspan="2">2801.54 $</td>
                    
                  </tr>
                </tbody>
              </table>
              </div>
              
              
            </div>
            <!-- map location -->
            <div class="maplocation">
              <h4 class="headingSec">Location on maps </h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.93352347!2d-61.79051155799839!3d50.85492169779694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1673650676527!5m2!1sar!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!--Building Details-->
            <div class="buildingdeta">
              <h4 class="headingSec">Building Details</h4>
              <div class="propertytables table-responsive">
              
              
              <table class="table">
              <thead>
                <th> Cooling</th>
                <th>Heating </th>
                <th> Bedrooms</th>
                <th>Bathrooms</th>
                <th>Bedrooms Plus</th>
              </thead>
              <tbody>
                <tr>
                  <td>  Wall Unit </td>
                  <td> Water </td>
                  <td> 4 </td>
                  <td> 4 </td>
                  <td> 4 </td>
                </tr>
                
              </tbody>
            </table>
            </div>
            </div>
            <!--Exterior Features-->
            <div class="Exterior">
              <h4 class="headingSec">Exterior Features</h4>
              <div class="propertytables table-responsive">
              
              
              <table class="table">
              <thead>
                <th> Exterior Finish</th>
                <th>Basement </th>
                <th> Secondry Basement</th>
                <th>Sewer</th>
                
              </thead>
              <tbody>
                <tr>
                  <td>  Alum Siding  </td>
                  <td> full </td>
                  <td> Unfinished </td>
                  <td> Sewers </td>
                
                </tr>
                
              </tbody>
            </table>
            </div>
            </div>

            <!--Rooms Details-->
            <div class="Roomsdeta">
              <h4 class="headingSec">Rooms Details</h4>
              <div class="propertytables table-responsive">
              
              
              <table class="table">
              <thead>
                <th> Room </th>
                <th>Dimensions </th>
                <th> Description </th>
              
                
              </thead>
              <tbody>
                <tr>
                  <td class="th">  Kitchen </td>
                  <td> 6.1 m X 3.05 m </td>
                  <td> Laminate </td>
                  
                
                </tr>
                <tr>
                  <td class="th">  Kitchen </td>
                  <td> 6.1 m X 3.05 m </td>
                  <td> Laminate </td>
                  
                
                </tr>
                
              </tbody>
            </table>
            </div>
            </div>
             <!--Amenities & Neighbourhood Features -->
            <div class="neighfeature">
              <h4 class="headingSec">Amenities & Neighbourhood Features </h4>
              <div class="row">
                <div class="col-md-3 feature">
                  <div class="featureicon">
                    <img src="@/assets/images/feature.png" alt="">
                  </div>
                  <h5>Family Room</h5>
                </div>
                <div class="col-md-3 feature">
                  <div class="featureicon">
                    <img src="@/assets/images/feature.png" alt="">
                  </div>
                  <h5>Family Room</h5>
                </div>
                <div class="col-md-3 feature">
                  <div class="featureicon">
                    <img src="@/assets/images/feature.png" alt="">
                  </div>
                  <h5>Family Room</h5>
                </div>
                <div class="col-md-3 feature">
                  <div class="featureicon">
                    <img src="@/assets/images/feature.png" alt="">
                  </div>
                  <h5>Family Room</h5>
                </div>
              </div>
            </div>
            <div class="morethan">
              <h3>More like this</h3>
              <div class="row">
                <div class="col-md-6" v-for="x in 4" :key="x">
                  <HomeDetailCard />
                </div>
              </div>
            </div>   
          </div>
        </div>
        <!--right side (sticky card)-->
        <div class="col-lg-4 col-md-12">
          <div class="sidbar sticky-top">
            <div class="card sidebarcard">
              <img
                src="@/assets/images/sidebarCard.png"
                class="card-img-top"
                alt="house image"
              />
              <div class="card-body pe-0">
                <div
                  class="card-title d-flex justify-content-between align-items-center"
                >
                  <h2 class="eprice main_color">99.000$</h2>
                  <div class="actions">
                    <a
                      href="#"
                      class="makeFav"
                      @click.prevent="addFav()"
                      :class="{ active: isActive }"
                    >
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

                <a href="#" class="btn btn-crimson" data-bs-toggle="modal" data-bs-target="#rent">Add To Rent</a>
              </div>
            </div>
          </div>

          <!--Rent Modal -->
          <div class="modal fade" id="rent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                
                <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/images/operationDone.png" alt="">
                  <p>Your application has been successfully submitted</p>
                  <button type="button" class="btn btn-crimson">Save changes</button>
                </div>
                
                  
                
                
              </div>
            </div>
          </div>
          <!--Error Rent Modal -->
          <div class="modal fade" id="errRent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                  
                  <p>You will not be able to place an offer if you do not complete your basic information</p>
                  <button type="button" class="btn btn-crimson">Complete it now</button>
                </div>
                
                  
                
                
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* import layout */
import AppHeader from "@/components/global/AppHeader.vue";
/* homedetailscard */
import HomeDetailCard from "@/components/HomeDetailCard.vue";

import AppFooter from "@/components/global/AppFooter.vue";
import Vue from "vue";
/* lightbox  */
import "@morioh/v-lightbox/dist/lightbox.css";
import Lightbox from "@morioh/v-lightbox";
// global register
Vue.use(Lightbox);

export default {
  name: "FindHome",
  data() {
    return {
      isActive: false,

      /* gallary  */
      images: [
        require("../assets/images/contact-bg.png"),
        require("../assets/images/dev-home.png"),
        require("../assets/images/listings-2.png"),
        require("../assets/images/home.png"),
        require("../assets/images/listings-1.png"),
        require("../assets/images/listings-3.png"),
        require("../assets/images/listings-4.png"),
        require("../assets/images/staticHome.png"),
        require("../assets/images/contact-bg.png"),
        require("../assets/images/dev-home.png"),
        require("../assets/images/user.jpg"),
        require("../assets/images/sms.png"),
      ],
    };
  },
  components: {
    AppHeader,
    HomeDetailCard,
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

<style lang="scss" scoped>
 .headingSec {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #626262;
  margin-bottom: 24px;
}
.fa-remove:before, .fa-close:before, .fa-times:before{
content:"/f00d"
}
#findhome {
  /* left side (the content) */
  .content {
    padding-top: 70px;

    /* property details section */
    .propertyDetails {
      margin-bottom: 60px;
      h2 {
        margin-bottom: 60px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        text-transform: capitalize;
        path {
          fill: transparent;
          stroke: #b5121b;
          stroke-width: 20px;
        }
      }
      .propDes {
        p {
          font-family: "Inter";
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
    .videotour {
      iframe {
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        );
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }
    /* tables */
    .propertytables{
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  margin-bottom: 60px;
}
.propertytables .table{
  margin-bottom: 0;
}
.propertytables thead,.propertytables .thead{
  background: #f5f5f5;
}
.propertytables th,.propertytables td{
padding: 20px 30px;
border: 0;
}
.Roomsdeta .propertytables td{
  color: #A1A1A5;
}


.propertytables td,.Roomsdeta .propertytables .th{

color: #B5121B;
}
.propertytables thead th,.propertytables td,.propertytables th,.propertytables .th{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: capitalize;
}
.propertytables thead th{
color: #000000;
}

/* features */
.neighfeature{
   .feature{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .featureicon{
      width: 112px;
      height: 112px;
      background: #FFFFFF;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
      padding: 24px;
      border-radius: 50%;
      margin-bottom: 24px;
    }
    h5{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
      color: #A1A1A5;
    }
}
    
    .morethan{
      margin-top: 200px;
      margin-bottom: 50px;
      h3{
        font-family: 'Literata';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 30px;
        text-transform: capitalize;
        margin-bottom: 80px;
color: #000000;
      }
      .card{
        margin-bottom: 50px;
        
      }
      .card-img, .card-img-top,.card{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
    .maplocation,.videotour,.LightBox-Gallary{
      margin-bottom: 64px;
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
        
        width: 306px;
        height: 48px;
        
      }
    }

  
    
  }
  .btn-crimson {
        background: #b5121b;
        border-radius: 4px;
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
      .modal-body p{
      margin: 30px auto;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
      color: #000000;
      width:300px;
      overflow-wrap: break-word
    }
      .modal-body .btn-crimson {
      width:250px;
      height:64px;
      margin: 0 auto ;
      margin-bottom: 50px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
    }
    #errRent p{
      width: 400px
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
@media (max-width:767px){
  #findhome .sidebarcard,#findhome .sidebarcard img{
    width: 100%;
  }
  
}
</style>
