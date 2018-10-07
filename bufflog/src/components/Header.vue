<template>
    <div id="header">
        <span v-html="createPost" id="create-post-link"></span>
        <span v-html="contactRequests" id="contact-requests-link"></span>
        <input type="button" v-model="msg" @click="login()" />
    </div>
</template>

<script>
import database from "@/database.js"
import User from "@/user.js"

    export default {
        data() {
            return {
                msg: "Log in",
                createPost: '',
                contactRequests: ''
            };
        },
        methods: {
            login() {
                if(database.User.length == 0) {
                    database.User.push(new User());
                    this.msg = "Sign Out";
                    this.createPost = '<a href="#">Create Post</a>';
                    this.contactRequests = '<a href="#"> Contact Requests</a>';
                } else {
                    database.User.pop();
                    this.msg = "Log In";
                    this.createPost = '';
                    this.contactRequests = '';
                }
            }
        }
    }
    </script>

