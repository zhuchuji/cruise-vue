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
  .footer {
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 4px 0 #ccc;
    border-top: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    text-align: center;
  }
</style>