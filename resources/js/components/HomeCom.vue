<template>
    <v-container style="margin-top: 100px;">
        <v-row><h1>hllow</h1></v-row>
          <v-row>
        <v-col v-for="post,i in postStore.posts" :key="i">

             <v-card>
                <a :href="'http://127.0.0.1:8000/api/posts/' + post.id"  >
                    <v-icon>mdi-close</v-icon>
                </a>

                    <router-link :to="{
                        name:'edit',
                        params:{id:post.id}
                    }"><v-icon>mdi-note-edit</v-icon></router-link>


                <v-card-title>
                    <h4>{{ post.title }}</h4>
                </v-card-title>
                <v-card-subtitle>{{ post['count'] }}</v-card-subtitle>
                <v-card-text>{{ post.descrption }}</v-card-text>

            </v-card>
        </v-col>
    </v-row>

    </v-container>

</template>

<script setup>
import { usePostStore } from "@/stores/posts";
import { onMounted } from "vue";
const postStore = usePostStore();
onMounted(() => {
     postStore.fetchPosts();
});
</script>

<style></style>
