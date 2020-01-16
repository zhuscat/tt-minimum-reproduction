<template>
  <button
    class="change-button"
    :class="{
      'change-button--primary': type === 'primary',
      'change-button--normal': type !== 'primary',
      'disabled': disabled
    }"
    :style="{ width: width }"
    :disabled="disabled"
    :open-type="openType"
  >
    <slot />
    <view class="badge" v-if="badge">{{ badge }}</view>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },

    width: {
      type: String,
      default: 'auto'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    badge: {
      type: String,
      default: ''
    },

    openType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.change-button {
  font-size: 36rpx;
  color: #ff8080;
  border: 2rpx solid #ff8080;
  background-color: #fff;
  border-radius: 86rpx;
  padding: 18rpx 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;

  &--normal {
    &.disabled {
      border-color: #bbb;
      color: #bbb;
    }
  }

  &--primary {
    background-color: #ff8080;
    color: #fff;
    &.disabled {
      border-color: #bbb;
      background-color: #bbb;
      color: #666;
    }
  }

  .badge {
    position: absolute;
    right: 0;
    height: 44rpx;
    background: rgba(255, 228, 2, 1);
    border-radius: 22rpx;
    border: 4rpx solid rgba(255, 255, 255, 1);
    color: rgba(36, 36, 36, 1);
    font-size: 24rpx;
    bottom: 62rpx;
    padding: 0 12rpx;
    line-height: 36rpx;
  }
}
</style>