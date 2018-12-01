<template>
  <div class="contributors">
    <h6>Contributed by</h6>
    <div class="contributor" @click="goToProfile">
      <img :src="contributor.avatar"/>
      <span>{{ contributor.name }}</span>
    </div>
  </div>
</template>

<script>
import contributors from '../../../contributors'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    contributor () {
      return contributors[this.name] || null
    },
  },
  methods: {
    goToProfile() {
      location.href = '/contribute/contributors.html#' + this.name
    },
  },
}
</script>

<style lang="styl">
.contributors {
  border-top: 1px solid rgb(234, 236, 239);
  margin-top: 50px;

  h6 {
    opacity: .4;
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 15px;
  }
  .contributor {
    display: inline-block;
    cursor: pointer;
    img {
      height: 22px;
      vertical-align:middle
    }
    span {
      font-size: 11px;
    }
  }
}
</style>
