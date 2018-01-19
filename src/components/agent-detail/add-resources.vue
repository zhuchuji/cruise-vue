<template>
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
</template>

<script>
  export default {
    name: 'AddResources'
  }
</script>

<style lang="scss" scoped>
</style>
