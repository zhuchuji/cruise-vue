<template>
	<el-row class="row toolbar">
    <el-col :span="8">
      <el-menu class="menu" default-active="1" mode="horizontal">
        <el-menu-item index="1">All</el-menu-item>
        <el-menu-item index="2">Physical</el-menu-item>
        <el-menu-item index="3">Virtual</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="5" :offset="1">
      <el-input
        size="mini"
        prefix-icon="el-icon-search">
      </el-input>
    </el-col>
    <el-col class="view" :span="10">
      <i class="icon-th-card"></i>
      <i class="icon-th-list"></i>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/global.scss";

	.toolbar {
    display: flex;
    align-items: center;
    height: $toolbar-height;
    background-color: #fff;
  }
  .menu {
    height: $toolbar-height;
    @include text-align(center)

    li {
      width: 33.333333%;
    }
  }

  .view {
    padding: 0 20px;
    @include text-align(right);
  }
</style>

<style lang="scss">
	.toolbar {
	  .el-menu-item {
	    height: 50px;
	    line-height: 50px;
	  }

	  .el-menu-item.is-active {
	    color: #409EFF;
	  }

	  .el-input__inner {
	    border-radius: 0;
	    background-color: #efefef;
	  }
	}
</style>