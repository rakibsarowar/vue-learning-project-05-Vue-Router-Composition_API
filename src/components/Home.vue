<script setup>
import {ref, onMounted} from 'vue'
import EventCard from './EventCard.vue';
// import axios from 'axios'
import EventService from '../services/EventService'

const events = ref (null)
onMounted(() =>{
//    axios
//    .get('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events') 
    EventService.getEvents()
   .then((response) => {
     events.value = response.data 
   })
   .catch ((error) =>{
    console.log(error)
   })
})
</script>

<template>
    <h1>Events For Good</h1>

    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    </div>
</template>

<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>