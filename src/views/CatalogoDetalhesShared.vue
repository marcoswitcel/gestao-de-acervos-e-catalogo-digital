<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { catalogosRepository } from '@/repositories';

const route = useRoute();

const catalogo = ref<Catalogo | null>(null);

catalogosRepository.findById(route.params.id)
  .then(entry => {
    catalogo.value = entry;
  })

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
