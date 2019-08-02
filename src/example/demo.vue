<template>
  <div class="image_wall_wraper">
    <!-- 预览单张图片 -->
    <div class="sigle_show_box">
      <p>预览单张图片</p>
      <img :src="images1[0]" @click="handleClick1()" alt="海边沙滩图">
      <vue-image-preview :visible.sync="visible1" :images="images1"></vue-image-preview>
    </div>
    <!-- 预览多张图片 -->
    <div class="multi_show_box">
      <p>预览多张图片</p>
      <div class="img_list">
        <div class="img_item" v-for="img in images2" :key="img">
          <img :src="img" @click="handleClick2(img)" alt="海边沙滩图">  
        </div> 
      </div>
      <vue-image-preview :visible.sync="visible2" :images="images2" :defaultImage="defaultImage"></vue-image-preview>
    </div>
    <!-- 配置预览尺寸：600px*400px -->
    <div class="sigle_show_box">
      <p>配置预览尺寸：600px*400px</p>
       <img :src="images3[0]" @click="handleClick3()" alt="海边沙滩图">
      <vue-image-preview :visible.sync="visible3" :images="images3" width="600px" height="400px"></vue-image-preview>
    </div>
    <!-- 配置操作按钮键：600px*400px -->
    <div class="sigle_show_box">
      <p>配置预览尺寸：600px*400px</p>
       <img :src="images4[0]" @click="handleClick4()" alt="海边沙滩图">
      <vue-image-preview :visible.sync="visible4" :images="images4" width="600px" height="400px" layout="rotate"></vue-image-preview>
    </div>
  </div>

</template>
<script>
import vueImagePreview from "@/components/imagePreview"
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
      images3: [
        '/static/img/demo/preview_img7.png',
      ],
      images4: [
        '/static/img/demo/preview_img8.png',
      ],
      defaultImage: '',
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    }
  },
  computed: {
    // ...mapState(['refreshFlag', 'callStatus', 'systemMsg', 'updateSysMsg']),
  },
  components: {
    vueImagePreview
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
    },
    handleClick3() {
      this.visible3 = true
    },
    handleClick4() {
      this.visible4 = true
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
  .sigle_show_box {
     img {
       width: 100%;
       height: 600px;
     }
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
