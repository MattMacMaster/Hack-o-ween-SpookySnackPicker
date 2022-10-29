<template>
    <div id="app">
        <ul>
            <li><a href="default.asp"><img src="./icons/candy-jar.png"></a></li>
            <li> <router-link to="/" id="nonimg">SpookySnack Picker</router-link>></li>
            <li><router-link to="/about" id="nonimg" href="about.asp">About</router-link>></li>
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
}
ul li {
  display: block;
  position: relative;
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
    height: 3em;
    margin: 0;
    margin-right: 5px;
}

active {
    background-color: #d47800;
}
#nonimg {
  margin-top: 15px;
}
</style> 