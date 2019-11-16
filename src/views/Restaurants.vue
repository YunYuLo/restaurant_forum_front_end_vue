<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'

const dummyData = {
  restaurants: [
    {
            "id": 9,
            "name": "Susan Johnston",
            "tel": "260-837-0348 x3437",
            "address": "0802 Tillman Crossing",
            "opening_hours": "08:00",
            "description": "Aspernatur aliquam totam pariatur ut mollitia odio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.270646115002016",
            "viewCounts": 8,
            "createdAt": "2019-07-30T16:24:55.434Z",
            "updatedAt": "2019-11-15T20:26:34.974Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Odessa Larkin",
            "tel": "516-154-3810 x11365",
            "address": "1044 Dayana Gardens",
            "opening_hours": "08:00",
            "description": "Similique eum laborum molestiae. Temporibus natus ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.38474595344819",
            "viewCounts": 11,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-11-15T20:26:43.267Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-09-26T15:11:56.408Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Howell Towne",
            "tel": "(221) 302-7497 x511",
            "address": "0858 Koss Via",
            "opening_hours": "08:00",
            "description": "laboriosam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.054925465974634",
            "viewCounts": 1678,
            "createdAt": "2019-07-30T16:24:55.434Z",
            "updatedAt": "2019-11-15T20:42:41.616Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 13,
            "name": "Curt Corkery",
            "tel": "377-916-6821 x9397",
            "address": "3757 Alfonzo Corner",
            "opening_hours": "08:00",
            "description": "enim",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.39164947251193",
            "viewCounts": 1,
            "createdAt": "2019-07-30T16:24:55.435Z",
            "updatedAt": "2019-10-03T09:25:54.492Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-09-26T15:11:56.408Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Clair Herzog",
            "tel": "868-946-9602 x92653",
            "address": "65909 Marcelo Lock",
            "opening_hours": "08:00",
            "description": "Magni enim similique et doloribus fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.15023188933482",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.434Z",
            "updatedAt": "2019-08-25T07:50:39.498Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 21,
            "name": "Clovis Mayert",
            "tel": "1-292-930-4113 x0577",
            "address": "3255 Streich Inlet",
            "opening_hours": "08:00",
            "description": "Nihil occaecati consectetur explicabo sint nobis b",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313",
            "viewCounts": 13,
            "createdAt": "2019-07-30T16:24:55.436Z",
            "updatedAt": "2019-11-15T20:14:02.479Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 14,
            "name": "Miss Reilly Gibson",
            "tel": "(122) 940-8546",
            "address": "5145 Donnelly Ville",
            "opening_hours": "08:00",
            "description": "omnis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.48910140868465",
            "viewCounts": 9,
            "createdAt": "2019-07-30T16:24:55.435Z",
            "updatedAt": "2019-11-15T20:25:26.186Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 16,
            "name": "Joaquin Walsh",
            "tel": "(359) 745-0699 x3250",
            "address": "8271 McKenzie Ridges",
            "opening_hours": "08:00",
            "description": "Molestiae sed ut dolores neque optio et expedita.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.407932234411838",
            "viewCounts": 1,
            "createdAt": "2019-07-30T16:24:55.435Z",
            "updatedAt": "2019-10-03T09:26:18.620Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-09-26T15:11:56.408Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 15,
            "name": "Gail Hamill II",
            "tel": "238-418-9715 x21072",
            "address": "524 Fritsch Square",
            "opening_hours": "08:00",
            "description": "Quis incidunt excepturi vitae similique aliquam su",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.64565482384884",
            "viewCounts": 1,
            "createdAt": "2019-07-30T16:24:55.435Z",
            "updatedAt": "2019-10-03T09:26:48.641Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 18,
            "name": "Esther Herzog",
            "tel": "497-524-7986",
            "address": "218 Cummings Station",
            "opening_hours": "08:00",
            "description": "Quis amet sint et libero unde.\nInventore et incidu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.71540496895199",
            "viewCounts": 1,
            "createdAt": "2019-07-30T16:24:55.436Z",
            "updatedAt": "2019-10-03T09:29:33.975Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-07-30T16:24:55.429Z",
                "updatedAt": "2019-07-30T16:24:55.429Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
  ],
  categories: [
    {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-07-30T16:24:55.429Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-07-30T16:24:55.429Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-07-30T16:24:55.429Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-07-30T16:24:55.429Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-07-30T16:24:55.429Z"
        },
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-09-08T08:51:28.715Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2019-07-30T16:24:55.429Z",
            "updatedAt": "2019-09-26T15:11:56.408Z"
        },
        {
            "id": 31,
            "name": "新疆料理",
            "createdAt": "2019-09-26T19:58:57.874Z",
            "updatedAt": "2019-09-26T19:58:57.874Z"
        }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ''
}
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  data () {
    return {
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      restaurants: [],
      totalPage: undefined
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>