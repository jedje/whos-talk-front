<template>
  <div class="hello">
    <img alt="logo" src="@/assets/img/patmat01.jpeg">
    <h1>{{ msg }}</h1>
    <el-button @click="$router.push('/result')">
      누르면 Result Page로 이동
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {

  },
  data() {
    return {
      msg: '패트와 메트'
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
