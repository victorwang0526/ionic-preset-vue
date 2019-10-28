<template>
  <div>
    <x-header>About</x-header>
    <x-button @click.native="showAS=true" :action-type="'button'">显示Action Sheet</x-button>
    <actionsheet v-model="showAS" :menus="{menu1: '删除'}"></actionsheet>
  </div>
</template>

<script>
  import {XHeader, Actionsheet, XButton} from 'vux';
  export default {
    name: 'about',
    components: {
      XHeader,
      Actionsheet,
      XButton
    },
    data() {
      return {
        showAS: false
      }
    },
    methods: {

    }
  }
</script>
