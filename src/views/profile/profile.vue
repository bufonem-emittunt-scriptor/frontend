<template>
  <div>
    <MuseumProfile v-if="profileType === 'museum'" :profile="profile" />
    <MemberProfile v-if="profileType === 'member'" :profile="profile" />
    <VolunteerProfile v-if="profileType === 'volunteer'" :profile="profile" />
  </div>
</template>

<script>
  import MemberProfile from './member.vue';
  import MuseumProfile from './museum.vue';
  import VolunteerProfile from './volunteer.vue';

  export default {
    components: {
      MemberProfile,
      MuseumProfile,
      VolunteerProfile
    },
    computed: {
      id() {
        return this.$route.params.id;
      },
      profile() {
        return this.$store.state.profile.profile;
      },
      profileType() {
        return this.profile.role;
      },
      mounted() {
        this.$store.dispatch('getProfile', this.id);
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
