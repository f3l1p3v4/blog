<template>
  <div>
    <Header />
    <Section :current-component="currentSectionComponent" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/BlogHeader";
import Section from "./components/BlogSection";
import Footer from "./components/BlogFooter";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Footer
  },
  data() {
    return {
      currentSectionComponent: 'BlogSectionPost'
    }
  },
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
  font-family: Montserrat, Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Roboto, Helvetica, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #6854ea39;
}
</style>
