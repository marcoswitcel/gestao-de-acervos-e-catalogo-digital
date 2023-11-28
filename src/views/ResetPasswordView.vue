<script setup lang="ts">
import { ref } from 'vue';

const email = ref("");

function handleLogin($event: Event) {
  $event.preventDefault();
  window.alert("E-mail enviado para " + email.value + "!\n[Ainda não enviando e-mails]");
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center vh-100 align-items-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form class="pb-5" method="get" action="./dashboard" @submit="handleLogin">
          <h1>Catálogo Digital</h1>
          <legend class="h2 mb-3">Digite seu Login</legend>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Resetar senha: </label>
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
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Enviar E-mail</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
