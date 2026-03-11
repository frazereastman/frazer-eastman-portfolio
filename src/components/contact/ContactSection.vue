<template>
    <section id="contact-section">
        <h1 class="font-bold text-5xl mb-3">
            Contact.
        </h1>
        <v-form>
            <v-text-field
                v-model="email"
                aria-required="true"
                label="Email"
                name="email"
                variant="solo-inverted"
                class="mb-4 w-[400px] max-w-full"
                :error-messages="invalidEmail ? 'Please enter a valid email address.' : []"
            ></v-text-field>
            <v-textarea
                v-model="message"
                aria-required="true"
                label="Message"
                name="message"
                variant="solo-inverted"
                class="mb-4 w-[600px] max-w-full"
                :error-messages="invalidMessage ? 'Message should be at least 10 characters long.' : []"
            ></v-textarea>
            <v-btn 
                :disabled="!email || !message"
                variant="tonal" 
                color="white"
                size="x-large"
                @click="sendEmail"
            >
                Send Message
            </v-btn>
        </v-form>
    </section>
</template>

<script setup>

const message = ref('');
const email = ref('');
const isSending = ref(false);
const invalidEmail = ref(false);
const invalidMessage = ref(false);

const sendEmail = () => {

    console.log('email: ', email.value);
    console.log('message: ', message.value);
    invalidEmail.value = false;
    invalidMessage.value = false;
    isSending.value = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        console.log('Please enter a valid email address.');
        invalidEmail.value = true;
        isSending.value = false;
        return;
    }

    if (message.value.length < 10) {
        console.log('Message should be at least 10 characters long.');
        invalidMessage.value = true;
        isSending.value = false;
        return;
    }

    if (!email.value || !message.value) {
        console.log('Email and message are required.');
        isSending.value = false;
        return;
    }

    emailjs.send("service_uxc1kwq","template_pn8ud2x",{
        name: email.value,
        message: message.value
    })
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    }).finally(() => {
        isSending.value = false;
    });
}

</script>

<style scoped>
</style>