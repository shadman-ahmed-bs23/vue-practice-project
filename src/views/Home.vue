<template>
	<div class="home">
		<div class="make-post">
			<img src="../assets/img.png" alt="" />
			<button
				@click="showModal = true"
				placeholder="Whats on your mind"
				class="inputButton"
			>
				Whats on your mind
			</button>

			<teleport to="#post-modal" v-if="showModal">
				<div class="modal">
					<div class="modal-content">
						<h2>Create A New Post</h2>
						<form action="" @submit="handlePostSubmit">
							<input
								type="text"
								placeholder="Title"
								v-model="postData.title"
								required
							/>
							<textarea
								rows="9"
								class="post-data"
								placeholder="Write your Feelings"
								v-model="postData.body"
								required
							>
							</textarea>
							<button type="submit">Post</button>
							<button @click="showModal = false">Cancle</button>
						</form>
					</div>
				</div>
			</teleport>
		</div>
		<div v-for="post of posts" :key="post.id">
			<Post :post="post" />
		</div>
	</div>
</template>

<script>
//import axios from "axios";
//import { ref, onUpdated } from "vue";
//import { useStore } from "vuex";
import Post from "../components/Post";
export default {
	name: "Home",
	components: {
		Post,
	},
	data() {
		return {
			isLoading: true,
			error: null,
		};
	},
	computed: {
		isLoggedIn() {
			return this.$store.getters.isAuthenticated;
		},
		posts() {
			const posts = this.$store.getters["posts/posts"];

			return posts;
		},
	},
	created() {
		this.loadPosts();
	},
	methods: {
		async loadPosts() {
			this.isLoading = true;

			try {
				await this.$store.dispatch("posts/loadPosts");
			} catch (error) {
				this.error = error.message || "Something went wrong";
				alert(this.error);
			}

			this.isLoading = false;
		},
	},
};
</script>

<style scoped>
.modal {
	background-color: rgba(0, 0, 0, 0.7);
	color: white;
	text-align: center;
	position: fixed;
	width: 100%;
	top: 0;
	height: 100%;
	padding: 20px;
}
.inputButton {
	color: #6f767c !important;
	text-align: left;
}
.inputButton:focus {
	outline: none;
}
.modal-content {
	width: 500px;
	margin: auto;
	position: relative;
	min-height: 300px;
	background-color: whitesmoke;
	padding: 20px 15px;
	top: 90px;
	border-radius: 10px;
}
.modal-content h2 {
	color: #2c3e50;
	text-align: center;
	padding: 15px;
}
.modal-content textarea {
	display: block;
	min-width: 90%;
	margin: auto;
	min-height: 200px;
	border: none;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
	padding: 15px;
	font-size: 1rem;
	color: #2c3e50;
	margin-bottom: 15px;
}
.modal-content input {
	width: 90%;
	padding: 10px 20px;
	border: none;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
	border-radius: 25px;
	margin-bottom: 15px;
	font-size: 18px;
}
.modal-content input:focus,
.modal-content textarea:focus {
	outline: none;
}
.modal-content button {
	padding: 9px 30px;
	background-color: #0bc766;
	color: white;
	font-weight: 600;
	margin-left: 15px;
	border: none;
	border-radius: 25px;
	cursor: pointer;
}
.modal-content button:focus {
	outline: none;
}
.modal-content button:last-child {
	background-color: rgb(241, 72, 72) !important;
}
.home {
	display: block;
	width: 60%;
	margin: auto;
}

.make-post {
	display: flex;
	background-color: white;
	padding: 30px;
}

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
