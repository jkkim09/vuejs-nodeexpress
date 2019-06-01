<template>
    <div id="userInfo">
        <top-header message="개인정보"></top-header>
        <div id= "userInfoEditArea">
            <div id="userInfoArea">
                <div id="userLogo"></div>
                <div id="userName">
                    <div>Test User</div>
                </div>
            </div>
            <div class="infoListArea">
                <div>
                    <div class="infoTitle">연락처</div>
                    <div class="button_1">수정</div>
                </div>
                <div>
                    <div class="infoTitle">휴대폰 번호 :&nbsp;</div>
                    <div class="infoText">010-0000-0000</div>
                </div>
            </div>
            <div class="infoListArea t-10">
                <div>
                    <div class="infoTitle">제공자 신청</div>
                    <div class="button_1">신청</div>
                </div>
                <div>
                    <div class="infoTitle">승인 상테 :&nbsp;</div>
                    <div class="infoText">미승인</div>
                </div>
            </div>
            <div class="infoListArea t-10">
                <div>
                    <div class="infoTitle">회원 상테</div>
                    <div class="button_1">탈퇴</div>
                </div>
                <div>
                    <div class="infoTitle">회원 상테 :&nbsp;</div>
                    <div class="infoText">일반</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>
<style>
.t-10 {
    margin-top: 10px;
}
#userInfo {
    width: 100%;
    height: auto;
}
#userInfoEditArea {
    width: 100%;
    height: auto;
    padding: 0 20px;
}
#userInfoArea {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000000;
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
.infoListArea {
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #000000;
}
.infoListArea > div:nth-child(1) {
    width: 100%;
    height: 40px;
}
.infoListArea > div:nth-child(2) {
    width: 100%;
    height: 40px;
    margin-top: 10px;
}
.infoTitle {
    width: auto;
    height: 40px;
    line-height: 40px;
    float: left;
    font-weight: bold;
}
.button_1 {
    width: 50px;
    height: 40px;
    line-height: 40px;
    float: right;
    text-align: center;
    background-color: blue;
    color: #ffffff;
    border-radius: 5px;
}
.infoText {
    width: auto;
    height: 40px;
    line-height: 40px;
    float: left;
}

</style>
