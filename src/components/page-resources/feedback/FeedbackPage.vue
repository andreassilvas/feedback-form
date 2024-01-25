<template>
    <div class="feedback-page-form">
        <FeedbackToggle @toggle-feedbackpage="toggleFeedback" />
        <FeedbackcardContainer :show-sidebar="showFeedbackPage" @close-sidebar="toggleFeedback">
            <FeedbackForm @close-feedback="toggleFeedback" />
        </FeedbackcardContainer>
    </div>
</template>

<script>
import FeedbackToggle from '../../UI/buttons/FeedbackToggle.vue';
import FeedbackcardContainer from '../../UI/containers/FeedbackcardContainer.vue';
import FeedbackForm from './FeedbackForm.vue';

export default {
    components: {
        FeedbackToggle,
        FeedbackcardContainer,
        FeedbackForm,
    },
    data() {
        return {
            showFeedbackPage: false
        }
    },
    methods: {
        toggleFeedback() {
            this.showFeedbackPage = !this.showFeedbackPage
        },
        provide() {
            return {
                cancelFeedback: this.showFeedbackPage
            }
        }
    }

}

</script>
