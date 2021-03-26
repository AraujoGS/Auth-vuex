<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="loginForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha:</label>
        <input type="password" name="senha" class="form-control" v-model="user.senha" />
      </div>
      <p class="alert alert-danger" v-if="mensagemErro">{{mensagemErro}}</p>
      <button class="btn btn-primary brn-block mr-1">Logar</button>
      <router-link :to="{name:'novo.usuario'}">Não possui cadastro, cadastre-se!</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        senha: ""
      },
      mensagemErro: ''
    };
  },
  methods: {
    loginForm() {
      this.$store
        .dispatch("login", this.user)
        .then(() => {          
          this.mensagemErro = "";
          this.$router.push({ name: "gerentes" })
        })
        .catch(erro => {
          if(erro.request.status === 401){
            this.mensagemErro = 'Login ou senha inválido(s)';
          }
        });
    }
  }
};
</script>