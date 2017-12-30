<template>
  <div class="agent-detail">
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
          size="small"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col class="view" :span="10">
        <i class="icon-th-card"></i>
        <i class="icon-th-list"></i>
      </el-col>
    </el-row>
    <el-row class="row" v-for="agent in agents" :key="agent.id">
      <el-col :span="4">
        <img :src="agent.system | getImageUrl"/>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="12">
            <i class="icon-desktop"></i>
            <span>{{ agent.domain }}</span>
          </el-col>
          <el-col :span="2">
            <span>{{ agent.status }}</span>
          </el-col>
          <el-col :span="10">
            <i class="icon-info"></i>
            <span>{{ agent.ip }}</span>
            <i class="icon-folder"></i>
            <span>{{ agent.path }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <i class="icon-plus"></i>
            <span>firefox<i class="icon-trash"></i></span>
            <span>firefox<i class="icon-trash"></i></span>
            <span>firefox<i class="icon-trash"></i></span>
          </el-col>
          <el-col :span="4">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'AgentDetail',

    data () {
      return {
        agents: [
          {
            id: '1',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          },
          {
            id: '2',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          },
          {
            id: '3',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          },
          {
            id: '4',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          },
          {
            id: '5',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          },
          {
            id: '6',
            system: 'windows',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent'
          }
        ]
      }
    },

    filters: {
      getImageUrl (systemName) {
        return `src/assets/images/${systemName}.png`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixins.scss";
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

  .row {
    margin-bottom: 20px;
  }

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
  .agent-detail {
    .el-menu-item {
      height: 50px;
      line-height: 50px;
    }

    .el-menu-item.is-active {
      color: #409EFF;
    }
  }
</style>