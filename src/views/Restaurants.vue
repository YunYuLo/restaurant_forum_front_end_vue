<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <RestaurantsNavPills :categories="categories" />

      <div class="row">
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <RestaurantsPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />

      <div v-if="restaurants.length <1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import Spinner from "./../components/Spinner";

//include API
import restaurantsAPI from "./../apis/restaurants";
//include Toast
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      categories: [],
      categoryId: "",
      currentPage: 1,
      restaurants: [],
      totalPage: 0,
      isLoading: true
    };
  },
  created() {
    const { page, categoryId } = this.$route.query;
    this.fetchRestaurants({ page, categoryId });
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to, from, next) {
    // console.log("to", to);
    // console.log("from", from);
    const { page, categoryId } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },
  methods: {
    //帶入預設值
    async fetchRestaurants({ page = 1, categoryId = "" }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // console.log("response", response);
        const { data, statusText } = response;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
        this.isLoading = false;
      } catch (error) {
        // console.log("error", error);
        this.isLoading = false;
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>