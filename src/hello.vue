<template>
<div    v-on> <!--vue/valid-v-on error => bug -->
   <img src='./logo.png'/>
   </div> <!-- vue/no-parsing-error error => bug -->
</template>

<script>
import OtherComponent from './OtherComponent.vue'
export default {
  components: {
    OtherComponent
  },
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 2em
  text-align center
</style>