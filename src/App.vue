<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Home,
    Edit,
    Footer
  }
}
</script>

<style>
.container {
    position: absolute;
    width: 1000px;
    top:0px;
    bottom:0px;
    left: 50%;
    margin-left: -500px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#header {
  padding: 10px;
  text-align:left;
  color:deepskyblue ;
  background-image: url(https://www.milligan.edu/wp-content/themes/milligan%20theme/images/transparent-seal.png);
  align-self: flex-start;
}
#log-button {
    border: 3px;
    color:lightblue;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 20pt;
    background-color:#999;
    border-radius: 4px;
}
#log-button:hover {
    background-color: white;
    color: rgb(0, 0, 0);
    animation-fill-mode: both;
}
.go-back {
  text-align: left;
  color: lightskyblu;
  font-size: 16PT;
}
.edit-post {
    padding: 15px 25px 15px 25px;
    background-color: #999;
    text-decoration: underline;
    border-radius: 4px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
}
.delete-post {
     padding: 15px 25px 15px 25px;
    background-color: #999;
    text-decoration: underline;
    border-radius: 4px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
}
.edit-post h2 {
    text-align: center;
}
.edit-post input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
.edit-post-button {
    border: none;
    color: gray;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}
.edit-post-button:hover {
    background-color: lightblue;
    color: white;
}
.comments {
    padding: 25px 25px 50px 25px;
}
.comments h3 {
    color: #999;
}
.comments ul {
    list-style-type: none;
}
.comments input,textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
.comment-delete {
    font-size: 0.8em;
    float:right;
    text-align:right;
}
.contact-request-delete {
    font-size: 0.8em;
    float:right;
    text-align:right;
}
#footer {
    background-image: linear-gradient(rgb(255, 255, 255), rgb(158, 227, 255));
    margin-top: 40px;
    padding: 25px 25px 100px 25px;
}
#footer p {
    text-align: left;
}
#footer  {
    color: black;
    align-items: flex-end;
}
#footer input,textarea {
    align-content: flex-end;
    align-self: left;
    width: 50%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background-color: white;
}
.contact-request {
    position: relative;
    padding: 25px;
    background-color: lightcoral;
}
.blog-post {
    position: relative;
    padding: 25px;
}
.blog-title h2,a {
    color: skyblue;
    text-decoration: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-transform: uppercase;
    
}
.blog-info {
    color: #000;
    font-size: 0.8em;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
}
.post-changes {
    color: #666;
    font-size: 0.8em;
    text-decoration: none;
    float:right;
}
.post-changes a {
    color: #666;
    text-decoration: none;
}
.blog-body {
    color: #333;
    margin-left: 30px;
    text-indent: 2em;
    transform: rotate(0deg);
    
}
.view-more {
    float: initial;
    border: none;
    color: #333;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    font-size: 12px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    background-color:lightblue;
}
.view-more:hover {
    background-color: skyblue;
    color: black;
}
.label {
    color:lightskyblue;
}
</style>