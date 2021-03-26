<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/gerentes" class="nav-link">Gerentes</router-link>
    </li>
    <li class="nav-item">
      <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
    </li>
  </ul>
</template>

<script>
import { logoutMixin } from "@/mixins.js";
export default {
  name: "BarraLogado",
  mixins: [logoutMixin]
};
</script>