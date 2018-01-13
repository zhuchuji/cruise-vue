<template>
  <div class="wrapper">
    <el-row class="header" type="flex" align="middle">
      <el-col :span="2" :sm="2" :xs="4" class="menu">
        <div class="hidden-md-and-up">
          <i class="icon-th-list" @click="collapseNav"></i>
          <el-row class="nav" v-show="isNavShow">
            <el-col :sm="8">
              <el-row class="side-nav">
                <i class="icon-close" @click="uncollapseNav"></i>
              </el-row>
              <el-row>
                <side-nav></side-nav>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="20" :sm="20" :xs="16" class="logo">
        <img class="logo" src="~@/assets/images/logo.svg"/>
      </el-col>
      <el-col :span="2" :sm="2" :xs="4" class="user">
        <img class="user-avatar" src="~@/assets/images/windows.png"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SideNav from '@/components/side-nav.vue'

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

  $header-height: 60px;

  .wrapper {
    border-bottom: 0;
    box-shadow: 0 0 8px 0 #ccc;
    height: $header-height;
    background-color: #fff;
  }

  .header {
    margin: 0 auto;
    height: $header-height;
  }

  .header {
    @include desktop-hd {
      width: 1200px;
    }
  }

  .menu {
    display: flex;
    justify-content: center;
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
    padding: 10px 20px;
    background-color: #2d4054;
    text-align: right;

    .icon-close {
      color: #fff;
      cursor: pointer;
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
    justify-content: center;
  }

  .user-avatar {
    border: 0;
    border-radius: $header-height / 2;
    width: $header-height / 2;
    height: $header-height / 2;
  }
</style>
