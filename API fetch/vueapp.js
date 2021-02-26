new Vue({

    el: "#myapp",
    data:{
        starwarsallfilms:[]
    },

    methods:{

        async getAllStarWarsFilms(){

            fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJVaTdXdFRQcXBPR0lSUHFBNEN1alF0NmYtZAlJKZAjZAoMDVpdTB6a0F3Q1FvaTFKa1pVN3dCV1c3ZAEctclRtYXlMMGkzVGpPbjlEd2w0VGlkLWZAwbDBhZAVFxQ0ZAxUElBV19VRUo2TDlEaFhmMjZAVUgZDZD')
            .then(response=>response.json())

            .then(data=>{
                this.starwarsallfilms=data;
            })
        }

    }

})
