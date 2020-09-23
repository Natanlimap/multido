<template>
 <div class="App">
    <Homepage/>
 </div>
</template>

<script>
import Homepage from './Pages/HomePage/Homepage'
export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
.App{
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
}

</style>
