<template>
  <div id="app">

    <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    ></badge>

    <callout
      :slots="{
        text: 'Address or Intersection Found',
      }"
    />

    <vertical-table
      class="margin-20 margin-bottom-60 medium-8"
      :slots="{
        fields: [
          {
            label: 'field1',
            value: 'field1 value',
          },
          {
            label: 'field2',
            value: 'field2 value',
          },
        ]
      }"
      :options="{
        id: 'verticalTableId',
        externalLink: {
          action: function() {
            return 'external link - ';
          },
          // action: 'See more',
          name: 'Atlas',
          href: 'https://atlas.phila.gov'
        }
      }"
    />

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    Badge: () => import(/* webpackChunkName: "pvc_Badge" */'@cityofphiladelphia/phila-vue-comps/src/components/Badge.vue'),
    Callout: () => import(/* webpackChunkName: "pvc_Callout" */'@cityofphiladelphia/phila-vue-comps/src/components/Callout.vue'),
    VerticalTable: () => import(/* webpackChunkName: "pvc_VerticalTable" */'@cityofphiladelphia/phila-vue-comps/src/components/VerticalTable.vue'),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
