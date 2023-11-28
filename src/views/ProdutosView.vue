<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { produtosRepository } from '@/repositories';
import SpinLoader from '@/components/SpinLoader.vue';

const $router = useRouter();

const loading = ref(true);
const produtos = ref<Produto[]>([]);

const updateProdutos = () => {
  loading.value = true;

  produtosRepository.getAll()
    .then(values => {
      produtos.value = values;
      loading.value = false;
    })
}

updateProdutos();

function *withIndex<Type>(iterable: Iterable<Type>): Iterable<[number, Type]> {
  let index = 0;
  for (const item of iterable) {
    yield [index, item];
    index++;
  }
}


function handleDelete(produto: Produto) {
  if (window.confirm(`Deletar o registro com id: ${produto.id}?`)) {
    produtosRepository.deleteById(produto.id)
      .then((value) => console.log('then ' + value))
      .catch((err) => console.log('finally ' + err))
      .finally(() => { updateProdutos() })
  }
}

function handleEdit(produto: Produto) {
  $router.push({ name: 'produtos.editar', params: { id: produto.id }});
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Produtos</h1>
        <p>Listas de produtos</p>
        <SpinLoader v-if="loading" />
        <table v-else class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Rascunho</th>
              <th>Identificador</th>
              <th>Fotos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[index, produto] of withIndex(produtos)" :key="produto.id">
              <td scope="row"> {{ index }}</td>
              <td> {{ produto.title }}</td>
              <td> {{ produto.description }}</td>
              <td> {{ produto.rascunho }}</td>
              <td> {{ produto.id }}</td>
              <td> {{ produto.foto }}</td>
              <td>
                <button type="button" class="btn btn-secondary" @click="$event => handleEdit(produto)">Editar</button>
                <button type="button" class="btn btn-danger" @click="$event => handleDelete(produto)">Deletar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <RouterLink class="btn btn-primary" :to="{ name: 'produtos.adicionar' }">Adicionar</RouterLink>
      </div>
    </div>
  </div>
</template>
  