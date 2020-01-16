<template>
  <container>
    <with-slot>
      <box-button v-if="showButton">box button 1</box-button>
      <box-button v-else>box button 2</box-button>
    </with-slot>
  </container>
</template>

<script>
import { mapState } from 'vuex'
import container from '@/components/c-container'
import WithSlot from '@/components/with-slot'
import BoxButton from '@/components/button'

export default {
  components: {
    container,
    WithSlot,
    BoxButton
  },

  data() {
    return {
      showButton: true
    }
  },

  onLoad() {
    console.log('onload', this.item)
  },

  onUnload() {
    console.log('on unload')
  }
}
</script>
