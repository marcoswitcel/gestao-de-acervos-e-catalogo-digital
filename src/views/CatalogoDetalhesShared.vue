<script setup lang="ts">
import { useRoute } from 'vue-router';
import { catalogosRepository } from '@/repositories';

const route = useRoute();

const catalogo = catalogosRepository.findById(route.params.id);

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
