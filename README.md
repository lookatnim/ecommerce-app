React E-commerce Application

This is a simple e-commerce web application built using React and Vite. The app includes user authentication, a product list, and a shopping cart feature. It is designed to easy to use, and manage the user authentication and shopping cart state locally using React Context.

Features

1. User Authentication:
    User registration (sign-up) and login functionality.
    Authentication is managed using React Context.

2. Product List:
    Displays a list of hardcoded products with attributes like name, price, description, and image.
    Users can add products to their shopping cart.
    
3. Shopping Cart:
    Users can add products to the shopping cart.
    Users can view items in the cart with details such as quantity, individual prices, and total cost.
    Quantity of items can be updated, and users can remove items from the cart.

4. Bonus Features:
    Client-side routing using React Router.
    Local storage integration to persist the shopping cart and user authentication state across page reloads.


Installation

To set up this project on your local machine, follow these steps:

1. Clone the repository:

    git clone https://github.com/lookatnim/ecommerce-app.git

2. Navigate to the project directory:

    cd e-commerce-app

3. Install the dependencies:

    npm install
    
4. Start the development server:

    npm run dev
    The app will open in your browser at http://localhost:5173.

5. User Login
    email : user@test.com
    password : password


Technologies Used

1. React: For building the UI components.
2. Vite: For fast development and bundling.
3. React Router: For routing between different pages.
4. React Context API: For managing authentication and cart state.
5. LocalStorage: For persisting the cart data and user authentication state.
6. Redux: For state management across the app, including authentication and cart data.
7. React Material UI (RMUI): For styling UI components such as buttons, forms,  product cards, and etc.


Author
Tharindu Nimesh