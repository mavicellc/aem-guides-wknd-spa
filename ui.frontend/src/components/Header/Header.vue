<template>
  <header class="Header">
    <div class="Header-container">
      <div class="Logo">
        <img class="Logo-img" :src="require('../../assets/wknd-logo-dk_c1.png')" alt="WKND SPA" />
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .Header {
    width: 100%;
    position: fixed;
    top: 0;
    left:0;
    z-index: 99;
    background-color: $brand-primary;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  }

  .Header-container {
    display: flex;
    max-width: $max-width;
    margin: 0 auto;
    padding-left: $gutter-padding;
    padding-right: $gutter-padding;
  }

  .Logo {
    z-index: 100;
    display: flex;
    padding-top: $gutter-padding;
    padding-bottom: $gutter-padding;
  }

  .Logo-img {
    width: 100px;
  }
</style>
