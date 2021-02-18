<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
//import Home from "./views/Home";
export default {
  name: "App",
  //components: { Home },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: whitesmoke;
  padding-top: 10px;
}
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
