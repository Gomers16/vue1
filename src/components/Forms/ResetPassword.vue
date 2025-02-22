<!-- src/components/ResetPasswordForm.vue -->
<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/icono-candado.png" alt="Candado" class="lock-icon" />
      <form @submit.prevent="handleReset">
        <label>Email Address:</label>
        <input type="email" v-model="email" required />

        <button type="submit">RECUPERAR CONTRASEÑA</button>
      </form>

      <!-- Botón para regresar al inicio -->
      <button @click="goHome" class="home-button">🏠 Volver al Inicio</button>
    </div>

    <!-- Texto fuera de la caja -->
    <p class="signup-text">
      ¿No tienes una cuenta? <a href="#" @click.prevent="goToRegister">Regístrate ahora</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleReset() {
      console.log("Email para recuperación:", this.email);
      alert("Se ha enviado un correo para restablecer la contraseña.");
    },
    goHome() {
      this.$router.push("/");
    },
    goToRegister() {
      this.$router.push("/register");
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
  cursor: pointer;
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
.lock-icon {
  width: 200px; /* Ajusta este valor si el texto original tenía otro tamaño */
  height: auto;
  display: block;
  margin: 0 auto 10px auto; /* Centra la imagen y agrega espacio debajo */
}

</style>
