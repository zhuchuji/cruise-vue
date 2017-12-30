<template>
  <el-row class="header" type="flex" align="middle">
    <el-col :span="4" :offset="10">
      <img class="logo" src="~@/assets/images/logo.svg"/>
    </el-col>
    <el-col :span="2" :offset="6">
      <img class="user-avatar" src="~@/assets/images/windows.png"/>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  $header-height: 60px;

  .header {
    border-bottom: 0;
    box-shadow: 0 0 8px 0 #ccc;
    height: $header-height;
    background-color: #fff;
  }

  .logo {
    height: $header-height / 2;
  }

  .user-avatar {
    border: 0;
    border-radius: $header-height / 2;
    width: $header-height / 2;
    height: $header-height / 2;
  }
</style>