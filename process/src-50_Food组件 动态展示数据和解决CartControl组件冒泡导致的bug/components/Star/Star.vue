<template>
  <div :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
      const {score} = this
      const scs = []
      // 将n个'on'添加到数组scs里
      const scoreInit = Math.floor(score) // 向下取整 取出全星数量
      for (let i=0 ; i < scoreInit; i++) {
        scs.push(CLASS_ON)
      }
      // 将0/1个'half'添加到数组scs里 只要(总数值-全星数值=小数部分) > 0.5 就说明有半星存在 由于JS小数计算不准确，分别乘以10
      if (score*10 - scoreInit*10 > 5 ) {
        scs.push(CLASS_HALF)
      }
      // 将n个'off'添加到数组scs里 scs最多只有5个元素 经过前面两个判定如果scs的长度还小于0 则说明还有一个暗星存在
      while (scs.length < 5) {
        scs.push(CLASS_OFF)
      }
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
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
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
