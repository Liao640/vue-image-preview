<template>
  <div class="image_wall_wraper">
    <div class="sigle_show_box">
      <p>单张图片展示</p>
      <img :src="images1[0]" @click="handleClick1()" alt="海边沙滩图">
      <imagePreview :visible.sync="visible1" :images="images1"></imagePreview>
    </div>
    <div class="multi_show_box">
      <p>多张图片展示</p>
      <div class="img_list">
        <div class="img_item" v-for="img in images2" :key="img">
          <img :src="img" @click="handleClick2(img)" alt="海边沙滩图">  
        </div> 
      </div>
      <imagePreview :visible.sync="visible2" :images="images2" :defaultImage="defaultImage"></imagePreview>
    </div>
   
  </div>

</template>
<script>
import imagePreview from "@/components/imagePreview"
//导出home组件模块
export default {
  name: 'demo',
  data() {
    return {
      images1:['/static/img/demo/preview_img1.png'],
      images2: [
        '/static/img/demo/preview_img3.png',
        '/static/img/demo/preview_img2.png',
        '/static/img/demo/preview_img4.png',
        ],
      defaultImage: '',
      visible1: false,
      visible2: false,
    }
  },
  computed: {
    // ...mapState(['refreshFlag', 'callStatus', 'systemMsg', 'updateSysMsg']),
  },
  components: {
    imagePreview
  },
  watch: {
    
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    handleClick1() {
      this.visible1 = true
    },
    handleClick2(image) {
      this.visible2 = true
      this.defaultImage = image
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.image_wall_wraper{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  text-align: left;
  img {
    max-width: 100%;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  .multi_show_box {
    .img_list {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: space-between;
      .img_item {
        width: calc(100%/3);
        height: 600px;
        margin: 0 10px;
        text-align: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

}
</style>
