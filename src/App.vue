<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { userStore } from './stores/user';
import { TokenManager } from './utilities';

const links =  ref([ 'dashboard', 'produtos', 'catalogos' ]);
const route = useRoute();
const pathName =  computed(() => route.name );

const isShowingMenu = ref(false);

function subMenu(linkName: string, currentPathName: string) {
  if (!linkName || !currentPathName) return false;

  return currentPathName.startsWith(linkName);
}

const styleDisplayed = {
  'position': 'absolute',
  'inset': 'auto auto 0px 0px',
  'margin': '0px',
  'transform': 'translate(0px, -26.4px)',
}

</script>

<template>
  <div class="d-flex vh-100">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px" v-if="pathName !== 'login'">
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
          :class="{ show: isShowingMenu}"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="() => isShowingMenu = !isShowingMenu"
        >
          <strong id="display-login-name">{{ userStore?.email }}</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" :class="{ show: isShowingMenu}" :style="styleDisplayed" aria-labelledby="dropdownUser2">
          <li>
            <RouterLink  class="nav-link link-dark" @click="() => { isShowingMenu = false; TokenManager.clear()}" :to="{ name: 'login' }">Deslogar</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    
    <RouterView />
  </div>
</template>

<style scoped>
</style>
