<template>
  <div class="agent-list">
    <overview></overview>
    <toolbar></toolbar>
    <el-row class="agent" v-for="(agent, index) in agents" :key="agent.id">
      <el-col :span="3" :lg="3" class="hidden-md-and-down">
        <div class="agent__system">
          <img class="agent__system-img" :src="agent.system | getImageUrl"/>
        </div>
      </el-col>
      <el-col :span="21" :lg="21" :sm="24" :xs="24">
        <el-row class="agent__info">
          <el-col :span="8" :lg="8" :md="9" :sm="9" :xs="24">
            <i class="icon-desktop agent__info-icon"></i>
            <span class="agent__domain">{{ agent.domain }}</span>
          </el-col>
          <el-col :span="4" :lg="4" :md="3" :sm="3" class="hidden-xs-only">
            <span class="agent__status" :class="statusBgColor(agent.status)">
              {{ agent.status }}
            </span>
          </el-col>
          <el-col :span="5" :sm="5" :xs="24">
            <i class="icon-info  agent__info-icon"></i>
            <span>{{ agent.ip }}</span>
          </el-col>
          <el-col :span="7" :sm="7" :xs="24">
            <span class="agent__path">
              <i class="icon-folder  agent__info-icon"></i>
              <span>{{ agent.path }}</span>
            </span>
          </el-col>
        </el-row>
        <el-row class="agent__resources">
          <el-col :span="20" :sm="20" :xs="24">
            <resources
              :resources="agent.resources">
            </resources>
          </el-col>
          <el-col :span="4" :sm="4" :xs="24" class="agent__deny-box">
            <span class="agent__deny" v-if="agent.status == 'building'">
              <i class="icon-deny"></i>
              deny
            </span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Overview from '@/components/agent-detail/overview.vue'
  import Toolbar from '@/components/agent-detail/toolbar.vue'
  import Resources from '@/components/agent-detail/resources.vue'

  const windowsImg = require('@/assets/images/windows.png')
  const ubuntuImg = require('@/assets/images/ubuntu.png')
  const centosImg = require('@/assets/images/cent_os.png')
  const debinImg = require('@/assets/images/debin.png')
  const suseImg = require('@/assets/images/suse.png')

  export default {
    name: 'AgentList',
    components: { Overview, Toolbar, Resources },

    data () {
      return {
        agents: [
          {
            id: '1',
            system: 'windows',
            domain: 'bjstdmngr08.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent/test/practice/game/user/home',
            resources: [{name: 'Firefox'}, {name: 'Safari'},
              {name: 'Ubuntu'}, {name: 'Chrome'}]
          },
          {
            id: '2',
            system: 'windows',
            domain: 'bjstdmngr01.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.105',
            path: '/var/lib/cruise-agent',
            resources: [{name: 'Firefox'}, {name: 'Safari'},
              {name: 'Ubuntu'}, {name: 'Chrome'}]
          },
          {
            id: '3',
            system: 'ubuntu',
            domain: 'bjstdmngr10.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.112',
            path: '/var/lib/cruise-agent',
            resources: [{name: 'Firefox'}, {name: 'Safari'}]
          },
          {
            id: '4',
            system: 'debin',
            domain: 'bjstdmngr11.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: []
          },
          {
            id: '5',
            system: 'cent_os',
            domain: 'bjstdmngr15.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: [{name: 'firefox'}, {name: 'firefox'}]
          },
          {
            id: '6',
            system: 'suse',
            domain: 'bjstdmngr20.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: [{name: 'Firefox'}, {name: 'Safari'},
              {name: 'Ubuntu'}, {name: 'Chrome'}]
          }
        ],
        isAddResShow: false,
        resources: ''
      }
    },

    methods: {
      statusBgColor (status) {
        if (status === 'idle') {
          return 'bg-green'
        } else if (status === 'building') {
          return 'bg-orange'
        }
      }
    },

    filters: {
      getImageUrl (systemName) {
        switch (systemName) {
          case 'windows':
            return windowsImg
          case 'ubuntu':
            return ubuntuImg
          case 'cent_os':
            return centosImg
          case 'debin':
            return debinImg
          case 'suse':
            return suseImg
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .agent {
    margin-bottom: $row-margin-bottom;
    background-color: #fff;

    &__system {
      height: 100px;
      line-height: 100px;
      text-align: center;
    }

    &__system-img {
      vertical-align: middle;
      height: 80px;
    }

    &__info {
      display: flex;
      flex-flow: wrap;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 2em;
      font-size: 14px;
    }

    // hack to fit into one line in Safari
    &__info.el-row {
      display: block;
    }

    &__info-icon {
      margin-right: 8px;
      font-size: 18px;
      color: #ccc;
      vertical-align: text-top;
    }

    &__domain {
      font-weight: bold;
      color: #00b4cf;
    }

    &__status {
      padding: 0 10px;
      color: #fff;
      vertical-align: text-bottom;
    }

    &__path {
      @include text-ellipsis();
    }

    &__resources {
      display: flex;
      flex-flow: wrap;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 30px;
    }

    // hack to fit into one line in Safari 10.0.3
    &__resources.el-row:before {
      display: block;
    }

    &__deny-box {
      text-align: right;
    }

    &__deny {
      display: inline-block;
      padding: 0 8px;
      background-color: #00b4cf;
      cursor: pointer;

      .icon-deny {
        vertical-align: middle;
      }
    }
  }

  .bg-orange {
    background-color: $bright-orange;
  }

  .bg-green {
    background-color: $bright-green;
  }
</style>

<style lang="scss">
  .add-popover {
    .el-input__inner {
      border-radius: 0;
      color: #00b4cf;
    }

    .el-button--mini, .el-button--small {
      border-radius: 0;
    }
  }
</style>
