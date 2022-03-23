<template>
  <div class="submenu-wrapper">
    <ul class="submenu-items">
      <li>
        <router-link
          class="gallery-items-link"
          to="/gallery/:id">
          meble systemowe
        </router-link>
      </li>
      <li>
        <router-link class="gallery-items-link" to="/gallery/:id/kuchnie_zabudowy">
          kuchnie zabudowy
        </router-link>
      </li>
      <li>
        <router-link class="gallery-items-link" to="/gallery/:id/szafy_przesuwne">
          szafy przesuwne
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.submenu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.submenu-items {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.submenu-items li{
  cursor: pointer;
  list-style: none;

  .gallery-items-link{
    cursor: pointer;
    list-style: none;
    color: #e29578;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
    color: #e0663a;
    }
  }

  .router-link-active{
    font-weight: 700;
  }
}
</style>
