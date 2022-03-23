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
  border: 2px solid #aa6a16;
  color: $main-text-color;
  background: $subtext-color;
  border-radius: 8px;
  text-transform: uppercase;

  transition: all .5s linear;
}
.gen-btn:hover{
    background: transparent;
    color: $subtext-color;
  }
</style>
