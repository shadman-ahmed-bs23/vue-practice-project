<template>
  <div class="post-container">
    <div class="top">
      <div class="left">
        <img src="../assets/img.png" alt="" />
      </div>
      <div class="right">
        <h3>{{ post.title }}</h3>
        <small>{{ getTime.a }}</small>
        <small>{{ getTime.b }}</small>
      </div>
    </div>
    <div class="middle">
      {{ post.post_body }}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum
        ad. Amet praesentium minus animi, eligendi iste harum vitae unde natus
        adipisci incidunt quas error neque explicabo ad blanditiis odio! Aliquam
        eligendi, repellendus, pariatur officia quae eum velit deleniti
        voluptatem doloribus voluptate perspiciatis? Culpa animi dolorem
        deserunt doloribus consectetur possimus.
      </p>
    </div>
    <div class="bottom">
      <p>20 <i class="fa fa-thumbs-up"></i></p>
      <p>20 <i class="fa fa-comments"></i></p>
    </div>
    <div>
      <div class="comment">
        <div class="logo">
          <img src="../assets/img.png" alt="" />
        </div>
        <div class="comment-body">
          <h6>Name</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
            mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae unde sequi aliquid quam earum ipsa tempore aperiam nisi?
            Dolorum, temporibus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
// import { ref } from "vue";
export default {
  name: "Post",
  props: ["post"],
  setup(props) {
    const getTime = computed(() => {
      const t = new Date(props.post.createdAt);
      let a = t.toDateString();
      let b = t.toLocaleTimeString();
      return { a, b };
    });

    return { getTime };
  },
};
</script>

<style>
.post-container {
  width: 90%;
  margin: auto;
  background-color: white;
  padding: 20px;
  margin-top: 15px;
}
.top {
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.left {
  padding: 10px;
}
h2,
h3,
h4,
h6 {
  margin: 0px;
  text-align: left;
}
.right {
  flex: 0.8;
  text-align: left;
  padding: 15px;
}
.left img {
  width: 60px;
}
.middle {
  padding: 20px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.bottom {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  padding: 10px;
}
.bottom p,
.bottom:nth-child(2) {
  padding: 3px 10px;
  padding-left: 15px;
  font-size: 20px;
}
.bottom i {
  padding: 0px 5px;
}
.comment {
  display: flex;
  padding: 10px;
}
.comment p {
  font-size: 14px;
}
.logo {
  padding: 10px;
}
.logo img {
  width: 30px;
}
.comment-body {
  padding: 10px;
  margin-left: 10px;
  padding-left: 15px;
  border-radius: 15px;
  flex: 0.85;
  background-color: whitesmoke;
}
.comment-body h6 {
  padding: 5px 0px;
}
</style>
