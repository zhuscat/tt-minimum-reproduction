<template>
  <view v-if="show">
    <slot/>
  </view>
</template>

<script>
export default {
  props: {
  },
  data() {
		return {
			show: false
		}
  },
  created () {},
  methods: {
  }
}
</script>
