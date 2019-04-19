<template>
  <div class="le-swiper">
    <div class="le-swiper-box" :style="{transform: `translateX(-${current}00%)`}">
      <div v-for="(item,index) in leSwiperList" :key="index" :class="`le-swiper-item${index+1} `" class="le-swiper-item">
        <div></div>
      </div>
    </div>
    <div class="le-swiper-current">
      <span class="le-swiper-current-item" v-for="(itemCircle,indexCircle) in leSwiperList" :key="indexCircle"></span>
    </div>
  </div>
</template>

<script>
import { clearTimeout } from 'timers';
export default {
  name: 'leSwiper',
  props: {
    leSwiperList: {
      type: Array,
      default: function () {
        return []
      } 
    }
  },
  data() {
    return {
      timer: null,
      current: 0
    }
  },
  created() {
    this.aa(1);
    if (!this.leSwiperList.length) {
      for(let i = 0; i < 3; i++) {
        this.leSwiperList.push(i)
      }
    }
  },
  methods: {
    aa (i) {
      this.timer = setTimeout(() => {
        this.current ++
        if(this.current == this.leSwiperList.length) {
          this.current = 0
        }
        this.aa(++i)
      }, 1000);
    }
  },
}
</script>

<style scoped>
  .le-swiper {
    position: relative;
    width: 100%;
    height: 120px;
    overflow: hidden;
  }
  .le-swiper-box {
    display: flex;
    transition: all .8s;
    width: 100%;
    height: 100%;
  }
  .le-swiper-item {
    flex: 1;
    position: relative;
    display: inline-block;
    min-width: 100%;
    height: 100%;
  }
  .le-swiper-item1 {
    background: pink;
  }
  .le-swiper-item2 {
    background: red;
  }
  .le-swiper-item3 {
    background: blue;
  }
  .le-swiper-current {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .le-swiper-current-item {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e5e5e5
  }
  .le-swiper-current-item + .le-swiper-current-item {
    margin-left: 5px;
  }
  .active {
    transform: translateX(-100%);
  }
</style>