<template>
  <div class="contributor-list">
    <div v-for="contributor in contributors">
      <a :name="contributor.name"/>
      <h2>{{ contributor.name }}</h2>
      <img :src="contributor.avatar"/>
    </div>
  </div>
</template>

<script>
import contributors from '../../../contributors'

export default {
  data () {
    return { contributors }
  },
}
</script>

<style lang="styl">
.contributor-list {
  img {
    width: 120px;
  }
}
</style>
