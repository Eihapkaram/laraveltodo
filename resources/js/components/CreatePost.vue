<template>
  <v-container style="margin-top: 100px;">
     <v-row>
        <form method="GET" action="http://127.0.0.1:8000/api/posts/create">
            <v-text-field required name="title" type="text" autofocus></v-text-field>
        <v-textarea required  name="description" rows="auto"></v-textarea>
        <v-text-field required  name="number" type="number" autofocus></v-text-field>
        <input type="submit" value="ok" />
        </form>


    </v-row>
  </v-container>



</template>

<script>
export default {

}
</script>

<style>

</style>
