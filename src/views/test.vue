<template>
  <div class="container">测试</div>
</template>

<script>
import { queryUserInfo } from '../api'
export default {
  data () {
    return {}
  },
  methods: {
    async init () {
      let res = await queryUserInfo('code=twPW9ELPrr_R9sDBqACBZZmzDWosSoQcTZMW6jwja4U')
    }
  },
  mounted () {
    this.init()
  },
}
</script>

<style lang="scss" scoped>
.container {
  color: red;
  font-size: 1rem;
}
</style>