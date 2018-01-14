<template>
	<div class="dashboard">
    <Header></Header>
    <el-row type="flex" justify="center">
      <div class="body">
        <el-col :span="5" class="hidden-sm-and-down">
  		    <side-nav></side-nav>
        </el-col>
        <el-col xs="24" :md="19" class="content">
          <agent-detail></agent-detail>
        </el-col>
      </div>
    </el-row>
    <Footer></Footer>
	</div>
</template>

<script>
  import Header from '@/components/common/header.vue'
  import SideNav from '@/components/common/side-nav.vue'
  import AgentDetail from '@/components/agent-detail/agent-detail.vue'
  import Footer from '@/components/common/footer.vue'

  export default {
    name: 'Dashboard',
    components: { Header, SideNav, AgentDetail, Footer }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";

  $body-padding-top: 20px;

  .dashboard {
    background-color: #efefef;
  }

  .body {
    margin-top: $header-height;
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
