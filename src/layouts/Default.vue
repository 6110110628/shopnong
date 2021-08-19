//src\layouts\Default.vue
<template>

  <div class="layout">
    <header class="header">
      <nav class="nav">
        <div class="container">
          <ul class="navbar-center">
            <li><a href="/shopnong/contact">Contact</a></li>
            <li><a href="/shopnong/about">About</a></li>
            <li><a href="/shopnong/bags1">Bags</a></li>
            <li><a href="/shopnong">Home</a></li>
            <li id="d1"><a href="/shopnong">Shopnong Online</a></li>
          </ul> <!--end navbar-left -->
        </div> <!--end container -->
      </nav>
    </header>
    
    <slot/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Rubik&display=swap');
body {
  font-family: 'Rubik', karla, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #ab95eb;
}
#d1 {
  float: left;
  color: white;
}
.layout {
  max-width: auto;
  margin-right: 150px;
  margin-left: 150px;
  padding-top: 0rem;
  padding-bottom: auto;
  background-color: white;
}
.header {
 
  margin-bottom: .75rem;
  font-weight: 700;
}
.headerText{
  margin-left: 40px;
  text-decoration: none;
   font-size: 4rem;
  color: #5828e8;
}
.nav__link {
  margin-left: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(50, 7, 78);
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

@media (max-width: 760px){
  body{
    margin-right: 8px;
    margin-left: 8px;
  }
  .layout{
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
}
</style>