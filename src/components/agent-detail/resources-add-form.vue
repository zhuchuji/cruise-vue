<template>
  <div class="res-add-form">
    <p class="res-add-form__close">
      <i class="icon-close" @click="close()"></i>
    </p>
    <p>seperate multiple resource name with commas</p>
    <div class="res-add-form__input">
      <el-input v-model="resources"></el-input>
    </div>
    <el-button class="res-add-form__confirm" size="small"
      @click="add()">
      Add Resources
    </el-button>
    <el-button size="small" @click="close()">Cancel</el-button>
  </div>
</template>

<script>
  /*
   * @component ResourcesAddForm
   * @event add - Add resources
   * @event close - Close the form
   */

  export default {
    name: 'ResourcesAddForm',

    data () {
      return {
        resources: ''
      }
    },

    methods: {
      add () {
        let resArray = this.resources.split(',').filter((resource) => {
          return resource !== ''
        })
        for (let resource of resArray) {
          resource = resource.trim()
        }
        this.$emit('add', resArray)
      },
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  .res-add-form {
    position: relative;
    @include tablet-and-up {
      width: 400px;
    }
    @include smartphone-only {
      width: 100%;
    }

    &__close {
      text-align: right;

      .icon-close {
        color: #00b4cf;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }

    }

    &__input {
      margin-bottom: 10px;
    }

    &__confirm {
      background-color: #00b4cf;
    }

  }
</style>
