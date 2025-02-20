<!-- src/components/LoginForm.vue -->
<template>
  <div class="login-container">
    <div class="login-box">
      <h2>LOGIN</h2>
      <form @submit.prevent="handleLogin">
        <label>Email Address:</label>
        <input type="email" v-model="email" required />
  
        <label>Password:</label>
        <input type="password" v-model="password" required />
  
        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
  
        <button type="submit">LOGIN</button>
      </form>
      
      <!-- Botón para regresar al inicio -->
      <button @click="goHome" class="home-button">🏠 Volver al Inicio</button>
    </div>

    <!-- Mover el texto afuera de la caja del login -->
    <p class="signup-text">
      Don't have an account? <a href="#">Sign Up now</a>
    </p>
  </div>
</template>

<script>
export default {
data() {
  return {
    email: "",
    password: "",
  };
},
methods: {
  handleLogin() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    alert("Login clicked");
  },
  goHome() {
    this.$router.push("/");
  },
},
};
</script>

<style scoped>
/* Contenedor para centrar la caja y el texto */
.login-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

/* Caja de login */
.login-box {
background: rgba(255, 255, 255, 0.171);
padding: 2rem;
border-radius: 10px;
text-align: center;
width: 320px;
color: white;
}

h2 {
margin-bottom: 20px;
}

input {
width: 100%;
padding: 10px;
margin: 8px 0;
border-radius: 5px;
border: none;
}

button {
width: 100%;
padding: 10px;
margin-top: 10px;
border: none;
border-radius: 5px;
background: white;
color: black;
font-weight: bold;
cursor: pointer;
}

.forgot-password {
text-align: right;
font-size: 0.8rem;
margin-bottom: 10px;
}

a {
color: #4da6ff;
}

/* Estilos del botón de Home */
.home-button {
margin-top: 15px;
background: #555;
color: white;
padding: 10px;
border-radius: 5px;
}

/* Estilos para el texto fuera de la caja */
.signup-text {
text-align: center;
margin-top: 15px;
color: white;
font-size: 0.9rem;
}

.signup-text a {
color: #4da6ff;
text-decoration: none;
font-weight: bold;
}

.signup-text a:hover {
text-decoration: underline;
}
</style>
