<template>
    <div class="button-container">
        <button class="feedback-button" role="button" aria-label="Toggle Feedback" @click="toggleFeedbackPage">{{ $t('feedback.feedbackButton') }}</button>
    </div>
</template>

<script>
export default {
    methods: {
        toggleFeedbackPage() {
            this.$emit('toggle-feedbackpage')
        }
    }
}
</script>
  
<style scoped>
.button-container {
    position: fixed;
    top: 300px;
    left: 98.7%;
    transform: translate(-50%, -50%) rotate(-90deg);
    z-index: 100;
}

.feedback-button {
    color: #fcead7;
    font-size: 1.1rem;
    letter-spacing: .5px;
    padding: 8px 18px;
    border-radius: 20px 5px 0 0;
    border: 1px solid #283747;
    background: #283747;
    cursor: pointer;
}

.feedback-button:hover {
    background: #384c62;
    border: 1px solid #384c62;
}

@media (min-width:280px) and (max-width:540px) {
    .button-container {
        left: 96.5%;
    }
}

@media (min-width:541px) and (max-width:1024px) {
    .button-container {
        left: 98.2%;
    }
}

@media (min-width:640px) and (max-width:932px) {
    @media (orientation: landscape) {
        .button-container {
            top: 200px;
        }
    }
}

@media screen and (min-width: 640px) and (max-width:932px) {
    @media (orientation: landscape) {
        .button-container {
            display: none;
        }
    }
}

@media screen and (min-width: 480px) and (max-width:568px) {
    @media (orientation: landscape) {
        .button-container {
            display: none;
        }
    }
}

@media screen and (width: 320px) {
    .button-container {
        display: none;
    }
}
</style> 


