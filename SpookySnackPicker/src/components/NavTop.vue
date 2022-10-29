<template>
    <div id="app">
        <ul>
            <li><img src="./icons/candy-jar.png"></li>
            <li> <router-link to="/" class="" id="nonimg">SpookySnack Picker</router-link>></li>
            <li><router-link to="/data" id="nonimg" >Dataset</router-link>></li>
            <li><router-link to="/about" id="nonimg" >About</router-link>></li>
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
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
  position: fixed;
  top: 0;
  left:0%;
  width: 100%;
  font-size: larger;
  z-index: 1;
}
ul li {
  margin-left:11%;
  display: block;
  position: relative;
}

li {
  float: left;
  max-height: 75px;
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
    padding-top: 5px;
    padding-left: 5px;
    height: 4em;
    margin: 0;
    margin-right: 5px;
}
.active {
    background-color: #d47800;
}
#nonimg {
  margin-top: 10px;
}
</style> 