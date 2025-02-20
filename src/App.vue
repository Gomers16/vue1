<!-- src/App.vue -->
<script setup>
import { useRoute } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const route = useRoute();
</script>

<template>
  <div id="app">
    <header v-if="!['/login', '/reset-password'].includes(route.path)">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="COVAR" />

        <nav>
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/servicios">Servicios</RouterLink>
          <RouterLink to="/precios">Precios</RouterLink>
        </nav>
      </div>

      <!-- Mini menú alineado a la derecha -->
      <nav class="mini-menu">
        <RouterLink to="/login">Iniciar Sesión</RouterLink>
        <RouterLink to="/register">Registrarse</RouterLink>
        <RouterLink to="/reset-password">Recuperar Contraseña</RouterLink>
      </nav>
    </header>

    <!-- Aquí se cargan las vistas -->
    <main :class="{ 
      'login-background': route.path === '/login', 
      'reset-password-background': route.path === '/reset-password' 
    }">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Asegura que el fondo cubra toda la pantalla */
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Mini menú alineado a la derecha */
.mini-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  gap: 20px;
  position: absolute;
  top: 0;
  right: 0;
}

.mini-menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.mini-menu a:hover {
  color: #4da6ff;
}

/* Fondo para la vista de login */
.login-background {
  background: url("@/assets/fondo-login.jpeg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Fondo para la vista de restablecer contraseña */
.reset-password-background {
  background: url("@/assets/fondo-reset-password.jpeg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
