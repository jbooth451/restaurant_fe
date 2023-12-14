<template>
    <div>
        <h2>Add/Edit Food</h2>
    <form @submit.prevent="saveFood">
      <div>
        <label for="foodName">Food Name:</label>
        <input type="text" v-model="foodName" id="foodName" required>
        <small>Enter the name of the food item.</small>
      </div>

      <div>
        <label for="foodPic">Food Picture URL:</label>
        <input type="text" v-model="foodPic" id="foodPic" required>
        <small>Provide the URL for the food item's picture.</small>
      </div>

      <div>
        <label for="foodPrice">Food Price:</label>
        <input type="number" v-model="foodPrice" id="foodPrice" required>
        <small>Specify the price of the food item.</small>
      </div>

      <div>
        <label for="foodCategory">Food Category:</label>
        <select v-model="foodCategory" id="foodCategory" required>
          <option value="Appetizers">Appetizers</option>
          <option value="Desserts">Desserts</option>
          <option value="Drinks">Drinks</option>
          <option value="MainEntrees">MainEntrees</option>
          <option value="Sandwiches & Burgers">Sandwiches & Burgers</option>
          <option value="Sides">Sides</option>
          <option value="Soups & Salads">Soups & Salads</option>
          <small>Select the category of the food item.</small>
        </select>
      </div>

      <router-link to="/appetizers">Submit</router-link>
    </form>
    </div>
  </template>
  
  <script>
import { APIService } from "@/http/APIService";
import router from "@/router";

const apiService = new APIService();

  export default {
    data() {
      return {
        foodName: '',
        foodPic: '',
        foodPrice: '',
        foodCategory: 'Appetizers',
      };
    },
    methods: {
    saveFood() {
      const foodData = {
        foodName: this.foodName,
        foodPic: this.foodPic,
        foodPrice: this.foodPrice,
        foodCategory: this.foodCategory,
      };

      // Call your API service to save the food item
      apiService
        .saveFood(foodData)
        .then((response) => {
          console.log("Food saved successfully:", response.data);


          router.push("/menu");
        })
        .catch((error) => {
          // Handle errors, such as displaying an error message to the user
          console.error("Error saving food:", error);
        });
    },
  },
};
  </script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

small {
  color: #888;
  font-size: 12px;
}
</style>