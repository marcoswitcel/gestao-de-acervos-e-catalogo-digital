<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { produtosStore } from '@/stores/produtos';

const form = ref(null);
const entity = ref<Produto>({
  title: '',
  description: null,
  rascunho: true,
  id: '',
  foto: null,
});

function handleCreate() {
  
  /* 
  const length = produtosStore.length;
  produtosStore.push({
    title: 'Produto ' + length,
    description: 'Descrição do produto' + length,
    rascunho: false,
    id: 'asd-222-asd',
    foto: null,
  });
  */

  produtosStore.push({
    title: entity.value.title,
    description: entity.value.description,
    rascunho: entity.value.rascunho,
    id: entity.value.id,
    foto: entity.value.foto,
  });
}

function handleSubmit ($event: Event) {
  $event.preventDefault()
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center vh-100 align-items-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form ref="form" class="pb-5" method="get" action="" @submit="handleSubmit($event)">
          <legend class="h2 mb-3">Cadastrar Novo Produto</legend>
          <div class="d-flex">
            <div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nome: </label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="nomeDoProduto"
                      placeholder="Nome do produto" v-model="entity.title">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Identificação: </label>
                <input type="text" class="form-control" id="exampleInputPassword1"
                    placeholder="Identificação do produto" name="identitificacaoDoProduto" v-model="entity.id">
              </div>
              <div class="mb-3">
                <input class="form-check-input" type="checkbox" name="rascunho" value="rascunho" id="flexCheckChecked" v-model="entity.rascunho">
                <label class="form-check-label" for="flexCheckChecked">
                  Rascunho
                </label>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">Descrição: </label>
                <textarea class="form-control"
                  placeholder="Descrição do Produto"
                  id="exampleInputPassword2"
                  name="descricaoDoProduto"
                  rows="3" v-model="entity.description"></textarea>

              </div>
            </div>
            <div class="border border-2 flex-grow-1 m-4 text-center align-middle">
              Foto
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#cancelar">Cancelar</a>
            <RouterLink class="btn btn-primary" :to="{ name: 'produtos' }" @click="handleCreate()">Cadastrar</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  