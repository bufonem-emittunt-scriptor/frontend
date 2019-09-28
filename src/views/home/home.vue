<template>
  <div>
    <MemberHome v-if="userType === 'member'" />
    <VolunteerHome v-if="userType === 'volunteer'" />
    <MuseumHome v-if="userType === 'museum'" />
    <DefaultHome v-if="userType === 'default'" />
  </div>
</template>

<script>
  import MuseumHome from './museum.vue';
  import VolunteerHome from './volunteer.vue';
  import MemberHome from './member.vue';
  import DefaultHome from './default.vue';

  export default {
    computed: {
      userType() {
        return this.$store.state.gate.userType;
      }
    },
    components: {
      MemberHome,
      MuseumHome,
      VolunteerHome,
      DefaultHome
    }
  }
</script>
