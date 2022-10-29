<template>
    <div id="app">
        <ul>
            <li><a href="default.asp"><img src="./icons/candy-jar.png"></a></li>
            <li><a id="active">SpookySnackPicker</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>   
    </div>

</template>
    
<script>
    export default {
    }
</script>
    
<style lang="css">
body {margin:0;}

ul {
  display: inline-block;

  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
  position: fixed;
  bottom: 0;
  left:0%;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight:bolder;
}

li a:hover:not(.active) {
  background-color: #d47800;
}
img {
    padding: 0;
    margin: 0;
    width: 1em;
    margin: 0;
}

active {
    background-color: #d47800;
}
#app {
  text-align: center;
}

</style> 