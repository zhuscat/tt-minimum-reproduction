export default {
  computed: {
    foo() {
      console.log(this)
      return this.bar
    }
  },

  beforeDestroy() {
    console.log('m before destroy')
  }
}
