<template>
  <button class="gen-btn">click me</button>
</template>

<style lang="scss">
@import '../colorVariable.scss';
.gen-btn {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: .8rem;
  width: 100px;
  height: 35px;
  border: 2px solid $main-color;
  color: $main-text-color;
  background: $main-color;
  border-radius: 8px;
  text-transform: uppercase;

  transition: all .5s linear;
}
.gen-btn:hover{
    background: transparent;
    color: $main-color;
  }
</style>
