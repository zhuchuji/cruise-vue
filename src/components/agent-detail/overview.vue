<template>
  <el-row class="overview">
    <el-col :span="8" :sm="8" :xs="12">
      <div class="overview__block overview__block--first overview__block--build">
        <p class="overview__title">Building</p>
        <p class="overview__number">3</p>
      </div>
    </el-col>
    <el-col :span="8" :sm="8" :xs="12">
      <div class="overview__block overview__block--idle">
        <p class="overview__title">Idle</p>
        <p class="overview__number">5</p>
      </div>
    </el-col>
    <el-col :span="8" :sm="8" :xs="24">
      <div class="overview__block overview__block--last overview__block--statistic">
        <el-row>
          <el-col :span="8">
            <div class="overview__type">ALL</div>
            <div class="overview__type-num">8</div>
          </el-col>
          <el-col :span="8">
            <div class="overview__type">PHISICAL</div>
            <div class="overview__type-num">4</div>
          </el-col>
          <el-col :span="8">
            <div class="overview__type">VIRTUAL</div>
            <div class="overview__type-num">4</div>
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

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  @mixin overview-block ($bg-color: #fff, $text-color: #fff) {
    background-color: $bg-color;
    color: $text-color;
  }

  .overview {
    display: flex;
    flex-flow: wrap;
    align-content: 10px;
    margin-bottom: $row-margin-bottom;

    &__block {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      margin-left: 4%;
      margin-right: 4%;
      padding: 10px 20px;
      height: 100px;

      &--first {
        margin-left: 0;
      }
      &--last {
        margin-right: 0;
      }

      &--build {
        @include overview-block($bright-orange);
      }

      &--idle {
        @include overview-block($bright-green);
        @include smartphone {
          margin-right: 0;
        }
      }

      &--statistic {
        @include overview-block($text-color: #333);
        @include smartphone {
          margin-left: 0;
          margin-top: $row-margin-bottom;
        }
        text-align: center;
      }
    }

    &__title {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.5em;
    }

    &__number {
      font-size: 3.5rem;
      text-align: right;
    }

    &__type {
      font-size: 1rem;
      line-height: 2.5rem;
    }

    &__type-num {
      font-size: 2.5rem;
      line-height: 4rem;
    }
  }
</style>
