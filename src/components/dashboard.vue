<template>
	<div class="dashboard">
    <Header></Header>
    <el-row type="flex" justify="center">
      <div class="body">
        <el-col :span="5" :md="5" :lg="5" class="nav">
  		    <side-nav></side-nav>
          <history></history>
        </el-col>
        <el-col :span="19" :md="19" :lg="19" class="content">
          <agent-detail></agent-detail>
        </el-col>
      </div>
    </el-row>
    <Footer></Footer>
	</div>
</template>

<script>
  import Header from '@/components/header.vue'
  import SideNav from '@/components/side-nav.vue'
  import AgentDetail from '@/components/agent-detail.vue'
  import Footer from '@/components/footer.vue'
  import History from '@/components/history.vue'

  export default {
    name: 'Dashboard',
    components: { Header, SideNav, AgentDetail, Footer, History }
  }
</script>

<style lang="scss" scoped>
  $body-padding-top: 20px;

  .dashboard {
    background-color: #efefef;
  }

  @media (min-width: 1024px) {
    .body {
      width: 1024px;
    }

    .content {
      padding: 20px 10px;
    }
  }

  @media (min-width: 1200px) {
    .body {
      width: 1200px;
    }

    .content {
      padding: 20px;
    }
  }

  .nav {
    padding-top: $body-padding-top;
    min-height: 600px;
    background-color: #2d4054;
  }

	.content {
		min-height: 400px;
	}
</style>