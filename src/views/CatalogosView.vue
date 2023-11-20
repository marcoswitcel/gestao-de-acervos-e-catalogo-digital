<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { catalogosStore } from '@/stores/catalogos';
import { gerarLink } from '@/utilities';

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
        <h1>Catalogo</h1>
        <p>Lista de Catalogos.</p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Publicado</th>
              <th>Identificador</th>
              <th>Fotos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[index, catalogo] of withIndex(catalogosStore)" :key="catalogo.id">
              <td scope="row"> {{ index }}</td>
              <td> {{ catalogo.title }}</td>
              <td> {{ catalogo.description }}</td>
              <td> {{ catalogo.publicado ? gerarLink(catalogo.id) : 'não' }}</td>
              <td> {{ catalogo.id }}</td>
              <td> {{ catalogo.itens }}</td>
            </tr>
          </tbody>
        </table>
        <RouterLink class="btn btn-primary" :to="{ name: 'catalogos.adicionar' }">Adicionar</RouterLink>
      </div>
    </div>
  </div>
</template>
  