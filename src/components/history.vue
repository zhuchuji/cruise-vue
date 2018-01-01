<template>
  <div class="history">
    <h3>History</h3>
    <ul class="history-list">
      <li v-for="record in history">
        <span class="desc">{{ record.machine }}/{{ record.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'History',

    data () {
      return {
        history: [
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_testaaaaaaaaaaaaaaaaa'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          },
          {
            machine: 'bjstdmngbgr02',
            name: 'Acceptance_test'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/global.scss";

  .history {
    padding: 15px;

    h3 {
      color: #ccc;
      font-size: 24px;
      font-weight: normal;
    }

    .history-list {
      list-style: none;
      padding-left: 0;
      color: #999;
      font-size: 12px;
      line-height: 20px;

      li {
        @include text-ellipsis();
      }

      li:before {
        content: "•";
      }

      li:hover {
        cursor: pointer;
        color: #00b4cf;
      }

      .desc {
        margin-left: 20px;
      }
    }
  }
</style>