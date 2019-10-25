<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <div>
        <ion-button @click="goAbout">Go to About Page</ion-button>
        <ion-button @click="openModal">Open Model</ion-button>
        <ion-button @click="takePicture">Take Picture</ion-button>
        <ion-img :src="imgUrl"></ion-img>
      </div>
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from '../components/Modal.vue'
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      imgUrl: '',
    }
  },
  methods: {
    goAbout() {
      this.$router.push('/about');
    },
    openModal() {
      this.$ionic.modalController
              .create({
                component: Modal,
                componentProps: {
                  data: {
                    content: 'New Content',
                  },
                  propsData: {
                    title: 'New Title'
                  }
                }
              })
              .then(m => m.present())
    },
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.imgUrl = image.webPath;
    }
  }
}
</script>
