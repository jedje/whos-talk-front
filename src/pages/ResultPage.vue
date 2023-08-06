<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> 안녕하세요 나는 리스트 페이지</p>
  </div>
</template>

<script>
export default {
  name: 'ResultPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
