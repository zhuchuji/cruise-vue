<template>
  <footer class="footer">
    &copy;&nbsp;Copyright 2017 ThoughtWorks
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/vars-mixins.scss";

  .footer {
    @include container();
    box-shadow: 0 0 4px 0 #ccc;
    border-top: 0;
    height: 30px;
    background-color: #fff;
    line-height: 30px;
    text-align: center;
  }
</style>
