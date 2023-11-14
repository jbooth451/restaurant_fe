<template>
    <div class="home">
      <h1 style="position:relative; left:40px; top:200px;">THE BEST JUST<br>GOT BETTER.</h1>
      <p style="position:relative; left:40px; top:200px;">Try out our New Double Triple Butter Burger Supreme,<br> Topped with Crispy Onions.</p>
    </div>
    <body>
      <!-- Background GIF -->
      <img :src="require('@/assets/burger-gif.gif')" alt="Background GIF" id="background">
    </body>
    <footer style="">
      <h4>Contact Us - Phone: (000)-000-0000</h4>
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
        }
  /* Add your CSS styles for the Home component here */
  .home {
    text-align: left;
    padding: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  h1 {
    font-family: tenso,Arial,sans-serif;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
    text-transform: uppercase;
    font-size: 65px;
    padding-bottom: 0.425em;
  }
  h4 {
    font-size: 15px;
  }
  
  p {
    font-family: roboto,Helvetica,sans-serif;
    color: #ffffff;
    font-size: 25px;
    line-height: 1.5;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #333; /* Set your desired background color */
    color: white; /* Set your desired text color */
    padding: -5px;
    text-align: center;
  }
  </style>
