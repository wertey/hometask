<template>
  <div id="app">
    <HeaderTemplate></HeaderTemplate>
    <AboutTemplate></AboutTemplate>
    <TeamTemplate></TeamTemplate>
    <ServiceTemplate></ServiceTemplate>
    <ClientTemplate></ClientTemplate>
    <WorkTemplate></WorkTemplate>
    <TestimonialsTemplate></TestimonialsTemplate>
    <ContactTemplate></ContactTemplate>
    <FooterTemplate></FooterTemplate>
  </div>
</template>

<script>

import HeaderTemplate from "../src/components/HeaderTemplate";
import AboutTemplate from "../src/components/AboutTemplate";
import TeamTemplate from "../src/components/TeamTemplate";
import ServiceTemplate from "../src/components/ServiceTemplate";
import ClientTemplate from "../src/components/ClientTemplate";
import WorkTemplate from "../src/components/WorkTemplate";
import TestimonialsTemplate from "../src/components/TestimonialsTemplate";
import ContactTemplate from "../src/components/ContactTemplate";
import FooterTemplate from "../src/components/FooterTemplate";


export default {
  name: 'app',
  components: {
    HeaderTemplate,
    AboutTemplate,
    TeamTemplate,
    ServiceTemplate,
    ClientTemplate,
    WorkTemplate,
    TestimonialsTemplate,
    ContactTemplate,
    FooterTemplate,
  },
};



</script>

<style lang="scss">

@import "../src/assets/scss/core.scss";



</style>
