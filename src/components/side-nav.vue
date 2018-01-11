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
    <div class="history">
      <h3>History</h3>
      <ul class="history-list">
        <li v-for="record in history">
          <span class="desc">{{ record.machine }}/{{ record.name }}</span>
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

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";

  .sidebar {
    padding-top: 20px;
    min-height: 600px;
    background-color: #2d4054;
    text-align: left;
  }

  .menu-icon {
    margin-right: 10px;
  }

  .history {
    padding: 15px;

    h3 {
      color: #ccc;
      font-size: 24px;
      font-weight: normal;
    }

    .history-list {
      list-style: none;
      padding-left: 0;
      color: #999;
      font-size: 12px;
      line-height: 20px;

      li {
        @include text-ellipsis();
      }

      li:before {
        content: "•";
      }

      li:hover {
        cursor: pointer;
        color: #00b4cf;
      }

      .desc {
        margin-left: 20px;
      }
    }
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