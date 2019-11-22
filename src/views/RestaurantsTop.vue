<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <RestaurantTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTopCard from "./../components/RestaurantTopCard";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantTopCard
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data, statusText } = await restaurantsAPI.getTopRestaurants();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得熱門餐廳，請稍後再試"
        });
      }
    }
  }
};
</script>