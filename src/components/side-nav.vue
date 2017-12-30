<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      background-color="#2d4054"
      text-color="#fff"
      active-text-color="#00b4cf">
      <el-menu-item index="1">
        <i class="menu-icon icon-dashboard"></i>
        <span>DASHBOARD</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="menu-icon icon-sitemap"></i>
        <span>AGENT</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="menu-icon icon-boat"></i>
        <span>MY CRUISE</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="menu-icon icon-life-bouy"></i>
        <span>HELP</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideNav'
  }
</script>

<style lang="scss" scoped>
  .menu-icon {
    margin-right: 10px;
  }
</style>

<style lang="scss">
  .sidebar {
    .el-menu {
      border-right: 0;
    }
    .el-menu-item {
      padding-left: 30px !important;
      padding-right: 30px !important;

      &:hover {
        background-color: #435466 !important;
      }
    }
  }
</style>