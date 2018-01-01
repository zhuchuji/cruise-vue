<template>
  <el-row class="row" type="flex" :gutter="30">
    <el-col :span="8">
      <div class="build">
        <p class="title">Building</p>
        <p class="number">3</p>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="idle">
        <p class="title">Idle</p>
        <p class="number">5</p>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="overview">
        <el-row>
          <el-col :span="8">
            <div class="type">ALL</div>
            <div class="num">8</div>
          </el-col>
          <el-col :span="8">
            <div class="type">PHISICAL</div>
            <div class="num">4</div>
          </el-col>
          <el-col :span="8">
            <div class="type">VIRTUAL</div>
            <div class="num">4</div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Overview'
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";
  
  @mixin status-div ($bg-color, $text-color: #fff) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    height: 100px;
    background-color: $bg-color;
    color: $text-color;
  }

  .build {
    @include status-div(#ff9a2a);
  }

  .idle {
    @include status-div(#7fbc39);
  }

  .overview {
    @include status-div(#fff, #333);
    @include text-align(center);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .number {
    font-size: 48px;
    @include text-align(right);
  }

  .type {
    line-height: 40px;
    font-size: 12px;
  }

  .num {
    line-height: 60px;
    font-size: 28px;
  }
</style>