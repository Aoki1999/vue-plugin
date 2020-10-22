<template>
  <div>
    <transition name="slide">
      <div class="wrap" v-show="show">
        <div class="loading flex">
          <i>{{text}}</i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
    name:'test',
    data(){
        return{
            
        }
    },
    props:{
        show:{
            type:Boolean,
            default:false
        },
        text:{
            type:String,
            default:'toast'
        },
        duration:{
            type:Number,
            default:2000
        },
        callback:{
            type:Function,
            default:()=>{
                return function(){}
            }
        }
    },
    mounted(){
        this.autoClose()
    },
    methods:{
        autoClose(){
            if(clr){
                clearTimeout(clr)
            }
            var clr = setTimeout(() => {
                this.show = false
                this.callback()
            }, this.duration);
        }
    }
}
</script>
<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  margin: auto;
  display: table;
}
.loading {
  width: 100%;
  justify-content: center;
}
.loading i {
  font-style: normal;
  font-weight: normal;
  background: rgba(40, 40, 40, 0.8);
  line-height: 1.6;
  max-width: 85%;
  min-width: 100px;
  color: #fff;
  font-size: 14px;
  padding: 8px 20px;
  text-align: center;
  margin-top: -50px;
  border-radius: 4px;
  word-break:break-all
}
.slide-enter-active,
.slide-leave-active {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.slide-enter{
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
  opacity: 0;
}
.slide-leave-to {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
  opacity: 0;
}
</style>