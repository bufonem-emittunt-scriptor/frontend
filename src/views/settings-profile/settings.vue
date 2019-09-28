<template>
  <div>
    <MemberSettings v-if="userType === 'member'" />
    <VolunteerSettings v-if="userType === 'volunteer'" />
  </div>
</template>

<script>
  import MemberSettings from './member.vue';
  import VolunteerSettings from './volunteer.vue';

  export default {
    computed: {
      userType() {
        return this.$store.state.gate.userType;
      }
    },
    components: {
      MemberSettings,
      VolunteerSettings
    }
  }
</script>
