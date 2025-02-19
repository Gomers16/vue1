<template>
  <div class="reset-container">
    <div class="reset-box">
      <img src="@/assets/icono-candado.png" alt="Lock Icon" class="lock-icon" />
      <h2>RESET PASSWORD</h2>
      <form @submit.prevent="handleReset">
        <label>New Password:</label>
        <input type="password" v-model="newPassword" required />

        <label>Repeat Password:</label>
        <input type="password" v-model="repeatPassword" required />

        <button type="submit">CHANGE PASSWORD</button>

        <!-- Enlace para volver al login -->
        <p class="login-again">
          <a href="#" @click="goToLogin">LOG IN AGAIN</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: "",
      repeatPassword: "",
    };
  },
  methods: {
    handleReset() {
      if (this.newPassword !== this.repeatPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Password changed successfully!");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.reset-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Caja de recuperación */
.reset-box {
  background: rgba(255, 255, 255, 0.171);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 320px;
  color: white;
  position: relative;
}

/* Icono del candado */
.lock-icon {
  width: 50px;
  margin-bottom: 10px;
}

/* Estilos de input y botones */
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
  background: #4da6ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

/* Enlace de volver al login */
.login-again {
  margin-top: 15px;
}

.login-again a {
  color: white;
  font-size: 0.9rem;
  text-decoration: none;
}

.login-again a:hover {
  text-decoration: underline;
}
</style>

