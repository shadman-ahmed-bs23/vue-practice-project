<template>
	<navbar></navbar>
	<router-view></router-view>
</template>

<script>
import Navbar from "./components/layout/Navbar";
export default {
	name: "App",
	components: { Navbar },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;700&display=swap");
#app {
	font-family: "Lato", monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: whitesmoke;
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
