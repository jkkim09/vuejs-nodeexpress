<template>
    <div id="placeArea">
        <top-header message="스터디"></top-header>
        <div id="placeSearch">
            <div id="localplace">
                <div>관악구 1001-12</div>
            </div>
            <div id="search">
                <input>
                <div>검색</div>
                <div>옵션</div>
            </div>
        </div>
        <div id="placeListArea">
            <div class="listArea">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
            <div class="listArea top-10">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
            <div class="listArea top-10">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
            <div class="listArea top-10">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
            <div class="listArea top-10">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
            <div class="listArea top-10">
                <div></div>
                <div>
                    <div>test1</div>
                    <div>test2</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PlaceSearch'
}
</script>
<style scoped>
.top-10 {
    margin-top: 10px;
}
#placeArea {
    width: 100%;
    height: auto;
    margin-top: 70px;
}
#localplace {
    padding: 0 20%;
}
#localplace > div:nth-child(1) {
    text-align: center;
}
#placeSearch {
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
    right: 55px;
    width: 45px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #3743ce;
    color: #ffffff;
}
#search > div:nth-child(3) {
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
#placeListArea {
    margin-top: 15px;
    width: 100%;
    height: auto;
    padding: 0 20px;
}
.listArea {
    width: 100%;
    height: 95px;
}
.listArea > div:nth-child(1) {
    width: 115px;
    height: 100%;
    float: left;
    background-color: #3743ce;
}
.listArea > div:nth-child(2) {
    width: 190px;
    height: 100%;
    float: left;
    margin-left: 10px;
}
.listArea > div:nth-child(2) > div:nth-child(n) {
    width: 100%;
    height: 20px;
    text-decoration: underline;
}
</style>
