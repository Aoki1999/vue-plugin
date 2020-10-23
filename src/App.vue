<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" @click="a"> -->
    <p @click="toast">toast</p>
    <p @click="Confirm">Confirm</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    Confirm(){
      this.$confirm({
        // title:'',
        titleColor:'black',
        callback:()=>{
          this.$toast({
            text:'确定'
          })
        },
        cancel:()=>{
          this.$toast({
            text:'取消'
          })
        }
      })
    },
    toast(){
      this.$toast({
        text:'sucess',
        callback:()=>{
          console.log('end')
        },
        duration:1001
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: flex;
    box-sizing: border-box;
  }
  .flex-1 {
    width: 100%;
    -webkit-box-flex: 1;
    flex: 1;
  }
  .flex-2 {
    -webkit-box-flex: 2;
    flex: 2;
  }
  
.flex-3 {
  -webkit-box-flex: 3;
  flex: 3;
}
</style>
