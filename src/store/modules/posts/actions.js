export default {
  async loadPosts(context) {
    const response = await fetch("https://6024a6e736244d001797ae01.mockapi.io/site/data/posts");
    
    const responseData = await response.json();

    if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}

    const posts = [];

    for(const key in responseData) {
      const post = {
        id: responseData[key].id,
				createdAt: responseData[key].createdAt,
				title: responseData[key].title,
				user_id: responseData[key].user_id,
				post_body: responseData[key].post_body,
      };
      posts.push(post);
    }
    context.commit('setPosts', posts);
  },
}