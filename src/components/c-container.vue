<template>
  <view>
    <slot />
  </view>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('container before destroy')
  }
}
</script>