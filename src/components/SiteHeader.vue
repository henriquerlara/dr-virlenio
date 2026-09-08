<script setup>
import { ref } from "vue";

const props = defineProps({
  current: { type: String, default: "" }
});

const open = ref(false);

const links = [
  { href: "/", id: "inicio", label: "Início" },
  { href: "/atuacao", id: "atuacao", label: "Áreas de atuação" },
  { href: "/carreira", id: "trajetoria", label: "Trajetória" },
  { href: "/galeria", id: "cirurgica", label: "Atuação cirúrgica" },
  { href: "/contato", id: "contato", label: "Contato" }
];
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/">
        <img src="/imgs/logoVerde.png" width="1774" height="887" alt="Dr. Virlênio de Andrade Lara" />
      </a>
      <button class="menu-btn" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        ☰
      </button>
      <nav class="nav" :class="{ open }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :aria-current="props.current === link.id ? 'page' : undefined"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <a class="btn btn-primary" href="/contato" @click="open = false">Agendar consulta</a>
      </nav>
    </div>
  </header>
</template>
