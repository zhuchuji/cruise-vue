<template>
  <div class="toolbar">
    <el-row class="hidden-sm-and-up toolbar__search">
      <el-col :xs="24" class="hide-sm-and-up">
        <el-input
          size="mini"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
    </el-row>
  	<el-row class="toolbar__tool">
      <el-col :span="8" :sm="8" :xs="24">
        <el-menu class="toolbar__tabs" default-active="1" mode="horizontal">
          <el-menu-item class="toolbar__tab-item" index="1">All</el-menu-item>
          <el-menu-item class="toolbar__tab-item" index="2">Physical</el-menu-item>
          <el-menu-item class="toolbar__tab-item" index="3">Virtual</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" :offset="1" class="hidden-xs-only">
        <el-input
          size="mini"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col class="hidden-sm-and-down toolbar__view-type" :span="10">
        <i class="icon-th-card"></i>
        <i class="icon-th-list"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="scss">
	@import "~@/assets/styles/vars-mixins.scss";

  // hack to make content display in one line in Safari 10.0.3
  // do not know why yet
  .toolbar__tool.el-row:before {
    display: block;
  }

  .toolbar {
    &__search, &__tool {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      margin: 20px 0;
      height: $toolbar-height;
      background-color: #fff;
    }

    &__search {
      padding: 0 20px;
    }

    &__tabs {
      height: $toolbar-height;
      text-align: center;
    }

    &__tab-item {
      width: 1 / 3 * 100%;
      height: $toolbar-height !important;
      line-height: $toolbar-height !important;
    }
    &__tab-item.is-active {
      color: $light-blue !important;
      border-bottom-color: $light-blue !important;
    }

    &__view-type {
      padding: 0 20px;
      text-align: right;
    }
  }
</style>

<style lang="scss">
	.toolbar {

	  .el-input__inner {
	    border-radius: 0;
	    background-color: #efefef;
	  }
	}
</style>
