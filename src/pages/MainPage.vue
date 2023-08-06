<template>
  <div class="hello">
    <img alt="logo" src="@/assets/img/patmat01.jpeg">
    <h1>{{ msg }}</h1>
    <div>
      <el-button @click="$router.push('/result')">
        누르면 Result Page로 이동
      </el-button>
    </div>
    <div>
      <el-button @click="getTest">
        API 호출 테스트
      </el-button>
    </div>
  </div>
</template>

<script>
import * as axios from '@/api/axios'

export default {
  name: 'MainPage',
  props: {

  },
  data() {
    return {
      msg: '패트와 메트'
    }
  },
  methods: {
    getTest() {
      axios.getTest()
          .then((res) => {
            alert(JSON.stringify(res.data));
          })
          .catch((err) => {
            console.log(err);
          })

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
