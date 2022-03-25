const app = new Vue({
    el : '#app',
    data : {
        emails : [],
    },

    methods : {
        generateEmails(){
            const self = this;
            self.emails = [];

            for(let i = 0; i<10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (email){
                    self.emails.push(email.data.response);
                });
            }
            console.log(self.emails)
        },
    },
})