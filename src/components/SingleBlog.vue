<template>
<div>

        <div class="inputBox">
            <textarea class="title" v-model="blog.title"></textarea>
        </div>

        <div  class="inputBox">
            <textarea class="body" v-model="blog.content"></textarea>
        </div>

        <button  class="button" @click="updateBlog(blog)">Submit Blog</button>
      

</div>



</template>

<script>
import db from '../firebase/init';

export default {
  name: 'SingleBlog',

  data() {
      return{

          id: this.$route.params.id,
          blog: {
             title: "",
            content: ""
          }

      }
  },

  methods: {
    updateBlog(blog){
      
             console.log(time);

      db.collection('blogs').doc(this.id).set({
        title : blog.title,
        content: blog.content
      }).then(()=>{
        this.$router.push('/');
      });
    }
  },

  created(){

    db.collection('blogs').doc(this.id).get()
    .then((doc) => {
         return doc.data();
      }).then((data)=>{
        this.blog.title= data.title;
        this.blog.content= data.content;
      });
    
 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
