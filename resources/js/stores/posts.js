import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePostStore = defineStore('post', () => {
  // state
  const posts = ref([])
  const loading = ref(false)

  // actions
  async function fetchPosts() {
    loading.value = true
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/posts')
      posts.value = data
    } finally {
      loading.value = false
    }
  }

  // لازم نرجّع state + actions
  return { posts, loading, fetchPosts }
})
