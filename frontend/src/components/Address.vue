<template>
    <div id="addressArea">
        <top-header message="주소검색"></top-header>
        <div id="addressSearch">
            <div id="localAddress">
                <div>관악구 1001-12</div>
            </div>
            <div id="search">
                <input>
                <div>검색</div>
            </div>
        </div>
        <div id="addressListArea">
            <div class="listArea">
                <div>주소1</div>
            </div>
            <div class="listArea top-10">
                <div>주소1</div>
            </div>
            <div class="listArea top-10">
                <div>주소1</div>
            </div>
            <div class="listArea top-10">
                <div>주소2</div>
            </div>
            <div class="listArea top-10">
                <div>주소3</div>
            </div>
            <div class="listArea top-10">
                <div>주소4</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Address'
}
</script>
<style scoped>
.top-10 {
    margin-top: 10px;
}
#addressArea {
    width: 100%;
    height: auto;
    margin-top: 70px;
}
#localAddress {
    padding: 0 20%;
}
#localAddress > div:nth-child(1) {
    text-align: center;
}
#addressSearch {
    width: 100%;
    height: auto;
    padding: 0 10px;
}
#search {
    position: relative;
    width: 100%;
    height: 40px;
    margin-top: 10px;
}
#search > input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #000000;
    text-align: center;
    font-size: 15px;
}
#search > div:nth-child(2) {
    position: absolute;
    top: 4.5px;
    right: 5px;
    width: 45px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #3743ce;
    color: #ffffff;
}
#addressListArea {
    margin-top: 15px;
    width: 100%;
    height: auto;
    padding: 0 20px;
}
.listArea {
    width: 100%;
    height: 35px;
}
.listArea > div:nth-child(1) {
    width: 100%;
    height: 100%;
    text-align: center;
    border-bottom: 1px solid #000000;
    line-height: 35px;
}
</style>
