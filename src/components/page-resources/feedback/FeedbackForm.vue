<template>
    <form @submit.prevent="sendFeedback">
        <div class="form-control">
            <h2>{{ $t('feedback.feedbackForm.singleSelectQuestion') }}</h2>
            <div id="single-select">
                <div v-for="(face, key) in feedbackImages" :key="key">
                    <input type="radio" :id="`${key}-content`" :value="`${key}-content`" name="content"
                        v-model="ratingSelected" style="display: none;">
                    <label :for="`${key}-content`" class="content-label">
                        <img :src="face" :alt="$t(`feedback.feedbackDomAlt.${key}`)" class="content-image">
                    </label>
                </div>
            </div>
        </div>
        <div class="form-control">
            <h2>{{ $t('feedback.feedbackForm.multiSelectQuestion') }}</h2>
            <div class="multi-selection">
                <div v-for="configContent in multiSelectOptions" :key="configContent">
                    <input type="checkbox" :id="`${configContent}-segment`" :value="`${configContent}-segment`"
                        :name="`${configContent}-segment`" v-model="multiSelected">
                    <label :for="`${configContent}-segment`">{{
                        $t(`feedback.feedbackForm.multiSelectAnswers.${configContent}`) }}</label>
                </div>
            </div>
        </div>
        <div class="form-control">
            <h2>{{ $t('feedback.feedbackForm.openEndedQuestion') }}</h2>
            <div class="feedback-container">
                <label for="feedback-textarea"></label>
                <textarea name="textarea" id="feedback-textarea" rows="3" v-model="textAreaDetails"
                    :aria-label="$t('feedback.feedbackForm.textareaArialabel')"></textarea>
            </div>
        </div>

        <FeedbackValidation 
            :inputValidation="inputValidation" 
            :isFormValid="isFormValid" 
            :dataError="dataError"
            :feedbackSubmited="feedbackSubmited" />

        <div class="feedback-buttons">
            <button class="send-feedback" title="send my feedback">{{ $t('feedback.feedbackForm.sendFeedbackButton')}}</button>
            <button title="cancel feedback" type="button" class="cancel-feedback" @click="cancelSendFeedback">{{
                $t('feedback.feedbackForm.cancelFeedbackButton') }}</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { storeFeedbackImages } from '@/imageData.js';
import FeedbackValidation from '../../UI/validation/FeedbackValidation.vue';
const VALIDATION_TIMEOUT = 5000;

export default {
    components: { FeedbackValidation },
    emits: ['close-feedback'],
    data() {
        return {
            feedbackImages: {
                unhappy: storeFeedbackImages.unhappyFaceImage,
                sad: storeFeedbackImages.sadFaceImage,
                neutral: storeFeedbackImages.neutralFaceImage,
                smiling: storeFeedbackImages.smilingFaceImage,
                happy: storeFeedbackImages.happyFaceImage,
            },
            multiSelectOptions: {
                hunt: "hunt",
                hacker: "hacker",
                google: "google",
                chatbot: "chatbot"
            },
            ratingSelected: null,
            multiSelected: [],
            textAreaDetails: '',
            inputValidation: false,
            inputValidationText: this.$t('formValidation.validationMessage.completeFeedbackForm'),
            dataError: null,
            feedbackSubmited: null,
        };
    },
    computed: {
        ratingIsValid() {
            return this.ratingSelected !== null;
        },
        multiSelectValid() {
            return this.multiSelected.length > 0;
        },
        textAreaDetailsValid() {
            return this.textAreaDetails.trim() !== '';
        },
        isFormValid() {
            return this.ratingIsValid || this.multiSelectValid || this.textAreaDetailsValid;
        },
    },
    methods: {
        async sendFeedback() {
            //set inputValidation to true before validation
            this.inputValidation = true;
            if (this.isFormValid) {
                this.dataError = null;
                const SERVER_URL = 'https://form2024-6dcba-default-rtdb.europe-west1.firebasedatabase.app/dummy-feedback.json';
                const feedbackPostData = {
                    rating: this.ratingSelected,
                    multiSelect: this.multiSelected,
                    comments: this.textAreaDetails,
                    date: new Date().toDateString()
                };
                const headers = {
                    'Content-Type': 'application/json',
                };
                try {
                    const response = await axios.post(SERVER_URL, feedbackPostData, { headers });
                    // Reset the inputs
                    this.ratingSelected = null;
                    this.multiSelected = [];
                    this.textAreaDetails = '';
                    this.inputValidation = false;
                    this.feedbackSubmited = response.data
                        ? this.$t('formValidation.validationMessage.messageSubmited')
                        : null;
                    setTimeout(() => {
                        this.feedbackSubmited = null;
                        this.closeFeedbackPage();
                    }, 1500);
                }
                catch (error) {
                    console.error('Error:', error);
                    this.dataError = this.$t('formValidation.validationMessage.sendMessageError');
                    setTimeout(() => {
                        this.dataError = null;
                    }, VALIDATION_TIMEOUT);
                }
            }
            //prevent the selection message from being permanently open.
            setTimeout(() => {
                this.inputValidation = false;
            }, VALIDATION_TIMEOUT);
        },
        closeFeedbackPage() {
            this.$emit('close-feedback');
        },
        cancelSendFeedback() {
            this.ratingSelected = null;
            this.multiSelected = [];
            this.textAreaDetails = '';
            setTimeout(() => {
                this.inputValidation = false;
            }, 500);
            this.closeFeedbackPage();
        }
    },
}

</script>

<style scoped>
form {
    max-width: 40rem;
    padding: 0.5rem 1.5rem;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.form-control {
    margin: 0.5rem 0;
    text-align: justify;
    font-size: .9rem;
    display: block;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control h2 {
    font-size: .93rem;
    margin: 0.5rem 0;
    font-weight: 100;
}

.form-control input,
.form-control select {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.3rem;
}

.form-control select {
    width: auto;
}

.form-control input[type='checkbox'] {
    display: none;
}

.form-control input[type='checkbox']+label {
    font-weight: normal;
}


/* Style the custom checkbox */
input[type="checkbox"]+label {
    position: relative;
    padding-left: 1.87rem;
    cursor: pointer;
    display: inline-block;
}

input[type="checkbox"]+label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 13px;
    height: 13px;
    border: 2px solid #283747;
    border-radius: 2px;
    background-color: #fff;
    transition: background-color 0.3s, border-color 0.3s;
}

input[type="checkbox"]+label::after {
    content: '\2713';
    position: absolute;
    left: 5px;
    top: 0px;
    font-size: .75rem;
    color: #fff;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.3s;
}

input[type="checkbox"]:checked+label::after {
    opacity: 1;
}

input[type="checkbox"]:checked+label::before {
    background-color: #283747;
    border-color: #283747;
}

.content-image {
    height: 45px;
}

.content-image:hover {
    background: #dde4eb;
    border-radius: 12px;
}

#smiling-content:checked+.content-label .content-image,
#happy-content:checked+.content-label .content-image,
#neutral-content:checked+.content-label .content-image,
#unhappy-content:checked+.content-label .content-image,
#sad-content:checked+.content-label .content-image {
    background: #dde4eb;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(40, 55, 71, 0.60);
}

#single-select {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.multi-selection {
    column-count: 2;
    column-gap: 20px;
}

.multi-selection div {
    break-inside: avoid-column;
}

.feedback-container {
    display: flex;
}

#feedback-textarea {
    padding: .5rem;
    color: #283747;
    margin: .1rem;
    resize: none;
    font-family: inherit;
    letter-spacing: .5px;
    width: 100%;
}

.feedback-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0.7rem;
}

button.send-feedback,
button.cancel-feedback {
    font: inherit;
    font-weight: 500;
    cursor: pointer;
    padding: 0.6rem 1.5rem;
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(40, 55, 71, 0.85);
}

button.send-feedback {
    border: 2px solid #283747;
    background-color: #b9c7d6;
}

.send-feedback:hover,
.send-feedback:active {
    border: 2px solid #283747;
    background-color: #283747;
    color: #ffffff;
}

button.cancel-feedback {
    border: 2px solid #283747;
    background-color: #dde4eb;
    color: #283747;
}

button.cancel-feedback:hover {
    border: 2px solid #283747;
    background-color: #283747;
    color: #ffffff;
}
</style>