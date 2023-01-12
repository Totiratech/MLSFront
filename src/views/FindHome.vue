<template>
    <div id="findhome" class="py-3">
      <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="content"></div>
            </div>
            <div class="col-md-4">
                <div class="sidbar sticky-top">
                    <SidbarCard />
                </div>
                
            </div>
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/global/AppHeader.vue";
  import SidbarCard from "@/components/SidbarCard.vue";
  import AppFooter from "@/components/global/AppFooter.vue";
  
  export default {
    name: "FindHome",
    components: {
      AppHeader,
      AppFooter,
      SidbarCard
    },
  };
  </script>
  
  <style lang="scss">
.content{
    height:2000px
}
  </style>
  