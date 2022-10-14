<template>
  <Navbar />
  <section class="w-full flex flex-col my-16 gap-24">
    <div class="flex flex-col gap-6 px-[150px]">
      <h1 class="text-3xl text-black font-bold">OUR PROGRAM</h1>
      <p class="text-xl text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex comm</p>
    </div>
    <div class="flex justify-center gap-24 px-[72px] flex-wrap">
      <CardProker :item="proker[0]" v-for="item in 8" :key="item.id"/>
    </div>
  </section>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import CardProker from "../components/CardProker.vue";

export default {
  name: "Proker",
  components: {
    Navbar,
    CardProker
  },
  data() {
    return {
      proker: [
        {
          "title": "PERTEMUAN RUTIN",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh at tortor enim, ornare. Platea sed id sit ut hendrerit egestas.",
          "img": "../src/assets/proker-1.png"
        }
      ]
    }
  }
};
</script>
