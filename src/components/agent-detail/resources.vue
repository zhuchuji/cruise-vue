<template>
  <el-row class="resources">
    <el-col :sm="2" :xs="3">
      <el-popover
        class="hidden-sm-and-down"
        trigger="manual"
        v-model="agent.isAddResShow">
        <resources-add-form
          :agent="agent"
          @add="addResources"
          @close="closeAddRes">
        </resources-add-form>
        <span slot="reference" class="resources__add-icon"
          @click="showAddResources(agent)">
          <i class="icon-plus"></i>
        </span>
      </el-popover>
      <span class="hidden-md-and-up resources__add-icon"
        @click="showAddResDlg(agent)">
        <i class="icon-plus"></i>
      </span>
      <div class="resources__add-container" v-show="agent.isAddResDlgShow">
        <div class="resources__add-dlg">
          <resources-add-form
            :agent="agent"
            @add="addResources"
            @close="closeAddResDlg">
          </resources-add-form>
        </div>
      </div>
    </el-col>
    <el-col :sm="22" :xs="21">
      <span v-for="(resource, index) in agent.resources" :key="index"
        class="resources__item">
        {{ resource.name }}
        <i class="icon-trash" @click="deleteResource(agent, index)"></i>
      </span>
    </el-col>
  </el-row>
</template>

<script>
  /*
   * @component Resources
   * @prop {Object} agent - The agent resources belong to
   */

  import ResourcesAddForm from '@/components/agent-detail/resources-add-form.vue'

  export default {
    name: 'Resources',

    components: { ResourcesAddForm },

    props: {
      agent: {
        type: Object,
        validator: (agent) => {
          return agent.hasOwnProperty('resources') &&
            agent.resources instanceof Array
        }
      }
    },

    methods: {
      deleteResource (agent, resourceIndex) {
        agent.resources.splice(resourceIndex, 1)
      },
      showAddResources (agent) {
        agent.isAddResShow = true
      },
      addResources (agent, resArray) {
        for (let resource of resArray) {
          agent.resources.push({name: resource})
        }
        agent.isAddResShow = false
        agent.isAddResDlgShow = false
      },
      closeAddRes (agent) {
        agent.isAddResShow = false
      },

      showAddResDlg (agent) {
        agent.isAddResDlgShow = true
      },
      closeAddResDlg (agent) {
        agent.isAddResDlgShow = false
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .resources {

    &__add-icon {
      display: inline-block;
      padding: 0 8px;
      background-color: #00b4cf;
      font-size: 1.3rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;

      .icon-plus {
        vertical-align: middle;
      }
    }

    &__item {
      display: inline-block;
      margin: 0 10px 10px 10px;
      padding: 0 8px;
      background-color: #efefef;

      .icon-trash {
        cursor: pointer;
      }
    }

    &__add-container {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      @include mask-bg-color();
    }

    &__add-dlg {
      padding: 10px 20px;
      background-color: #fff;

      @include smartphone-only {
        width: 100%;
      }
    }
  }
</style>
