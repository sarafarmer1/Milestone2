import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'App.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [{
    path: '/',
    name: Home,
    component: Home
}, {
    path: '/App',
    name: App,
    component: App
}, {
    path: '/Header',
    name: Header,
    component: Header
}];

const router = new VueRouter({
    mode: 'history',
    routes
});