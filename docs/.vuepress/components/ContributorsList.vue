<template>
  <div class="contributor-list">
    <div 
      v-for="contributor in contributors"
      :style="{'background-image': `url(${contributor.avatar})`}"
    >
      <a :name="contributor.name"/>
      <h3>{{ contributor.name }}</h3>
      <span v-if="contributor.oneliner">
        {{ contributor.oneliner }}
      </span>
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
.contributor-list div {
  height: 60px;
  background-size: 60px 60px;
  background-position: top left;
  background-repeat: no-repeat;
  padding-left: 70px;
  margin-top: 30px;
  h3 {
    margin: 0;
    padding: 5px 0 5px;
  }
}
</style>
