<template>
  <div class="reset-password-container">
    <div class="reset-password-card">
      <font-awesome-icon icon="lock" class="lock-icon" />
      <h2>RECUPERAR CONTRASEÑA</h2>
      <label for="new-password">Nueva Contraseña:</label>
      <input type="password" id="new-password" v-model="newPassword" />
      <label for="repeat-password">Repetir Contraseña:</label>
      <input type="password" id="repeat-password" v-model="repeatPassword" />
      <button @click="resetPassword">RESTABLECER CONTRASEÑA</button>
      <router-link to="/login">INICIAR SESIÓN</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: '',
      repeatPassword: ''
    };
  },
  methods: {
    resetPassword() {
      if (this.newPassword === this.repeatPassword) {
        alert('Contraseña restablecida correctamente');
      } else {
        alert('Las contraseñas no coinciden');
      }
    }
  }
};
</script>

<style scoped>
.reset-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: none; /* Mantiene el fondo original */
}

.reset-password-card {
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
}

.lock-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
