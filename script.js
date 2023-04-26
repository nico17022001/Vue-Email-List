const {createApp} = Vue ;

createApp({
  data(){
    return{
      title:"Email List",
      apiUrl:"https://flynn.boolean.careers/exercises/api/random/mail",
      emails:[],
      limit:10
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(res => {
        this.emails.push(res.data.response);
        console.log(this.emails);
      })
    }
  },

  mounted(){
    for(let i = 0; i < this.limit; i++){
      this.getApi()
    }
  },

}).mount("#app")