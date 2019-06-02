<template>
    <div id="myPlace">
        <top-header message="My Place"></top-header>
        <div id="myPlaceArea">
            <div class="myPlaceListArea">
                <div></div>
            </div>
            <div class="myPlaceListArea top-20">
                <div></div>
            </div>
            <div class="myPlaceListArea top-20">
                <div></div>
            </div>
            <div class="myPlaceListArea top-20">
                <div></div>
            </div>
            <div class="myPlaceListArea top-20">
                <div></div>
            </div>
            <div class="myPlaceListArea top-20">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Myplace'
}
</script>

<style>
.top-20 {
    margin-top: 20px;
}
#myPlace {
    width: 100%;
    height: auto;
}
#myPlaceArea {
    width: 100%;
    height: auto;
    margin-top: 70px;
    padding: 0 20px;
}
.myPlaceListArea {
    width: 100%;
    height: 115px;
    border-bottom: 2px solid #c8c8c8;
}
.myPlaceListArea > div:nth-child(1) {
    width: 100%;
    height: 95px;
    background-color:aqua;
    border: 1px solid blue;
    border-radius: 7px;
}
</style>
