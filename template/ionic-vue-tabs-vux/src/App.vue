<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="showTabBar">
      <tabbar-item selected link="/">
        <img slot="icon" src="./assets/icon_nav_article.png">
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item link="/tab1">
        <img slot="icon" src="./assets/icon_nav_article.png">
        <span slot="label">Tab1</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/tab2">
        <img slot="icon" src="./assets/icon_nav_cell.png">
        <span slot="label">Tab2</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

  import {Tabbar, TabbarItem} from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        showTabBar: true
      }
    },
    // 监听,当路由发生变化的时候执行
    watch:{
      // eslint-disable-next-line no-unused-vars
      $route(to,from){
        if(to.path == '/' || to.path == '/home' || to.path == '/tab1' || to.path == '/tab2'){
          this.showTabBar = true;
        }else{
          this.showTabBar = false;
        }
      }
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/close.less';
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
