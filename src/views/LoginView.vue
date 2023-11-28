<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import { ref } from 'vue';
import { TokenManager } from '@/utilities';
import { $api } from '@/utilities/api';

const $router = useRouter();

const email = ref("");
const password = ref("");

function handleLogin($event: Event) {
  $event.preventDefault();
  
  $api.post<{ email: string, password: string }>('api/v1/users/validate', { email: email.value, password: password.value })
    .then((response) => {
      if (response.data) {
        TokenManager.set({ email: email.value });
        $router.push({ name: 'dashboard' });
      } else {
        alert("Usuário não encontrado. O Admin cadastrou apenas um usuário.");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Erro ao tentar autenticar.");
    })
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center vh-100 align-items-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form class="pb-5" method="get" action="./dashboard" @submit="handleLogin">
          <h1>Catálogo Digital</h1>
          <legend class="h2 mb-3">Login</legend>
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
              name="password"
              v-model="password"              
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <RouterLink :to="{ name: 'reset-password' }">Esqueci minha senha</RouterLink>
            <button type="submit" class="btn btn-primary">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
