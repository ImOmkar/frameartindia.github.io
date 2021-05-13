new Vue({

    el: "#myapp",
    data:{
        starwarsallfilms:[]
    },

    methods:{

        async getAllStarWarsFilms(){

            fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJVanNGUkZASaUhaU0tHeFBMaEZASTE04Nkh6end6dVRHS1VZAa2pQRkJIZAm8yUWNOQndBLWdORWY5RFVkRTN1TFBEcC1sTllwbm9vaW40V3J1cEFhMzJueXNmYzhGU3dibkNlNmlSVlMxenkyUEZAkdgZDZD')
            .then(response=>response.json())

            .then(data=>{
                this.starwarsallfilms=data;
            })
        }

    }

})



