<template>
    <div id="topHeader">
      <div id="topHeaderArea">
        <div class="menuButton" @click="menuButton"></div>
        <h1>{{ message }}</h1>
        <div id="backButton" @click="backButton">back</div>
      </div>
      <div id="menuArea" :class="{active: menuOnOff}">
        <div id="menuTop">
          <div class="menuButton right" @click="menuButton"></div>
        </div>
        <div id="userInfoArea">
          <div id="userLogo"></div>
          <div id="userName">
            <div>Test User</div>
          </div>
        </div>
        <div id="menuListArea">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'TopHeader',
  props: ['message'],
  data () {
    return {
      menuOnOff: false
    }
  },
  methods: {
    menuButton () {
      this.menuOnOff ? this.menuOnOff = false : this.menuOnOff = true
    },
    backButton () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
#topHeader {
  width: 100%;
  height: 100%;
}
#topHeaderArea {
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
}
.menuButton {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
    background-color: #403d3d;
}
.menuButton.right {
  left: auto;
  right: 0;
}
#backButton {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    right: 0;
    background-color: #c8c8c8;
}
h1 {
    width: 100%;
    height: 100%;
    background-color:blue;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    line-height: 50px;
}
#menuArea {
  position: absolute;
  top: 0;
  left: -90%;
  width: 90%;
  height: 100%;
  background-color: #c8c8c8;
  -webkit-transition:left 1s;
  transition:left 1s;
}
#menuArea.active {
  left: 0%;
}
#menuTop {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
#userInfoArea {
  width: 100%;
  height: 100px;
  padding: 10px;
}
#userLogo {
  width: 80px;
  height: 80px;
  background-color: steelblue;
  border-radius: 50%;
  float: left;
}
#userName {
  position: relative;
  width: 60%;
  height: 100%;
  float: left;
}
#userName > div:nth-child(1) {
  position: absolute;
  bottom: 0;
  left: 10px;
  font-size: 20px
}
#menuListArea {
  width: 100%;
  height: auto;
  padding: 10px 10px;
}
#menuListArea > div:nth-child(n) {
  width: 100%;
  height: 120px;
  border-top: 1px solid #000000;
  padding: 10px 0;
}
#menuListArea > div:nth-child(n) > div:nth-child(1) {
  width: 100%;
  height: 60px;
  background-color: aqua;
}
#menuListArea > div:nth-child(n) > div:nth-child(2) {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  background-color: #403d3d;
}
</style>
