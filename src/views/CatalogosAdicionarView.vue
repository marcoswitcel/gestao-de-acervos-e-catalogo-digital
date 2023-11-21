<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { gerarLink } from '@/utilities';
import { catalogosRepository } from '@/repositories';

const $router = useRouter();
const route = useRoute();

let updating = ref(false);

const form = ref<HTMLFormElement | null>(null);
const entity = ref<Catalogo>({
  title: '',
  // description,
  publicado: true,
  id: '',
  itens: [],
});

function handleCreate(form: HTMLFormElement | null) {
  if (form === null) return;

  if (!form.reportValidity()) return;

  if (updating.value) {
    catalogosRepository.updateById(route.params.id, entity.value);
  } else {
    catalogosRepository.insert({
      title: entity.value.title,
      description: entity.value.description,
      publicado: entity.value.publicado,
      id: entity.value.id,
      itens: [], // @todo João, implementar aqui
    });
  }


  $router.push({ name: 'catalogos'});
}

function handleSubmit ($event: Event) {
  $event.preventDefault()
}

if (route.params.id) {
  catalogosRepository.findById(route.params.id)
    .then((catalogo) => {
      if (catalogo) {
        updating.value = true;
        entity.value = catalogo
      }
    })
    .catch(() => $router.push({ name: 'catalogos' }))
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center vh-100 align-items-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form ref="form" class="pb-5" method="get" action="" @submit="handleSubmit($event)">
          <legend class="h2 mb-3">Cadastrar Novo Catalogo</legend>
          <div class="d-flex">
            <div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nome: </label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="nomeDoProduto"
                      placeholder="Nome do produto" v-model="entity.title" required>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Identificação: </label>
                <input type="text" class="form-control" id="exampleInputPassword1"
                    placeholder="Identificação do produto" name="identitificacaoDoProduto" v-model="entity.id" required>
              </div>
              <div class="mb-3">
                <input class="form-check-input" type="checkbox" name="rascunho" value="rascunho" id="flexCheckChecked" v-model="entity.publicado">
                <label class="form-check-label" for="flexCheckChecked">
                  Publicado
                </label>
              </div>
              <div class="mb-3" v-if="entity.publicado && entity.id">
                Link após salvar: <a :href="gerarLink(entity.id)" target="_blank">{{ gerarLink(entity.id)  }}</a>
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
          </div>
          <div class="d-flex justify-content-between">
            <RouterLink :to="{ name: 'catalogos' }">Cancelar</RouterLink>
            <button type="button" class="btn btn-primary" :to="{ name: 'produtos' }" @click="handleCreate(form)">
              {{ (updating) ? 'Atualizar' : 'Cadastrar'  }} 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  