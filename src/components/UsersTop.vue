<template>
  <div class="col-3">
    <a href="#">
      <img
        :src="user.image"
        width="140px"
        height="140px"
      >
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge badge-secondary">
    追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="unfollowed"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="followed"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props:{
    initialUser:{
      type: Object,
      required: true
    }
  },
  data(){
    return {
      user: this.initialUser
    }
  },
  methods:{
    followed(){
      this.user={
        ...this.user,
        isFollowed:true,
        FollowerCount: this.user.FollowerCount+1
      }
    },
    unfollowed(){
      this.user={
        ...this.user,
        isFollowed:false,
        FollowerCount: this.user.FollowerCount-1
      }
    }
  }
}
</script>