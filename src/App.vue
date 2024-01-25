<template>
    <FeedbackPage />
</template>

<script>
import FeedbackPage from './components/page-resources/feedback/FeedbackPage.vue';

export default {
  components: {
    FeedbackPage,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #666666;
  background-color: #fcead7;
  width: 100%;
}

</style>



