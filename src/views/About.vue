<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="num">{{count}}</div>
    <div class="click" @click="increment">ADD</div>
  </div>
</template>

<script>
export default {
	computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
.num{
	margin-bottom: 20px;
  margin-top: 100px;
  color: #000;
}
.click{
	color: #f00;
	cursor: pointer;
	transition: all .3s;
	&:hover{
		color: #000;
	}
}
</style>
