<template>
  <div class="display-text">
    <h2>{{ access }}</h2>
  </div>

  <FeedbackPage />
</template>

<script>
import FeedbackPage from './components/page-resources/feedback/FeedbackPage.vue';

export default {
  components: {
    FeedbackPage,
  },
  data(){
    return {
      access: 'Click on the "Feedback" button to access the feedback page. ---->'
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #fcead7;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #666666;
  width: 100%;
}

.display-text {
  text-align: center;
}
</style>



