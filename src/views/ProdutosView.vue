<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { produtosStore } from '@/stores/produtos';

function *withIndex<Type>(iterable: Iterable<Type>): Iterable<[number, Type]> {
  let index = 0;
  for (const item of iterable) {
    yield [index, item];
    index++;
  }
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Produtos</h1>
        <p>Lista de produtos.</p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Rascunho</th>
              <th>Identificador</th>
              <th>Fotos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[index, produto] of withIndex(produtosStore)" :key="produto.id">
              <td scope="row"> {{ index }}</td>
              <td> {{ produto.title }}</td>
              <td> {{ produto.description }}</td>
              <td> {{ produto.rascunho }}</td>
              <td> {{ produto.id }}</td>
              <td> {{ produto.foto }}</td>
            </tr>
          </tbody>
        </table>
        <RouterLink class="btn btn-primary" :to="{ name: 'produtos.adicionar' }">Adicionar botão</RouterLink>
      </div>
    </div>
  </div>
</template>
  