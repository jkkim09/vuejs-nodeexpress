<template>
    <div id="findArea">
        <top-header message="개인 정보 찾기"></top-header>
        <div id="insertInfoArea">
            <div id="idSearch">
                <div class="searchText top-10">아이디 찾기</div>
                <div class="searchInfoArea top-10">
                    <table>
                        <tr>
                            <td>
                                <div class="inputArea">
                                    <input placeholder="이름"/>
                                    <input class="top-10" placeholder="생년월일"/>
                                    <input class="top-10" placeholder="휴대폰번호"/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="passwordSearch">
                <div class="searchText top-10">비밀번호 찾기</div>
                <div class="searchInfoArea top-10">
                    <table>
                        <tr>
                            <td>
                                <div class="inputArea">
                                    <input placeholder="ID"/>
                                    <input class="top-10" placeholder="이름"/>
                                    <input class="top-10" placeholder="생년월일"/>
                                    <input class="top-10" placeholder="휴대폰번호"/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="certificationArea">
                <div class="searchText blank">&nbsp;</div>
                <div class="searchInfoArea top-10">
                    <table>
                        <tr>
                            <td>
                                <div class="inputArea">
                                    <input placeholder="인증번호"/>
                                    <button class="top-10">인증</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FindUserInfo'
}
</script>
<style scoped>
#insertInfoArea {
    width: 100%;
    height: auto;
    padding: 0 10px;
}
#idSearch, #passwordSearch, #certificationArea {
    width: 100%;
    height: auto;
}
.searchText {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    border-bottom: 2px solid #c8c8c8;
}
.searchText.blank {
    height: 10px;
}
.searchInfoArea {
    width: 100%;
    height: auto;
}
.searchInfoArea table {
    width: 100%;
    height: auto;
    padding: 0px 45px;
}

.inputArea > input {
    width: 100%;
    height: 35px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #000000;
    text-align: center;
    font-size: 15px;
}
.inputArea button {
    width: 100%;
    height: 35px;
    background-color: #2f36d6;
    border-radius: 0;
    color: #ffffff;
}
</style>
