<template>
  <div class="container py-5">
    <ProfileForm @after-submit="handleAfterSubmit" />
  </div>
</template>
<script>
/* eslint-disable */
import ProfileForm from "./../components/ProfileForm";
export default {
  components: {
    ProfileForm
  },
  methods: {
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>
