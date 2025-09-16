
<template>
  <div>
    <v-layout>
        <v-app-bar>
            <v-app-bar-title>todo</v-app-bar-title>
        <v-list style="display: flex;">
            <v-list-item ><router-link to="/">🏠 home</router-link></v-list-item>
            <v-list-item ><router-link to="/create">🏠 create</router-link></v-list-item>
            <v-list-item ><router-link to="/edit">🏠 edit</router-link></v-list-item>


        </v-list>
 </v-app-bar>

 <router-view></router-view>
    </v-layout>


  </div>
</template>

<script>
import Hom from './components/HomeCom.vue';
import { useRouter } from 'vue-router'
export default {
data() {
    return {
        arr:[]
    }
},
 mounted() {
const router = useRouter();
 this.arr = router.getRoutes();
},
components: {
    Hom
}
}
</script>

<style scoped>
* {
    text-decoration: none;
}
</style>
