// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyDWK5MrCUhiluOfj8emZT_ARUpbkzbwKTE",
  authDomain: "cookietouch-52c0c.firebaseapp.com",
  databaseURL: "https://cookietouch-52c0c.firebaseio.com",
  messagingSenderId: "423749577733",
  projectId: "cookietouch-52c0c",
  storageBucket: "cookietouch-52c0c.appspot.com"
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
