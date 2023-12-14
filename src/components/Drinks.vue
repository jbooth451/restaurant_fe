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
      <h1>DRINKS</h1>
      <h2 style="position:relative; left:40px; top:-80px;"><i>Something refreshing.</i></h2>
      <p style="position:relative; left:60px; top:-100px;"> We have drinks for adults and kids alike.
        <br> Kids should try out the Chocolate Milk, while adults should try a Margarita!</p>
  </div>  
  <div class="row align-items-center justify-content-center">
              <div class="col col-12 col-md-10 d-none d-xl-block d-lg-block d-md-block">
                  <table class="table table-hover" style="overflow-y: auto" :headers="headers">
                      <thead>
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Picture</th>
                          <th scope="col">Price</th>
                          <th scope="col">Category</th>
                      </tr>
                      </thead>
                      <tbody>
                      {{ console.log('Menu:', Array.isArray(Menu) ? Menu : 'Not an array') }}
                      <template v-for="food in Menu" :key="food.MenuID">
                          <tr v-if="food && food.foodCategory === 'Drinks'">
                              <th scope="row">{{ food.foodName }}</th>
                              <td><img :src="food.foodPic" alt="Food Picture" class="food-image"></td>
                              <td>{{ food.foodPrice }}</td>
                              <td>{{ food.foodCategory }}</td>
                          </tr>
                       </template>
                      {{ console.log('Menu:', Menu) }}
                      </tbody>
                  </table>
               </div>
  </div>
  
  </template>
  
  <script>
    import {APIService} from "@/http/APIService";
  
    const apiService = new APIService();
    import router from "../router";
  
    export default {
      data() {
              return {
                  Menu: [],
                  showMsg: '',
                  isMobile: false,
                  authenticated: false,
                  headers: [
                      {text: 'Name', sortable: false, align: 'left'},
                      {text: 'Picture', sortable: false, align: 'left',},
                      {text: 'Price', sortable: false, align: 'left',},
                      {text: 'Category', sortable: false, align: 'left',},
                  ],
              };
          },
          mounted() {
              this.authenticated = localStorage.getItem("isAuthenticated")
              this.getMenu();
          },
          methods: {
              onResize() {
                  if (window.innerWidth > 600)
                      this.isMobile = true;
                  else
                      this.isMobile = false;
              },
              showMessages() {
                  if (this.$route.params.msg) {
                      this.showMsg = this.$route.params.msg;
                  }
              },
               getMenu() {
                  console.log('getMenu method called');
                  apiService
                      .getMenu() 
                      .then((response) => {
                          console.log('API Response:', response);
                          this.Menu = response.data.data;                        
                          console.log(JSON.stringify(this.Menu, null, 2));
                          if (
                              localStorage.getItem("isAuthenticated") &&
                              JSON.parse(localStorage.getItem("isAuthenticated")) === true
                          ) {
                              this.validUserName = JSON.parse(localStorage.getItem("log_user"));
                          }
                      })
                      .catch((error) => {
                          localStorage.removeItem("isAuthenticated");
                          localStorage.setItem("isAuthenticated", false)
                          localStorage.removeItem("log_user");
                          localStorage.removeItem("access");
                          router.push("/auth");
                      });
  
              },
          }
  
      };
  
    </script>
    
    <style scoped>
    /* Add your CSS styles for the Home component here */
    .menu {
    text-align: left;
    padding: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .food-image {
  max-width: 300px; /* Set a maximum width for the images */
  height: auto; /* Maintain the aspect ratio */
}
  .navbar {
  background-color: #fff; /* Set background color for the navbar */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    
    p {
      font-size: 1.2rem;
      color: #888;
    }
    </style>