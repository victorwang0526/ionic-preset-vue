<template>
  <ion-tabs>
    <ion-tab tab="tab1"><Tab1/></ion-tab>
    <ion-tab tab="tab2"><Tab2/></ion-tab>

    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="tab1">
          <ion-icon name="home"></ion-icon>
          <ion-label>Tab1</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>
        <ion-tab-button tab="tab2" :to="{ name: 'tab2' }">
          <ion-icon name="construct"></ion-icon>
          <ion-label>Tab2</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>

</template>

<script>
// @ is an alias to /src

import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';


export default {
  name: 'home',
  components: {
    Tab1,
    Tab2
  },
}
</script>
