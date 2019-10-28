<template>
    <div>
        <x-header :title="'X Header1'" :left-options="{showBack: false}"></x-header>
        <div>
            <h1>Welcome To @ionic/vue</h1>
            <img alt="Vue logo" src="../assets/logo.png">
            <div>
                <x-button @click.native="goAbout">Go to About Page</x-button>
                <x-button @click.native="takePicture">Take Picture</x-button>
                <x-img :src="imgUrl"></x-img>
            </div>
        </div>
    </div>
</template>

<script>
    import {Plugins, CameraResultType} from '@capacitor/core';
    import {XImg, XHeader, XButton} from 'vux';

    const {Camera} = Plugins;
    export default {
        name: 'tab1',
        components: {
            XImg,
            XHeader,
            XButton,
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
