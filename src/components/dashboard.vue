<template>
	<div class="dashboard">
    <Header></Header>
    <el-row type="flex" justify="center">
      <div class="body">
        <el-col :span="5" class="nav">
  		    <side-nav></side-nav>
        </el-col>
        <el-col :span="19" class="content">
          <agent-detail></agent-detail>
        </el-col>
      </div>
    </el-row>
	</div>
</template>

<script>
  import Header from '@/components/header.vue'
  import SideNav from '@/components/side-nav.vue'
  import AgentDetail from '@/components/agent-detail.vue'

  export default {
    name: 'Dashboard',
    components: { Header, SideNav, AgentDetail }
  }
</script>

<style lang="scss" scoped>
  $body-padding-top: 20px;

  .dashboard {
    background-color: #efefef;
  }

  .body {
    width: 1200px;
  }

  .nav {
    padding-top: $body-padding-top;
    min-height: 400px;
    background-color: #2d4054;
  }

	.content {
    padding: 20px 0 20px 40px;
		min-height: 400px;
	}
</style>