<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="closeModal()">close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            {{ content }}
        </ion-content>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            title: { type: String, default: 'Super Modal' },
        },
        data() {
            return {
                content: 'Content',
            }
        },
        methods: {
            closeModal() {
                this.$ionic.modalController.dismiss();
            }
        }
    }
</script>
