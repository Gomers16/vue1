<!-- src/components/Register.vue -->
<template>
  <div class="register-container">
    <div class="register-box">
      <h2>REGISTER</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-row">
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" v-model="firstName" required />
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" v-model="lastName" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label>Username:</label>
            <input type="text" v-model="username" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Password:</label>
            <input type="password" v-model="password" required />
          </div>
          <div class="form-group">
            <label>Confirm Password:</label>
            <input type="password" v-model="confirmPassword" required />
          </div>
        </div>

        <button type="submit">REGISTER</button>
      </form>

      <!-- Botón para regresar al inicio -->
      <button @click="goHome" class="home-button">🏠 Volver al Inicio</button>
    </div>

    <p class="login-text">
      Already have an account? <a href="#" @click.prevent="goToLogin">Login here</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Registering:", this.firstName, this.lastName, this.email, this.username);
      alert("Registration Successful");
    },
    goHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Caja de registro */
.register-box {
  background: rgba(255, 255, 255, 0.171);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  color: white;
}

/* Fila de formulario (dos elementos por fila) */
.form-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
}

/* Estilos generales de los inputs */
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

/* Botón */
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

/* Botón de Home */
.home-button {
  margin-top: 15px;
  background: #555;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

/* Texto de login */
.login-text {
  text-align: center;
  margin-top: 15px;
  color: white;
  font-size: 0.9rem;
}

.login-text a {
  color: #4da6ff;
  text-decoration: none;
  font-weight: bold;
}

.login-text a:hover {
  text-decoration: underline;
}
</style>
