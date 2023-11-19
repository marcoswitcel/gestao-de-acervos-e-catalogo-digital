<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const links =  ref([ 'home', 'login', 'dashboard', 'produtos' ]);
const route = useRoute();
const pathName =  computed(() => route.name );

function subMenu(linkName: string, currentPathName: string) {
  return currentPathName.startsWith(linkName);
}

</script>

<template>
  <header v-if="true">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <div class="d-flex vh-100">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Marca</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item" v-for="linkName of links" :key="linkName">
          <RouterLink  class="nav-link link-dark" :class="{ active:  linkName === pathName || subMenu(linkName, pathName) }" :to="{ name: linkName }">
            {{ linkName }}
          </RouterLink>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong id="display-login-name">Nome Placeholder</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li>
            <a class="dropdown-item" href="../login.html">Deslogar</a>
            <RouterLink  class="nav-link link-dark" :to="{ name: 'login' }">Deslogar</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    
    <RouterView />
  </div>
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: 5px;
  left: calc(50vw - 75px);
  width: fit-content;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 3px;
}
nav {
}
nav a {
  margin: 0.3em;
  vertical-align: middle;
}
</style>
