<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>Hello! Nice to meet you!</h1>
    <hr />
    <form @submit="addMessage">
        <div class="form-group">
          <input class="form-control" v-model="newMessage.title" maxlength="40" autofocus placeholder="Please introduce yourself :)" />
        </div>
        <div class="form-group">
          <textarea class="form-control" v-model="newMessage.text" placeholder="Leave your message!"  rows="3"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
    </form>
    <hr />
    <div class="card-columns">
      <card class="card-outline-success" :title="'Hello!'" :text="'This is our fixed card!'" :footer="'Added on ' + dateToString(Date.now())"></card>
      <card v-for="message in messages" :key="message.title" :title="message.title" :text="message.text" :footer="'Added on ' + dateToString(message.timestamp)"></card>
    </div>
  </div>
</div>
</template>

<script>
import Firebase from 'firebase'
import { dateToString } from './utils/utils'
import Card from './components/Card'

let config = {
  apiKey: 'AIzaSyDPtlMpJXVfzxyoutQxHBVh8FNQXMeOqi4',
  authDomain: 'pleaseintroduceyourself-d9e89.firebaseapp.com',
  databaseURL: 'https://pleaseintroduceyourself-d9e89.firebaseio.com',
  projectId: 'pleaseintroduceyourself-d9e89',
  storageBucket: 'pleaseintroduceyourself-d9e89.appspot.com',
  messagingSenderId: '803039066095'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let messagesRef = db.ref('messages')
export default {
  name: 'App',
  components: {
    Card
  },
  firebase: {
    messages: messagesRef
  },
  data () {
    return {
      newMessage: {
        title: '',
        text: '',
        timestamp: null
      }
    }
  },
  methods: {
    dateToString: dateToString,
    addMessage (e) {
      e.preventDefault()
      if (this.newMessage.title === '') {
        return
      }
      this.newMessage.timestamp = Date.now()
      messagesRef.push(this.newMessage)
      this.newMessage.text = ''
      this.newMessage.title = ''
      this.newMessage.timestamp = null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
