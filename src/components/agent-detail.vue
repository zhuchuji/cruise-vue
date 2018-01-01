<template>
  <div class="agent-detail">
    <overview></overview>
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
    <el-row class="row agent" v-for="agent in agents" :key="agent.id">
      <el-col :span="3" :lg="3" class="hidden-md-only">
        <div class="system">
          <img :src="agent.system | getImageUrl"/>
        </div>
      </el-col>
      <el-col :span="21" :lg="21" :md="24">
        <el-row class="info">
          <el-col :span="8" :lg="8" :md="9">
            <i class="icon-desktop info-icon"></i>&nbsp;&nbsp;
            <span class="domain">{{ agent.domain }}</span>
          </el-col>
          <el-col :span="4" :lg="4" :md="3">
            <span class="status" :class="statusBgColor(agent.status)">
              {{ agent.status }}
            </span>
          </el-col>
          <el-col :span="5">
            <i class="icon-info  info-icon"></i>&nbsp;&nbsp;
            <span>{{ agent.ip }}</span>
          </el-col>
          <el-col :span="7">
            <span class="path">
              <i class="icon-folder  info-icon"></i>&nbsp;&nbsp;
              <span>{{ agent.path }}</span>
            </span>
          </el-col>
        </el-row>
        <el-row class="resource">
          <el-col :span="20">
            <el-popover
              trigger="manual"
              v-model="agent.isAddResShow">
              <div class="add-popover">
                <i class="icon-close" @click="closeAddResources(agent)"></i>
                <p class="desc">seperate multiple resource name with commas</p>
                <div class="input-resources">
                  <el-input v-model="resources"></el-input>
                </div>
                <el-button class="add-resources" size="small"
                  @click="addResources(agent)">
                  Add Resources
                </el-button>
                <el-button size="small" @click="closeAddResources(agent)">Cancel</el-button>
              </div>
              <span slot="reference" class="add" @click="showAddResources(agent)">
                <i class="icon-plus"></i>
              </span>
            </el-popover>
            <span v-for="(resource, index) in agent.resources" :key="index"
              class="resource-op">
              {{ resource.name }}&nbsp;
              <i class="icon-trash delete" @click="deleteResource(agent, index)"></i>
            </span>
          </el-col>
          <el-col :span="4">
            <span class="deny" v-if="agent.status == 'building'">
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

  export default {
    name: 'AgentDetail',
    components: { Overview },

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
            resources: [{id: '1', name: 'Firefox'}, {id: '2', name: 'Safari'},
              {id: '3', name: 'Ubuntu'}, {id: '4', name: 'Chrome'}],
            isAddResShow: false
          },
          {
            id: '2',
            system: 'windows',
            domain: 'bjstdmngr01.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.105',
            path: '/var/lib/cruise-agent',
            resources: [{id: '1', name: 'Firefox'}, {id: '2', name: 'Safari'},
              {id: '3', name: 'Ubuntu'}, {id: '4', name: 'Chrome'}],
            isAddResShow: false
          },
          {
            id: '3',
            system: 'ubuntu',
            domain: 'bjstdmngr10.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.112',
            path: '/var/lib/cruise-agent',
            resources: [{id: '1', name: 'Firefox'}, {id: '2', name: 'Safari'}],
            isAddResShow: false
          },
          {
            id: '4',
            system: 'debin',
            domain: 'bjstdmngr11.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: [],
            isAddResShow: false
          },
          {
            id: '5',
            system: 'cent_os',
            domain: 'bjstdmngr15.thoughtworks.com',
            status: 'building',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: [{id: '1', name: 'firefox'}, {id: '2', name: 'firefox'}],
            isAddResShow: false
          },
          {
            id: '6',
            system: 'suse',
            domain: 'bjstdmngr20.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            path: '/var/lib/cruise-agent',
            resources: [{id: '1', name: 'Firefox'}, {id: '2', name: 'Safari'},
              {id: '3', name: 'Ubuntu'}, {id: '4', name: 'Chrome'}],
            isAddResShow: false
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
          return 'bg-yellow'
        }
      },

      deleteResource (agent, resourceIndex) {
        agent.resources.splice(resourceIndex, 1)
      },
      showAddResources (agent) {
        this.resources = ''
        agent.isAddResShow = true
      },
      addResources (agent) {
        let resources = this.resources.split(',')
        for (let resource of resources) {
          agent.resources.push({name: resource.trim()})
        }
      },
      closeAddResources (agent) {
        agent.isAddResShow = false
      }
    },

    filters: {
      getImageUrl (systemName) {
        // @error image url will not work after webpack packaging
        if (process.env.NODE_ENV === 'production') {
          return `static/images/${systemName}.png`
        } else {
          return `src/assets/images/${systemName}.png`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";

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

  .agent {
    height: 100px;
    background-color: #fff;

    .system {
      height: 100px;
      line-height: 100px;
      text-align: center;

      img {
        vertical-align: middle;
        height: 80px;
      }
    }

    .info, .resource {
      padding-left: 10px;
      padding-right: 10px;
    }

    .info {
      margin: 20px 0;
      line-height: 20px;
      font-size: 14px;

      & > div {
        display: flex;
        align-items: center;
      }
    }

    .info-icon {
      font-size: 18px;
      color: #ccc;
    }
  }

  .domain {
    font-weight: bold;
    color: #00b4cf;
  }

  .status {
    padding: 0 10px;
    color: #fff;
  }

  .bg-green {
    background-color: #7fbc39;
  }

  .bg-yellow {
    background-color: #ff9a2a;
  }

  .path {
    @include text-ellipsis();
  }

  .resource {
    line-height: 30px;
  }

  .add {
    padding: 2px 8px;
    background-color: #00b4cf;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  .add-popover {
    position: relative;
    line-height: 40px;
    width: 400px;

    .icon-close {
      position: absolute;
      top: -5px;
      right: 10px;
      color: #00b4cf;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    
    .input-resources {
      margin-bottom: 10px;
    }

    .add-resources {
      background-color: #00b4cf;
    }
  }

  .icon-plus {
    vertical-align: middle;
  }

  .resource-op {
    margin: 0 10px;
    padding: 4px 8px;
    background-color: #efefef;
  }

  .delete {
    cursor: pointer;
  }

  .deny {
    padding: 4px 8px;
    background-color: #00b4cf;
    cursor: pointer;
  }

  .icon-deny {
    vertical-align: text-top;
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

    .el-input__inner {
      border-radius: 0;
      background-color: #efefef;
    }
  }

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