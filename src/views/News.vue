<template>
  <div class="news">
    <ul class="newsList grid-x large-up-3 align-center-middle">
      <li><img src="https://fakeimg.pl/350x200/3f3f3f/fff"></li>
      <li><img src="https://fakeimg.pl/350x200/3f3f3f/fff"></li>
      <li><img src="https://fakeimg.pl/350x200/3f3f3f/fff"></li>
      <li><img src="https://fakeimg.pl/350x200/3f3f3f/fff"></li>
    </ul>
  </div>
</template>

<script>
export default {
	computed: {},
  methods: {},
  mounted() {
    gsap.to('.newsList', {
      delay: 2,
      duration: 1,
      y: 300,
    })
  }
}
</script>

<style lang="scss" scoped>
  .newsList{
    li{
      border: 2px solid red;
      @include mr(-2px);
      @include mb(60px);
    }
  }
</style>
