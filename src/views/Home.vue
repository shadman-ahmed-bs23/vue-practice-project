<template>
  <div class="home">
    <div class="make-post">
      <img src="../assets/img.png" alt="" />
      <button @click="showModal = true" placeholder="Whats on your mind" />
      <div v-if="showModal" class="modal-container">
        <teleport to="#post-modal">
          <div class="modal">
            <textarea rows="4" calss="post-data"> </textarea>
            <button>Post</button>
            <button @click="showModal = false">Cancle</button>
          </div>
        </teleport>
      </div>
    </div>
    <div v-for="post of posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import Post from "../components/Post";
export default {
  name: "Home",
  setup() {
    const showModal = ref(false);
    const posts = ref([]);
    const getUsers = async () => {
      axios
        .get("https://6024a6e736244d001797ae01.mockapi.io/site/data/posts")
        .then((data) => {
          posts.value = data.data;
        });
    };
    onMounted(getUsers);

    return { posts, showModal };
  },
  components: {
    Post,
  },
};
</script>

<style>
.home {
  display: block;
  width: 60%;
  margin: auto;
}
.modal {
  position: absolute;
  top: 0;
}
.make-post {
  display: flex;
  background-color: white;
  padding: 30px;
}
.modal-container:fo
.make-post img {
  width: 40px;
}
.make-post button {
  width: 100%;
  margin-left: 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgb(189, 173, 173);
  padding: 15px;
}
.make-post input:focus {
  outline: none;
}
</style>
