<template>
  <div class="star" :class="'star'+'-'+size">
    <span class="star-item" :class="star" v-for="(star,index) in starArr" :key="index">
    </span>
    <!-- <div v-for="(star,index) in starArr" :key="index" :class="size"> -->
    <!-- <img v-for="(star,index) in starArr" :key="index" :class="'star'+size"
      :src="./images/stars/star{{size}}_{{star}}" alt="星评论"> -->
    <!-- </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
console.log('star------------------')
  export default {
    props:{
      score:Number,
      size:Number
    },
    // data(){
    //   return {
    //     scoreIntegert:0
    //   }
    // },
    computed:{
      starArr(){
        console.log('star------------------')
        const stars = []
        const {score} = this
        const scoreIntegert = Math.floor(score)
        for (let index = 0; index < scoreIntegert; index++) {
          stars.push('on')
        }
        if (scoreIntegert<5) {
          if (score*10-scoreIntegert*10>5) stars.push('half')
        }
        if (stars.length<5) {
          const off = 5-stars.length
          for (let index = 0; index < off; index++) {
            stars.push('off')
          }
        }
        console.log(stars)
        return stars
      }
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  // .star
  //   width 50px
  //   height 50px 
  //   background pink
  @import '../../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')

 
</style>
