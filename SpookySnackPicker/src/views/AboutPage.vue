<template>
    <div class="container">
        <div class="aboutU">
        <h1 class="titles">About Us</h1>
        <div class="TextSec">
            <h2>MortyAllen</h2>
            <p></p>
            <h2>Fatboychummy</h2>
            <p></p>
        </div>
    </div>
    <div class="aboutS">
        <h1 class="titles">About SpookySnack Picker</h1>
        <div class="TextSec">
            <p></p>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
    .container {
    }
    .aboutU {
        text-align: center;
        float: left;
        min-width:35%;
        max-width: 50%;
        background-color: rgb(63, 63, 63);
        border-color: burlywood;
        border-radius: 5px;
        box-shadow: 8px 8px rgb(0 0 0 / 0.8);
        margin-bottom: 30px;
    }
    .aboutS {
        text-align: center;
        float:right;
        min-width:35%;
        max-width: 100%;
        background-color: rgb(63, 63, 63);
        border-color: burlywood;
        border-radius: 5px;
        box-shadow: 8px 8px rgb(0 0 0 / 0.8);
    }
    .titles {
        color: orange;
        padding: 10px 10px 10px 10px;
    }
    .TextSec{
        color: coral;
        word-wrap: break-word;
        padding: 0px 10px 10px 10px;
    }
@media only screen and (max-width: 980px) {  
    .TextSec {
    color: blue;
    }
    

}
</style>