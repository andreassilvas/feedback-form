import { createI18n } from 'vue-i18n';


const portfolioWebTranslations = {
    en: {
        feedback: {
            feedbackButton: "Feedback",
            feedbackForm: {
                singleSelectQuestion: "How satisfied are you with our products?",
                multiSelectQuestion: "Which of the following products has helped you the most?",
                multiSelectAnswers: {
                    hunt: "Product Hunt",
                    hacker: "Hacker News",
                    google: "Google Search",
                    chatbot: "Chatbot"
                },
                openEndedQuestion: "We love feedback over here. Let us know if you have anything else to share with us!",
                textareaArialabel: "share more with us",
                sendFeedbackButton: "Send",
                cancelFeedbackButton: "Cancel",
            },
            feedbackDomAlt: {
                happy: "happy face image",
                smiling: "smiling face image",
                neutral: "neutral face image",
                unhappy: "unhappy face image",
                sad: "sad face image",
            },
        },
        formValidation: {
            validationMessage: {
                completeContactForm: "Please complete the form before send it.",
                emailValidation: "Please enter a valid email address.",
                messageSubmited: "Successfully submitted.",
                sendMessageError: "Something when wrong, try later.",
                completeFeedbackForm: "Please select at least one answer from any question.",
            }
        }
    },
    //French translation ---------------------------
    fr: {
        feedback: {
            feedbackButton: "Feedback",
            feedbackForm: {
                singleSelectQuestion: "How satisfied are you with our products?",
                multiSelectQuestion: "Which of the following products has helped you the most?",
                multiSelectAnswers: {
                    hunt: "Product Hunt",
                    hacker: "Hacker News",
                    google: "Google Search",
                    chatbot: "Chatbot"
                },
                openEndedQuestion: "We love feedback over here. Let us know if you have anything else to share with us!",
                textareaArialabel: "share more with us",
                sendFeedbackButton: "Send",
                cancelFeedbackButton: "Cancel",
            },
            feedbackDomAlt: {
                happy: "happy face image",
                smiling: "smiling face image",
                neutral: "neutral face image",
                unhappy: "unhappy face image",
                sad: "sad face image",
            },
        },
        formValidation: {
            validationMessage: {
                completeContactForm: "Please complete the form before send it.",
                emailValidation: "Please enter a valid email address.",
                messageSubmited: "Successfully submitted.",
                sendMessageError: "Something when wrong, try later.",
                completeFeedbackForm: "Please select at least one answer from any question.",
            }
        }
    },
}

const i18n = createI18n({
    locale: 'en', // set the initial locale
    fallbackLocale: 'en', // fallback to English if translation is missing
    messages: portfolioWebTranslations,
});

export default i18n;

