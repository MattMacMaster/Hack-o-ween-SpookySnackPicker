<template>
    <div id="app">
      <footer class="footer-content">
        <p>Copyright &copy;2022 <a href="https://github.com/MattMacMaster" target="_blank">MortyAllen</a> and <a href="https://github.com/fatboychummy" target="_blank">Fatboychummy</a></p>
      </footer>
         
    </div>

</template>
    
<script>
    export default {
    }
</script>
    
<style lang="css">
@font-face {
  font-family: NavFonts;
  src: url(../assets/feast-of-flesh-bb/fofbb_ital.ttf);
}

  footer{
    font-size: xx-large;
    font-family: NavFonts;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333;
    height: auto;
    width: 100vw;
    color: #fff;
    position: fixed;
    padding: 10px 10px 0px 10px;
    /* Height of the footer*/
    height: 60px;
    
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

</style> 