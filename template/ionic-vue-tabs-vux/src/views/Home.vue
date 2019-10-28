<template>
  <div>
    <x-header :left-options="{showBack: false}">Home</x-header>
  </div>
</template>

<script>
// @ is an alias to /src
import { XHeader } from 'vux'

export default {
  name: 'home',
  components: {
    XHeader
  }
}
</script>
