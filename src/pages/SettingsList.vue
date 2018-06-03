<template>
    <div class="container">
        <h2>List of Settings in address <code>{{addressNamespace}}</code></h2>
        <div class="columns">
            <div class="column col-6">
                <div class="loading loading-lg" v-if="!this.$store.state.settings.length"></div>
                <setting v-for="(setting,k) in this.$store.state.settings"
                         v-bind:key="k"
                         v-bind:address="setting.address"
                         v-bind:data="setting.data"
                >
                </setting>
            </div>
        </div>
    </div>
</template>
<script>
import Setting from '../components/Setting.vue';

const addressNamespace = process.env.SETTINGS_ADDRESS_NAMESPACE;
export default {
  components: {
    setting: Setting,
  },
  computed: {
    addressNamespace() {
      return addressNamespace;
    },
  },
  mounted() {
    this.$store.dispatch('getSettings', '000000');
  },
};
</script>
