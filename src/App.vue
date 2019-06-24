<template>
  <div id="app">
    <HeaderTemplate></HeaderTemplate>
    <AboutTemplate></AboutTemplate>
    <TeamTemplate></TeamTemplate>
  </div>
</template>

<script>

import HeaderTemplate from "../src/components/HeaderTemplate";
import AboutTemplate from "../src/components/AboutTemplate";
import TeamTemplate from "../src/components/TeamTemplate";


export default {
  name: 'app',
  components: {
    HeaderTemplate,
    AboutTemplate,
    TeamTemplate,
  },
};
</script>

<style lang="scss">

@import "../src/assets/scss/core.scss";



</style>
