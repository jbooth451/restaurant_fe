<template>
  <div class="menu">
      <h1>APPETIZERS</h1>
      <h2 style="position:relative; left:40px; top:-80px;"><i>Something to start, something to share.</i></h2>
      <p style="position:relative; left:60px; top:-100px;"> Some of the best appetizers around. Great bite-sized fun that both parents and children can enjoy!
        <br> Don't forget to check out our Signature Fried Pickles!</p>
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
                          <tr v-if="food && food.foodCategory === 'Desserts'">
                              <th scope="row">{{ food.foodName }}</th>
                              <td><img :src="food.foodPic" alt="Food Picture"></td>
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