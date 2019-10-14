<template>
    <div id="hader-4">
        <div id="header-4-img1">
            <img src="../../assets/image/img7.png" style="height:100%;">
        </div>
        <div id="header-4-text">
            <img src="../../assets/image/text4.png" style="height:100%;">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header3'
}
</script>
<style scoped>
#hader-4 {
    width: 100%;
    height: 118px;
    margin-bottom: 10px;
    position: relative;
}
#header-4-img1 {
    position: absolute;
    top: 15px;
    width: 100%;
    height: 82px;
    text-align: center;
}
#header-4-text {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>
