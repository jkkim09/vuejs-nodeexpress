<template>
    <div id="reservArea">
        <top-header></top-header>
        <div id="reservation">
            <div id="imageArea"></div>
            <div id="paddingArea">
                <div id="titleArea">서울 교대역 위플 공유 오피스</div>
                <div id="placeInfoArea">
                    <div class="icon_1"></div>
                    <div id="placeScore">6.8</div>
                    <div id="paddingArea_2">
                        <div class="title_1">후기<span class="title_text"> 26개</span></div>
                        <div class="title_1">블로그리뷰<span class="title_text"> 50개</span></div>
                    </div>
                    <div id="dateInfoArea">
                        <table>
                            <tr>
                                <td>
                                    <div class="dateInfo">
                                        <div>체크인</div>
                                        <div>5월 12일</div>
                                        <div>12:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dateInfo"></div>
                                </td>
                                <td>
                                    <div class="dateInfo">
                                        <div>체크아웃</div>
                                        <div>5월 13일</div>
                                        <div>12:00</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="addInfoArea">
                        <div class="addInfoListArea">
                            <div>
                                <div>요금정보</div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div class="addInfoListArea top-5">
                            <div>
                                <div>요금정보</div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div id="informationText">
                        이용안내<br>- 이용안내이용안내이용안내이용안내이용안내<br>- 이용안내이용안내이용안내이용안내<br>- 이용안내이용안내이용안내이용안내이용안내
                    </div>
                </div>
            </div>
            <div id="reservationButton">바로 예약하기</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Reservation',
  data () {
    return {
      imageList: []
    }
  }
}
</script>

<style>
.top-5 {
    margin-top: 5px;
}
#reservArea {
    width: 100%;
    height: auto;
}
#reservation {
    width: 100%;
    height: auto;
    margin-top: 70px;
}
#imageArea {
    width: 100%;
    height: 150px;
}
#paddingArea {
    width: 100%;
    height: auto;
    padding: 20px 20px 0 20px;
}
#titleArea {
    width: 100%;
    font-weight: bold;
    text-align: left;
}
#placeInfoArea {
    width: 100%;
    height: 20px;
    margin-top: 10px;
}
#placeInfoArea > div:nth-child(n) {
    float: left;
}
.icon_1 {
    width: 20px;
    height: 20px;
    background-color: red;
}
#placeScore {
    width: auto;
    height: 20px;
    line-height: 20px;
    margin-left: 6px;
    font-weight: bold;
}
#paddingArea_2 {
    width: auto;
    height: 20px;
    line-height: 15px;
    padding: 2.5px 0;
}
.title_1 {
    float: left;
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    font-weight: bold;
    color: #716c6c;
    margin-left: 5px;
}
.title_text {
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    font-weight: bold;
    color: #000000;
}
#swiperArea {
    width: 100%;
    height: 100%;
}
#swiperArea > div:nth-child(n) {
    width: 100%;
    height: 100%;
}
#dateInfoArea {
    width: 100%;
    height: 90px;
    margin-top: 25px;
    background-color: #ededed;
    padding: 10px 10%;
}
#dateInfoArea > table {
    width: 100%;
    height: 100%;
}
#dateInfoArea > table > tr > td {
    width: 33%;
    height: 100%;
}
.dateInfo {
    width: 100%;
    height: 100%;
}
.dateInfo > div:nth-child(1) {
    width: 100%;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    text-align: center;
    color: #716c6c;
}
.dateInfo > div:nth-child(2) {
    width: 100%;
    height: 20px;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
}
.dateInfo > div:nth-child(3) {
    width: 100%;
    height: 20px;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
    color: red;
}
#addInfoArea {
    width: 100%;
    height: auto;
    margin-top: 10px;
}
.addInfoListArea {
    width: 100%;
    height: auto;
    border-top: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
    padding: 5px 0;
}
.addInfoListArea > div:nth-child(1) {
    position: relative;
    width: 100%;
    height: 35px;
}
.addInfoListArea > div:nth-child(1) > div:nth-child(1) {
    width: auto;
    height: 35px;
    font-size: 15px;
    line-height: 35px;
    font-weight: bold;
}
.addInfoListArea > div:nth-child(1) > div:nth-child(2) {
    position: absolute;
    width: 10px;
    height: 35px;
    top: 0;
    right: 0;
    padding: 12.5px 0;
}
.addInfoListArea > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
    width: 100%;
    height: 100%;
    background-color: #000000;
}
.addInfoListArea > div:nth-child(2) {
    width: 100%;
    /* height: 60px; */
}
#informationText {
    width: 100%;
    height: auto;
    min-height: 50px;
    margin-top: 20px;
    margin-bottom: 100px;
    font-size: 12px;
}
#reservationButton {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 45px;
    background-color: blueviolet;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
}
</style>
