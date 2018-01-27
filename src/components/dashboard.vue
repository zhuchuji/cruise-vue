<template>
	<div class="dashboard">
    <Header></Header>
    <el-row type="flex" justify="center">
      <div class="dashboard__body">
        <el-col :span="5" class="hidden-sm-and-down">
  		    <side-nav></side-nav>
        </el-col>
        <el-col :span="24" :md="19" class="dashboard__content">
          <agent-list></agent-list>
        </el-col>
      </div>
    </el-row>
    <Footer></Footer>
	</div>
</template>

<script>
  import Header from '@/components/common/header.vue'
  import SideNav from '@/components/common/side-nav.vue'
  import AgentList from '@/components/agent-detail/agent-list.vue'
  import Footer from '@/components/common/footer.vue'

  export default {
    name: 'Dashboard',
    components: { Header, SideNav, AgentList, Footer }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/vars-mixins.scss";

  $body-padding-top: 20px;

  .dashboard {
    background-color: #efefef;

    &__body {
      margin-top: $header-height;

      @include desktop-hd {
        @include container($desktop-hd)
      }
      @include desktop-and-down {
        @include container()
      }
    }

    &__content {
      @include desktop-hd {
        padding: 20px;
      }
      @include desktop-and-down {
        padding: 20px 1%;
      }
    }
  }
</style>
