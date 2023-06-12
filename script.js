const { createApp } = Vue

createApp({
    data() {
        return {
            discs: [],
        }
    },
    methods: {
        requestDiscs() {
            axios.get('http://localhost:8888/php-dischi-json/index.php')
                .then(response => this.discs = response.data);
        },
    },
    created() {
        this.requestDiscs();
    }
}).mount('#app')

