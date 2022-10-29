<template>
    <div class="placeholder">
        <div class="aboutU">
        <h1 class="titles">About Us</h1>
        <div class="TextSec">
            <h3>MortyAllen</h3>
            <p>MortyAllen Aka Matthew MacMaster is a 2nd year computer science student, with previous industry software development experience unrelated to web development and about a year of experience using React and Laravel combination for web development.</p>
            <p></p>
            <h3>Fatboychummy</h3>
            <p>Fatboychummy aka Matthew Wilbern, is a 4th year computer science student who is currently working an IT job, who is in the process of learning web development.</p>
        </div>
    </div>
    <div class="aboutS">
        <h1 class="titles">About SpookySnack Picker</h1>
        <div class="TextSec">
            <p>This project idea originated with inspiration from PCPartPicker, and a much needed Halloween twist.</p>            
            <p>
                The goal of Spookysnack Picker is to solve the much needed issue, how can I construct a trick-or-treat bowl that will
                satisfy all the ghouls and goblins crawling around your neighborhood. Well search no more, SpookySnack Picker will solve your haunting problem
                with candy satisfaction analysis and bowl evaluation process to let you sleep easy this hallows eve.
            </p>
            <p>
                This project was created for the University of Lethbridge Halloween Hackathon, Hack-o-ween. Win or lose we wanted to get somemthing out of this event.
                So we ended using a framework neither of us had used before, Vue.js.So regardless of the result we can walk away with learning something new.
            </p>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
@font-face {
  font-family: NavFonts;
  src: url(../assets/feast-of-flesh-bb/fofbb_ital.ttf);
}
@font-face {
  font-family: textFonts;
  src: url(../assets/ravenscroft/Ravenscroft.ttf);
}

    .aboutU {
        text-align: center;
        float: left;
        min-width:400px;
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
        min-width:500px;
        max-width: 45%;
        background-color: rgb(63, 63, 63);
        border-color: burlywood;
        border-radius: 5px;
        box-shadow: 8px 8px rgb(0 0 0 / 0.8);
        padding: 0px 10px 0px 10px;
    }
    .titles {
        color: orange;
        padding: 10px 10px 10px 10px;
        text-decoration:underline;
        font-family: NavFonts;
    
    }
    .TextSec{
        color: coral;
        word-wrap: break-word;
        padding: 0px 10px 10px 10px;
        font-size: x-large;
        font-family: 'Times New Roman', Times, serif;
    }
    p {
        color: white;
        padding-bottom: 10px;
    }
    h3 {
        font-family: NavFonts;

    }

/* Make Smaller Screen Freindly LATER

@media only screen and (max-width: 1090) {  
    .TextSec {
    color: blue;
    }

    .aboutU{
        float: none;
        position: absolute;
    }
    .aboutS{
        float: none;
        position: absolute;
    }

}
*/
</style>