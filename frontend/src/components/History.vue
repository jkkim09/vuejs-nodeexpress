<template>
    <div id="historyArea">
        <top-header message="이용내역"></top-header>
        <div id="nowHistoryArea"></div>
        <div id="nowHistory">
            <div>현재 예약</div>
            <div>
                <div class="listArea">
                    <div></div>
                    <div>
                        <div>now</div>
                        <div>now</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="historyListArea">
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
  name: 'History'
}
</script>
<style scoped>
.top-10 {
    margin-top: 10px;
}
#historyArea {
    width: 100%;
    height: auto;
    margin-top: 70px;
}
#nowHistory {
    width: 100%;
    height: auto;
    border: 2px solid red;
}
#nowHistory > div:nth-child(1) {
    width: 100%;
    height: 30px;
    background-color: #37c0ce;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
}
#nowHistory > div:nth-child(2) {
    width: 100%;
    height: auto;
    padding: 20px;
}
#historyListArea {
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
    border-radius: 5px;
}
.listArea > div:nth-child(2) {
    width: 50%;
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
