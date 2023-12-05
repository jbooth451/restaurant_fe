<template>
  <div class="menu">
    <div class="navbar">
      <div class="menu-buttons">
        <router-link to="/appetizers">Appetizers</router-link>
        <router-link to="/soups_salads">Soups and Salads</router-link>
        <router-link to="/sandwiches_burgers">Sandwiches & Burgers</router-link>
        <router-link to="/main_entrees">Main Entrees</router-link>
        <router-link to="/desserts">Desserts</router-link>
        <router-link to="/sides">Sides</router-link>
        <router-link to="/drinks">Drinks</router-link>
      </div>
    </div>

    <div class="content">
      <h1>NEBRASKA'S BEST<br>COMFORT FOOD.</h1>
      <h2>Keeping everything you like, while bringing something new.</h2>
      <p>Mini-Me Meals has been bringing you the best since 1973, and we're not stopping now.
        <br>With new additions to our menu every year, there's always something new to look forward to.
        <br>It's a place where parents and children alike can unwind and enjoy a great meal.</p>
      
      <div class="menu-burger">
        <img :src="require('@/assets/menu-burger.png')" alt="Menu Burger" id="menu-burger">
      </div>
    </div>
</div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrollbars due to the fixed position */
}

.menu {
  text-align: center;
  padding: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.navbar {
  background-color: #fff; /* Set background color for the navbar */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-burger {
  display: flex;
  align-items: center;
}

.menu-burger img {
  margin-left: 10px; /* Adjust the margin as needed */
}
.content {
  display: flex;
  align-items: flex-start;
}
.menu-buttons {
  display: flex;
}

.menu-buttons a {
  border: none;
  color: rgb(172, 161, 161);
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium';
  margin: 0 10px;
  cursor: pointer;
}

.menu-buttons a:hover {
  color: rgb(224, 14, 14);
  border-bottom: 2px solid rgb(224, 14, 14);
}

h1 {
  font-size: 2.5rem;
  color: rgb(207, 47, 47);
  margin: 10px 0;
}

h2 {
  font-size: 20px;
  color: #000000;
  margin: 10px 0;
}

p {
  font-size: 18px;
  color: #443c3c;
  margin: 10px 0;
}

footer {
  background-color: black;
  color: white;
  padding: 5px;
  text-align: left;
}

h4 {
  font-size: 15px;
  margin: 5px 0;
}
</style>