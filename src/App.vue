<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Edit from "./components/Edit.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Home,
    Edit,
    Footer
  }
};
</script>

<style>
.container {
  position: absolute;
  width: 1000px;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin-left: -500px;
  font-family: Arial, sans-serif;
  background-color: rgba(214, 213, 213, 0.541);
}
#header {
  padding: 2em;
  text-align: center;
  color: rgba(212, 140, 6, 0.795);
  background-image: url(./assets/road.jpg);
  align-self: flex-start;
  margin: 2em;
}
#header:hover {
  border-radius: 25px;
  -moz-transitions: all 0.51s;
  -o-transition: all 0.51s;
  -webkit-transition: all 0.51s;
  transition: all 0.51s;
}
#log-button {
  border: 3px;
  color: rgba(212, 140, 6, 0.795);
  padding: 8px 16px;
  text-align: center;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 20pt;
  background-color: rgb(189, 188, 188);
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
  font-size: 16pt;
}
.edit-post {
  padding: 15px 25px 15px 25px;
  background-color: rgb(189, 188, 188);
  text-decoration: underline;
  border-radius: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
}
.edit-post:hover {
  border-radius: 25px;
  -moz-transitions: all 0.51s;
  -o-transition: all 0.51s;
  -webkit-transition: all 0.51s;
  transition: all 0.51s;
}
.delete-post {
  padding: 15px 25px 15px 25px;
  background-color: rgb(189, 188, 188);
  text-decoration: underline;
  border-radius: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
}
.delete-post:hover {
  border-radius: 25px;
  -moz-transitions: all 0.51s;
  -o-transition: all 0.51s;
  -webkit-transition: all 0.51s;
  transition: all 0.51s;
}
.edit-post h2 {
  text-align: center;
}
.edit-post input,
textarea {
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
  color: rgb(0, 0, 0);
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
  background-color: rgba(212, 140, 6, 0.795);
  color: black;
}
.comments {
  padding: 25px 25px 50px 25px;
}
.comments h3 {
  color: rgb(189, 188, 188);
}
.comments ul {
  list-style-type: none;
}
.comments input,
textarea {
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
  float: right;
  text-align: right;
}
.contact-request-delete {
  font-size: 0.8em;
  float: right;
  text-align: right;
}
#footer {
  background-image: linear-gradient(
    rgb(255, 255, 255),
    rgba(212, 140, 6, 0.795)
  );
  margin-top: 40px;
  padding: 25px 25px 100px 25px;
}
#footer p {
  text-align: left;
}
#footer {
  color: black;
  align-items: flex-end;
}
#footer input,
textarea {
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
  background-color: rgb(189, 188, 188);
}
.blog-post {
  position: relative;
  padding: 25px;
}
.blog-title h2,
a {
  color: rgba(212, 140, 6, 0.795);
  text-decoration: none;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-transform: uppercase;
}
.blog-info {
  color: #000;
  font-size: 0.8em;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
}
.post-changes {
  color: black;
  font-size: 0.8em;
  text-decoration: none;
  float: right;
}
.post-changes a {
  color: black;
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
  background-color: rgb(189, 188, 188);
}
.view-more:hover {
  background-color: rgba(212, 140, 6, 0.795);
  color: black;
  border-radius: 25px;
  -moz-transitions: all 0.51s;
  -o-transition: all 0.51s;
  -webkit-transition: all 0.51s;
  transition: all 0.51s;
}
.label {
  color: rgba(212, 140, 6, 0.795);
}
</style>