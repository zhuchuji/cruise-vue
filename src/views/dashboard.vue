<template>
	<div class="dashboard">
    <Header></Header>
    <el-row type="flex" justify="center">
      <div class="body">
        <el-col :span="5" :md="5" :lg="5" class="hidden-sm-and-down">
  		    <side-nav></side-nav>
        </el-col>
        <el-col :span="19" :xs="24" :md="19" class="content">
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

  export default {
    name: 'Dashboard',
    components: { Header, SideNav, AgentDetail, Footer }
  }
</script>

<style lang="scss" scoped>
  $body-padding-top: 20px;

  .dashboard {
    background-color: #efefef;
  }

  @media (max-width: 1024px) {
    .body {
      width: 100%;
    }
    .content {
      padding: 20px 10px;
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 20px 1%;
    }
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

	.content {
		min-height: 400px;
	}
</style>
