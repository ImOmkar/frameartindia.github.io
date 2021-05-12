new Vue({

    el: "#myapp",
    data:{
        starwarsallfilms:[]
    },

    methods:{

        async getAllStarWarsFilms(){

            fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=${DISPLAY_ACCESS_TOKEN}')
            .then(response=>response.json())

            .then(data=>{
                this.starwarsallfilms=data;
            })
        }

    }

})



