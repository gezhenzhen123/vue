<template>
  <div>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components:{
      FooterGuide
    },
    mounted(){
      this.$store.dispatch('getaddress')
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>

 
</style>

