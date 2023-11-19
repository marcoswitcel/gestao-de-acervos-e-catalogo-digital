<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Produtos!</h1>
        <p>Lista de produtos.</p>
        <RouterLink class="btn btn-primary" :to="{ name: 'produtos.adicionar' }">Adicionar botão</RouterLink>
      </div>
    </div>
  </div>
</template>
  