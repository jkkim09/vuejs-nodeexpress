<template>
    <div id="listPage">
        <top-header :message="local"></top-header>
        <div id="categoryArea">
            <table id="listArea">
                <tr>
                    <td>
                        <div class="categoryImage"></div>
                    </td>
                    <td>
                        <div class="categoryImage"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="categoryImage"></div>
                    </td>
                    <td>
                        <div class="categoryImage"></div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="localInfoList">
            <div class="infoListItem"></div>
            <div class="infoListItem top-10"></div>
            <div class="infoListItem top-10"></div>
            <div class="infoListItem top-10"></div>
            <div class="infoListItem top-10"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ListPage',
  data () {
    return {
      local: '관악구 123-123'
    }
  }
}
</script>
<style scoped>
#listPage {
    width: 100%;
    height: 100%;
}
#categoryArea {
    width: 100%;
    height: auto;
}
#listArea {
    width: 100%;
    height: auto;
    border-collapse: collapse;
}
#listArea > tr {
    width: 100%;
    height: 150px;
}
#listArea > tr > td {
    width: 50%;
    height: 150px;
    padding: 10px;
}
#listArea > tr > td:nth-child(2n + 1) {
    border-top: 1px solid #444444;
    border-bottom: 1px solid #444444;
    border-right: 1px solid #444444;
}

#listArea > tr > td:nth-child(2n) {
    border-top: 1px solid #444444;
    border-bottom: 1px solid #444444;
    border-left: 1px solid #444444;
}

.categoryImage {
    width: 100%;
    height: 100%;
    background-color: #c8c8c8;
}
#localInfoList {
    width: 100%;
    height: auto;
    padding: 20px 10px 0 10px;
}
.infoListItem {
    width: 100%;
    height: 100px;
    background-color: teal;
}
.top-10 {
    margin-top: 10px;
}
</style>
