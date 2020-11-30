<template>
  <div class="posts">
    <h1 id="chatHeader">POSTS</h1>
    <div class="scroll">
        <div v-for="(item) in posts" v-bind:key="item" class="post">
          <span>{{ item.author }}</span>
          <span>{{ item.text }}</span>
        </div>
    </div>
     <div class="addPost">
          <h2>Agregar post</h2>
          <div class="postText">
            <textarea  v-model="text" type="text"/>
            <button v-on:click="addPost" id="addButton">+</button>
          </div>
      </div>
  </div>
</template>

<script>

import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
import "firebase/database";

export default {
  name: 'Posts',
  data: function () {
     return {
       active: 1,
        postId:1,
        text:'',
        user:null,
        posts:[],
        postRef: null
     }
  },
  methods: {
    addPost(){

      const post = {
      text: this.text,
      author:this.user,
      date: + new Date()
    }
    this.posts.unshift(post)
    this.postsRef.push(post);
    }
  },

  beforeMount(){
    this.postId = this.$route.params.id;
    this.postsRef = firebase.database().ref('posts/' + this.$route.params.id);
  
    this.postsRef.once('value', (snapshot) => {
    
      const posts = snapshot.val()
      for (const key in posts) {
        this.posts.push(posts[key])
      }
      this.posts.sort((a,b) => b.date - a.date)
    })
   
    this.user = firebase.auth().currentUser.displayName
  }
}

</script>

<style>

.scroll {
    overflow-y: scroll; 
    height:70%;
    font-size:16px;
}

.addPost{
  margin: 10px;
}

.postText {
  display: flex;
  flex-direction: column;
}

#addButton {
  background-color: red;
  font-size: 30px;
  margin:10px;
}

#chatHeader{
  background: red;
    background: #f73b3b;
  color: white;
  text-align: center;
}

.post {
  background-color: royalblue;
  display: flex;
  min-height: 70px;
  font-size: 33px;
  margin-bottom: 30px;
  flex-direction: column;
  padding: 20px;
  color:wheat;
}

.posts {
  width: 80vw;
  margin:auto;
  text-align: justify;
      overflow: hidden;
      height: 90vh;
}

</style>