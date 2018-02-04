<template>
  <div class="resources">
    <div class="resources__add">
      <el-popover
        class="hidden-sm-and-down"
        trigger="manual"
        v-model="isAddResShow">
        <resources-add-form
          @add="addRes"
          @close="hideAddRes">
        </resources-add-form>
        <span slot="reference" class="resources__add-icon"
          @click="showAddRes()">
          <i class="icon-plus"></i>
        </span>
      </el-popover>
      <div class="resources__add-container" v-show="isAddResDlgShow">
        <div class="resources__add-dlg">
          <resources-add-form
            @add="addRes"
            @close="hideAddResDlg">
          </resources-add-form>
        </div>
      </div>
      <span class="hidden-md-and-up resources__add-icon"
        @click="showAddResDlg()">
        <i class="icon-plus"></i>
      </span>
    </div>
    <div class="resources__list">
      <span v-for="(resource, index) in resources" :key="index"
        class="resources__item">
        {{ resource.name }}
        <i class="icon-trash" @click="deleteResource(index)"></i>
      </span>
    </div>
  </div>
</template>

<script>
  /*
   * @component Resources
   * @prop {Array} resources
   */

  import ResourcesAddForm from '@/components/agent-detail/resources-add-form.vue'

  export default {
    name: 'Resources',

    components: { ResourcesAddForm },

    props: {
      resources: {
        type: Array,
        validator: (resources) => {
          let isValid = true
          for (let resource of resources) {
            if (!resource.hasOwnProperty('name')) {
              isValid = false
              break
            }
          }
          return isValid
        }
      }
    },

    data () {
      return {
        isAddResShow: false,
        isAddResDlgShow: false
      }
    },

    methods: {
      deleteResource (resourceIndex) {
        if (resourceIndex < this.resources.length) {
          this.resources.splice(resourceIndex, 1)
        }
      },
      showAddRes () {
        this.isAddResShow = true
      },
      addRes (resArray) {
        for (let resource of resArray) {
          this.resources.push({name: resource})
        }
        this.isAddResShow = false
        this.isAddResDlgShow = false
      },
      hideAddRes () {
        this.isAddResShow = false
      },

      showAddResDlg () {
        this.isAddResDlgShow = true
      },
      hideAddResDlg () {
        this.isAddResDlgShow = false
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .resources {
    display: flex;

    &__add {

    }

    &__list {

    }

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
