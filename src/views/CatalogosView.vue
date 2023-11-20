<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { catalogosStore } from '@/stores/catalogos';
import { gerarLink } from '@/utilities';
import { catalogosRepository } from '@/repositories';

function *withIndex<Type>(iterable: Iterable<Type>): Iterable<[number, Type]> {
  let index = 0;
  for (const item of iterable) {
    yield [index, item];
    index++;
  }
}

function handleDelete(catalogo: Catalogo) {
  if (window.confirm(`Deletar o registro com id: ${catalogo.id}?`)) {
    catalogosRepository.deleteById(catalogo.id)
      .then((value) => console.log('then ' + value))
      .catch((err) => console.log('finally ' + err))
  }
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Catálogo</h1>
        <p>Listas de Catálogos</p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Publicado</th>
              <th>Identificador</th>
              <th>Fotos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[index, catalogo] of withIndex(catalogosStore)" :key="catalogo.id">
              <td scope="row"> {{ index }}</td>
              <td>{{ catalogo.title }}</td>
              <td>{{ catalogo.description }}</td>
              <td>{{ catalogo.publicado ? gerarLink(catalogo.id) : 'não' }}</td>
              <td>{{ catalogo.id }}</td>
              <td>{{ catalogo.itens }}</td>
              <td>
                <button type="button" class="btn btn-danger" @click="$event => handleDelete(catalogo)">Deletar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <RouterLink class="btn btn-primary" :to="{ name: 'catalogos.adicionar' }">Adicionar</RouterLink>
      </div>
    </div>
  </div>
</template>
  