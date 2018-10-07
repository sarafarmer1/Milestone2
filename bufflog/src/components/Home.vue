<template>
    <div class="blogFeed">
        <input type="button" value="Add Post" @click="clicking()" />
        <div class="blog-post" v-for="blogPost in database.Posts" :key="blogPost.id">
            <div class="blog-title">{{ blogPost.title }}</div>
            <div class="blog-date-created">{{ blogPost.dateCreated }}</div>
            <div class="blog-author">{{ blogPost.author }}</div>
            <div class="blog-body">{{ blogPost.body }}</div>
        </div>
    </div>
</template>

<script>
    import blogPost from "@/blogPost.js"
    import database from "@/database.js"

    export default {

        data () {
            return {
                database: database
            }
        },
        methods: {
            clicking() {
                database.Posts.push(new blogPost(1, "Test", "Sara Farmer", "October 7, 2018", "Test Body"))
            }
        }
    }
    </script>