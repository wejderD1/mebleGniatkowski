<template>
  <div class="menu-inner">
    <ul class="nav">
      <li class="nav-item">
        <router-link
          to="/"
          exact
          class="menu-text nav-link"
        >
          glówna
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/gallery/:id"
          class="menu-text nav-link"
        >
          galeria
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'contacts' }"
          class="menu-text nav-link"
        >
          kontakty
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../colorVariable.scss';
.menu-inner{
  display: flex;
  justify-content: flex-end;
  flex: 1 0 auto;
}

.nav-item .menu-text {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  color: $first-text-color;
  text-decoration: none;

  transition: all .5s linear;
}
.nav-item .menu-text:hover{
  color: $second-color;
  cursor: pointer;
}

.nav-item .menu-text:visited{
  color: $first-text-color;
}

.nav-item .menu-text:visited:hover{
  color: $second-color;
}

</style>
