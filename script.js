const { createApp } = Vue

createApp({
    data() {
        return {
            message: ''
        }
    },
    methods: {
        requestMessage() {
            axios.get('http://localhost:8888/php-dischi-json/index.php')
                .then(response => this.message = response.data);
        },
    },
    created() {
        this.requestMessage();
    }
}).mount('#app')

