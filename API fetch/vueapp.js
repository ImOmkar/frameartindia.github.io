new Vue({

    el: "#myapp",
    data:{
        starwarsallfilms:[]
    },

    methods:{

        async getAllStarWarsFilms(){

            fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJWNHFnaEJ1VEQzMW91cWpzRlZAtMGcxeHo0VHR3S3RRaXFiTHJHcVAzVGRkNjVfSGN2RHFSZAmtmdDY5T0xHeVVCQzJXaGtGMjQ3TTJaNi0yM1pLal8zZAS1HSjZAYckRuRDAtSWRnT3dkTHlQczdYdAZDZD')
            .then(response=>response.json())

            .then(data=>{
                this.starwarsallfilms=data;
            })
        }

   

})
