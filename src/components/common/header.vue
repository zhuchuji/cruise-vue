<template>
  <div class="header__container">
    <el-row class="header" type="flex" align="middle">
      <el-col :span="4">
        <div class="hidden-md-and-up">
          <i class="icon-th-list" @click="collapseNav"></i>
          <el-row class="header__nav" v-show="isNavShow">
            <el-col :sm="8" :xs="24">
              <el-row class="header__nav-close">
                <i class="icon-close" @click="uncollapseNav"></i>
              </el-row>
              <el-row>
                <side-nav></side-nav>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="16" class="header__logo">
        <img class="header__logo-img" src="~@/assets/images/logo.svg"/>
      </el-col>
      <el-col :span="4" class="header__user">
        <img class="header__user-img" src="~@/assets/images/windows.png"/>
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
        this.isNavShow = true
      },
      uncollapseNav () {
        this.isNavShow = false
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .header {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 20px;
    height: $header-height;
    @include desktop-hd {
      width: $desktop-hd;
    }

    &__container {
      @include container();
      position: fixed;
      z-index: 500;
      border-bottom: 0;
      box-shadow: 0 0 8px 0 #ccc;
      height: $header-height;
      background-color: #fff;
    }

    &__nav {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      background-color: rgba(39, 39, 39, 0.8);
    }

    &__nav-close {
      background-color: $dark-blue;
      padding: 8%;
      text-align: right;
      font-size: 1.2em;
      color: #fff;
    }

    &__logo {
      display: flex;
      justify-content: center;
    }

    &__logo-img {
      height: $header-height / 2;
    }

    &__user {
      display: flex;
      justify-content: flex-end;
    }

    &__user-img {
      border: 0;
      border-radius: $header-height / 2;
      width: $header-height / 2;
      height: $header-height / 2;
    }
  }
</style>
