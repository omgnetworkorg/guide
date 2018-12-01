<template>
  <div class="contributors">
    <h6>Contributed by</h6>
    <div class="contributor" @click="goToProfile">
      <img :src="contributor.avatar"/>
      <span>
        {{ contributor.name }}
        <span>{{ contributor.oneliner }}</span>
      </span>
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
    margin-bottom: 10px;
    margin-top: 15px;
  }
  .contributor {
    display: inline-block;
    cursor: pointer;
    display: inline-flex;
    img {
      height: 26px;
      margin-right: 5px;
    }
    span {
      font-size: 11px;
      span {
        opacity: .5;
        display: block;
        font-size: 9px;
        padding-top: 1px;
      }
    }
  }
}
</style>
