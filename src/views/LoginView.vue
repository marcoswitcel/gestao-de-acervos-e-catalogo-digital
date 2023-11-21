<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { TokenManager } from '@/utilities';

const $router = useRouter();

const email = ref("");

function handleLogin() {
  
  TokenManager.set({ email: email.value });
  
  $router.push({ name: 'dashboard' });
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center vh-100 align-items-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form class="pb-5" method="get" action="./dashboard" @submit="handleLogin">
          <legend class="h2 mb-3">Login Sistema de Cadastro</legend>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Login: </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="login"
              placeholder="Digite o seu login"
              autocomplete="off"
              required
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha: </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Digite a sua senha"
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <a href="#nao-feito-ainda">Esqueci minha senha</a>
            <button type="submit" class="btn btn-primary">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
