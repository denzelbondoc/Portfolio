<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="bg-nude sm:flex flex-col">
    <!--Header-->
    <div class="sm:flex w-screen bg-earlgrey p-5 sticky top-0">
      <!--Logo??-->
      <div class="sm:flex sm:flex-row text-xl ml-12">
        <span>DB</span>
      </div>
      <!--Menu-->
      <div class=" container sm:flex  sm:flex-row justify-end gap-5 text-base">
          <a class="mr-5">About me</a> 
          <a class="mr-5" >Expertise</a> 
          <a class="mr-5">Projects</a>
          <a class="mr-24">Contact</a>       
     </div>
    </div>
    
    <!--Contents Welcome page-->
    <div class="flex flex-col bg-nude w-screen h-screen items-center">
      <h3 class="text-4xl mt-40">Hello!</h3>
      <h1 class="text-6xl mt-5">I'm Denzel</h1>
      <div class="w-14 h-14 rounded-full bg-honey mt-10"></div>
      <div class="flex flew-14 h-14 rounded-full bg-honey "></div>

    </div>
  
    
    <!-- About me -->
   <div class="flex w-screen h-screen bg-mocha">
      <div class="flex flex-row">
        <img src="src\assets\image.jpg" alt="" class="h-fit p-10 ">
      </div>
      <div class="flex">
        <p></p>
      </div>
   </div>

   <!-- Expertise -->
   <div class="flex w-screen h-screen bg-storm">
    
   </div>

   <!-- Projects -->
   <div class="flex w-screen h-screen bg-slate-500">
    
   </div>

   <!-- Contact -->
   <div class="flex w-screen h-screen bg-owange">
    
   </div>
    
    
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
