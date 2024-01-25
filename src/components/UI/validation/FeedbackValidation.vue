<template>
    <div id="validation-container" :class="containerClasses" aria-live="assertive">
            <p v-if="inputValidation && !isFormValid">{{ $t('formValidation.validationMessage.completeFeedbackForm')}}</p>
            <p v-if="dataError">{{ dataError }}</p>
            <p v-if="!dataError && feedbackSubmited">{{ feedbackSubmited }}</p>
        </div>
  </template>
  
  <script>
  export default {
    props: {
      containerId: String,
      inputValidation: Boolean,
      isFormValid: Boolean,
      dataError: String,
      feedbackSubmited: String
    },
    computed: {
      containerClasses() {
        return {
          visible: this.dataError || (this.inputValidation && !this.isFormValid) || this.feedbackSubmited,
          'success-background': this.feedbackSubmited,
        };
      },
    },
  };
  </script>

  
  <style scoped>

#validation-container {
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    height: 2.2rem;
    border-radius: 5px;
    background-color: #fed7d2;
}

#validation-container.success-background {
    background-color: #cef2ea;
}

#validation-container.visible {
    visibility: visible;
}

#validation-container p {
    margin: 0;
    font-size: 0.875rem;
}
  </style>
  