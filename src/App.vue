<template>
  <div>
    <Header />
    <Posts />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Posts,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bitter|Roboto|Open+Sans:400,800");
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #dbdbee !important;
  font-family: 'Roboto', serif;
}
</style>
