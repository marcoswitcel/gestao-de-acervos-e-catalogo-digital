<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { catalogosRepository } from '@/repositories';
import { produtosStore } from '@/stores/produtos';

const route = useRoute();

const catalogo = ref<Catalogo | null>(null);

catalogosRepository.findById(route.params.id)
  .then(entry => {
    catalogo.value = entry;
  });

</script>

<template>
  <div class="container">
    <div class="row" v-if="false">
      <div class="col-12 mt-5">
        <h1>Pagina de compartilhamentos!</h1>
        <p>ID: {{ route.params.id }}.</p>
        <p v-if="catalogo">
          {{ JSON.stringify(catalogo)  }}
        </p>
        <p v-else>Não encontrado</p>
      </div>
    </div>
    <div class="row" v-if="catalogo">
        <div class="col-12 mt-5">
            <h1>{{ catalogo.title }}</h1>
            <p>
              {{ catalogo.description  }}
            </p>
        </div>
    </div>
    <div class="row produtos" id="linhaProdutos">
      <div class="col-4 mb-3" v-for="item of produtosStore" :key="item.title">
        <div class="card">
          <img src="@/assets/placeholder.png" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <a href="#" class="btn btn-primary">Ver detalhes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
