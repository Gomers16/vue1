<!-- src/views/RegisterView.vue -->
<template>
  <div class="login-container">
    <Register />
  </div>
</template>

<script>
import Register from "@/components/Forms/Register.vue";

export default {
  components: {
    Register,
  },
};
</script>

<style scoped>
/* Hace que el fondo cubra toda la pantalla */
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/fondo-login.jpeg") no-repeat center center fixed;
  background-size: cover;
}
</style>
