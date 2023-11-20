<script setup lang="ts">
import { useRoute } from 'vue-router';
import { catalogosStore } from '@/stores/catalogos';

const route = useRoute();

const catalogo = catalogosStore.find(entry => entry.id === route.params.id);

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Pagina de compartilhamentos!</h1>
        <p>ID: {{ route.params.id }}.</p>
        <p v-if="catalogo">
          {{ JSON.stringify(catalogo)  }}
        </p>
        <p v-else>Não encontrado</p>
      </div>
    </div>
  </div>
</template>
