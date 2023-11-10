<template>
  <div class="menu">
    <h1 >NEBRASKA'S BEST<br>COMFORT FOOD.</h1>
    <h2 style = "position:relative; left:40px; top:-80px;">Keeping everything you like, while bringing something new.</h2>
    <p style = "position:relative; left:40px; top:-100px;">Mini-Me Meals has been bringing you the best since 1973, and we're not stopping now.
    <br>With new additions to our menu every year, there's always something new to look forward to.
    <br>It's a place where parents and children alike can unwind and enjoy a great meal.</p>
  </div>
  <div class="menu-burger">
      <img :src="require('@/assets/menu-burger.png')" alt="Menu Burger" id="menu-burger">
  </div>
  <body>
  </body>
  <footer>
    <h4>Phone: (000)-000-0000</h4>
    <h4>Email: MiniMeMeals@gmail.com</h4>
  </footer>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
body {
          margin: 0;
          padding: 0;
          overflow: hidden; /* Prevent scrollbars due to the fixed position */
      }
      #overlay-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgb(185, 70, 70);
          font-size: 24px;
          text-align: center;
          /* Add more styling as needed */
      }
/* Add your CSS styles for the Home component here */
.menu {
  text-align: left;
  padding: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
  font-size: 4rem;
  padding: 60px;
  margin-bottom: 10px;
  color:rgb(207, 47, 47);
}
h2 {
  font-size: 25px;
  padding: 20px;
  color: #000000;
 
}
h4 {
  font-size: 15px;
}

p {
  font-size: 20px;
  padding: 20px;
  color: #443c3c;
 
}
footer {
  background-color: black;
  color: white;
  padding: 5px;
  text-align: left;
} 
.menu-burger {
    margin-left: auto;
    margin-top: -550px;
    width: 40%;
    height: 40%;
    display: block;
}
</style>