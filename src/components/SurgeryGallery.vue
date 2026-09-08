<script setup>
import { ref } from "vue";

const images = [
  { src: "/imgs/im1.jpeg", alt: "Registro de atuação cirúrgica do Dr. Virlênio" },
  { src: "/imgs/im2.jpeg", alt: "Registro de atuação cirúrgica do Dr. Virlênio" },
  { src: "/imgs/im3.jpeg", alt: "Registro de atuação cirúrgica do Dr. Virlênio" }
];

const open = ref(false);
const index = ref(0);

function show(i) {
  index.value = i;
  open.value = true;
}

function move(step) {
  index.value = (index.value + step + images.length) % images.length;
}
</script>

<template>
  <div class="gallery">
    <button v-for="(image, i) in images" :key="image.src" type="button" @click="show(i)">
      <img :src="image.src" :alt="image.alt" />
    </button>
  </div>

  <div v-if="open" class="modal" @click.self="open = false">
    <button class="close" type="button" aria-label="Fechar" @click="open = false">&times;</button>
    <button class="nav-btn prev" type="button" aria-label="Anterior" @click="move(-1)">‹</button>
    <img :src="images[index].src" :alt="images[index].alt" />
    <button class="nav-btn next" type="button" aria-label="Próxima" @click="move(1)">›</button>
  </div>
</template>
