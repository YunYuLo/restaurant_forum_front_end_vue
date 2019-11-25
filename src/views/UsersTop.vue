<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <UsersTop v-for="user in users" :key="user.id" :initial-user="user" />
      </div>
    </template>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs";
import UsersTop from "./../components/UsersTop";
import Spinner from "./../components/Spinner";

import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    UsersTop,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data, statusText } = await usersAPI.getTopUsers();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          type: "error",
          title: "無法取得美食達人，請稍後再試"
        });
      }
    }
  }
};
</script>