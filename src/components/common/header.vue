<template>
  <div class="wrapper">
    <el-row class="header" type="flex" align="middle">
      <el-col :span="4" class="menu">
        <div class="hidden-md-and-up">
          <i class="icon-th-list" @click="collapseNav"></i>
          <el-row class="nav" v-show="isNavShow">
            <el-col :sm="8" :xs="24" class="side-nav">
              <el-row class="close">
                <i class="icon-close" @click="uncollapseNav"></i>
              </el-row>
              <el-row>
                <side-nav></side-nav>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="16" class="logo">
        <img class="logo" src="~@/assets/images/logo.svg"/>
      </el-col>
      <el-col :span="4" class="user">
        <img class="user-avatar" src="~@/assets/images/windows.png"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SideNav from '@/components/common/side-nav.vue'

  export default {
    name: 'Header',
    components: { SideNav },

    data () {
      return {
        isNavShow: false
      }
    },

    methods: {
      collapseNav () {
        console.log('collapse navbar')
        this.isNavShow = true
      },
      uncollapseNav () {
        console.log('uncollapse navbar')
        this.isNavShow = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";

  .wrapper {
    position: fixed;
    z-index: 500;
    border-bottom: 0;
    box-shadow: 0 0 8px 0 #ccc;
    width: 100%;
    height: $header-height;
    background-color: #fff;
  }

  .header {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 20px;
    height: $header-height;

    @include desktop-hd {
      width: 1200px;
    }
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background: rgba(39, 39, 39, 0.8);
  }

  .side-nav {
    background-color: $dark-blue;
  }

  .close {
    padding: 8%;
    text-align: right;

    .icon-close {
      font-size: 1.2em;
      color: #fff;
    }
  }

  .logo {
    display: flex;
    justify-content: center;

    img {
      height: $header-height / 2;
    }
  }

  .user {
    display: flex;
    justify-content: flex-end;
  }

  .user-avatar {
    border: 0;
    border-radius: $header-height / 2;
    width: $header-height / 2;
    height: $header-height / 2;
  }
</style>
