<template>
  <div class="sidenav">
    <el-menu
      default-active="2"
      background-color="#2d4054"
      text-color="#fff"
      active-text-color="#00b4cf">
      <el-menu-item index="1">
        <i class="icon-dashboard sidenav__icon"></i>
        <span>DASHBOARD</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="icon-sitemap sidenav__icon"></i>
        <span>AGENT</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="icon-boat sidenav__icon"></i>
        <span>MY CRUISE</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="icon-life-bouy sidenav__icon"></i>
        <span>HELP</span>
      </el-menu-item>
    </el-menu>
    <div class="sidenav__history">
      <h3>History</h3>
      <ul class="sidenav__list">
        <li v-for="record in history" class="sidenav__list-item">
          <span class="sidenav__item-desc">{{ record.machine }}/{{ record.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideNav',

    data () {
      return {
        history: [
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_testaaaaaaaaaaaaaaaaa'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .sidenav {
    padding-top: 20px;
    min-height: 600px;
    background-color: $dark-blue;

    &__icon {
      margin-right: 4%;
      font-size: 1.2rem;
    }

    &__history {
      padding: 5%;

      h3 {
        color: #ccc;
        font-size: 1.5rem;
        font-weight: normal;
      }
    }

    &__list {
      list-style: none;
      padding-left: 0;
      color: #999;
      font-size: 0.8rem;
      line-height: 1.8rem;
    }

    &__list-item {
      @include text-ellipsis();

      &:before {
        content: "•";
      }

      &:hover {
        cursor: pointer;
        color: $light-blue;
      }
    }

    &__item-desc {
      margin-left: 8%;
    }
  }
</style>

<style lang="scss">
  // override Element default style
  .sidenav {
    .el-menu {
      border-right: 0;
    }
    .el-menu-item {
      padding-left: 10% !important;
      padding-right: 10% !important;

      &:hover {
        background-color: #435466 !important;
      }
    }
  }
</style>
