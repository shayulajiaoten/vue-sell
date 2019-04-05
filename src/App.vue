<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
    <div class="tab border-1px">
      <div class="tab-item" :class="{'tab-item-show':goodshow}" @click="goodsshow">商品</div>
      <div class="tab-item" :class="{'tab-item-show':ratingshow}" @click="ratingsshow">评论</div>
      <div class="tab-item" :class="{'tab-item-show':sellershow}" @click="sellersshow">商家</div>
    </div>
    <Goods v-show="goodshow"></Goods>
    <ratings v-show="ratingshow"></ratings>
    <seller v-show="sellershow"></seller>
  </div>
</template>

<script type="text-ecmascript-6">
  import VHeader from './components/v-header/v-header';
  import seller from './components/seller/seller';
  import ratings from './components/ratings/ratings';
  import Goods from './components/goods/goods';
  import { getSeller } from 'api';

  export default {
    name: 'app',
    data() {
      return {
        seller: {},
        ratingshow: false,
        goodshow: true,
        sellershow: false
      };
    },
    methods: {
      goodsshow() {
        this.goodshow = true;
        this.ratingshow = false;
        this.sellershow = false;
      },
      ratingsshow() {
        this.ratingshow = true;
        this.goodshow = false;
        this.sellershow = false;
      },
      sellersshow() {
        this.ratingshow = false;
        this.goodshow = false;
        this.sellershow = true;
      }
    },
    created() {
      getSeller().then((seller) => {
        this.seller = seller;
      });
    },
    components: {
      VHeader,
      Goods,
      ratings,
      seller
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        display: block
        flex: 1
        text-align: center
        &.tab-item-show
          color: rgb(240, 20, 20)
</style>
