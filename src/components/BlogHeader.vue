<template>
  <header class="nav">
    <nav class="navbar">
      <div class="logo">
          <h1>Felipe Valdez</h1>
          <button>BLOG</button>
      </div>
      <div class="spacer" />
      <div class="navbar-menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <a href="https://felipevaldez.netlify.app/">Portfólio</a>
          </li>
        </ul>
      </div>

      <div class="spacer-button" />

      <Drawer class="drawer" click="{this.overlayToggleClickHandler}" />
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px 10px -2px gray;
}

.nav .navbar {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.navbar .logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navbar .logo h1 {
  color: #6854ea;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 0;
}

.navbar .logo button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #6854ea;
  margin-left: 10px;
  color: #fff;
  /* font-size: 1rem; */
  font-weight: 700;
  cursor: pointer;
}

.navbar-menu {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar-menu ul {
  margin: 0;
  padding: 0;
  display: flex;
}

@media (max-width: 610px) {
  .navbar-menu ul {
    display: none;
  }
}

.navbar-menu ul li {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 0.9rem;
  margin: 0;
}

.navbar-menu ul li a {
  text-decoration: none;
  cursor: pointer;
  color: #6854ea;
  font-family: Open Sans, sans-serif;
  font-weight: 700;
  transition: 0.5s;
  font-size: 1.1em;
}

.navbar-menu ul li a:hover {
  opacity: 0.8;
}

.navbar-menu ul li a:active {
  color: #6854ea;
}

.spacer {
  flex: 1;
}

@media (max-width: 610px) {
  .spacer {
    display: none;
  }
}

@media (max-width: 610px) {
  .spacer-button {
    flex: 1;
  }
}
</style>