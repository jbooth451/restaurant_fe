<template>
    <div class="home">
      <h1>THE BEST JUST<br>GOT BETTER.</h1>
      <p>Try out our New Double Triple Butter Burger Supreme,<br> Topped with Crispy Onions.</p>
    </div>
    <body>
      <!-- Background GIF -->
      <img :src="require('@/assets/burger-gif.gif')" alt="Background GIF" id="background">
    </body>
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

        #background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1; /* Ensure the background is behind other elements */
            object-fit: cover; /* Cover the entire viewport */
        }

        #overlay-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 24px;
            text-align: center;
            /* Add more styling as needed */
        }
  /* Add your CSS styles for the Home component here */
  .home {
    text-align: left;
    padding: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  h1 {
    font-size: 4rem;
    padding: 80px;
    margin-bottom: 10px;
    color:rgb(255, 255, 255)
  }
  
  p {
    font-size: 30px;
    padding: 20px;
    color: #ffffff;
  }
  </style>
