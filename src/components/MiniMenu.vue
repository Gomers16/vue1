<template>
    <nav class="mini-menu">
      <router-link to="/login">Iniciar Sesión</router-link>
      <router-link to="/register">Registrarse</router-link>
      <router-link to="/reset-password">Recuperar Contraseña</router-link>
    </nav>
  </template>
  
  <style scoped>
  .mini-menu {
    display: flex;
    justify-content: flex-end; /* Alinea los elementos a la derecha */
    align-items: center; /* Centra verticalmente */
    background: rgba(0, 0, 0, 0.8);
    padding: 10px 20px;
    gap: 20px;
    position: absolute;
    top: 0;
    right: 0;
    width: auto; /* Ajusta solo al contenido */
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
  </style>
