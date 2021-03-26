<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="enviaForm">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" class="form-control" v-model="user.nome" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha:</label>
        <input type="password" name="senha" class="form-control" v-model="user.senha" />
      </div>
      <button class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "NovoUsuario",
  data() {
    return {
      user: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    enviaForm() {      
      this.$http
      .post("auth/register", this.user)
      .then(resposta =>{
          console.log(resposta);  
          this.$router.push({name:'login'})
      })
      .catch(erro =>{
          console.log(erro);
      });
    }
  }
};
</script>