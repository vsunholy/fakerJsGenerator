
✔ **User Authentication:**  
- 📝 Register a new user  
- 🔐 Login with valid credentials  
- ❌ Attempt login with incorrect details  
- 🚪 Logout and verify session expiration  

✔ **Product Interaction:**  
- 🔍 Search for products  
- 🛒 Add & remove products from the cart  
- 📦 Verify cart items & checkout process  

✔ **Checkout & Order:**  
- 🍿 Verify address details before purchase  
- 💰 Apply discount coupons  
- 📅 Download invoices  

✔ **Miscellaneous:**  
- ✉ Submit Contact Us form  
- 🗄 Validate test case page  

---

## 🔗 API Testing  

✔ **Product & Brand APIs:**  
- 📦 Fetch all products & brands  
- 🔍 Search product via API  

✔ **User Account APIs:**  
- 🔐 Verify login credentials via API  
- 🔢 Register new user via API  
- 🚀 Delete user from API  

✔ **Order Management APIs:**  
- 🛒 Place & validate an order  
- 📝 Update order details  

---

## 🚀 Getting Started  

### 🛠 Prerequisites  
- Install [Node.js](https://nodejs.org/) (Latest LTS recommended)  
- Install Cypress globally:  
  ```bash
  npm install -g cypress
  ```

### 📅 Installation  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/cypress-automation-project.git
   ```
2. **Navigate to project directory**  
   ```bash
   cd cypress-automation-project
   ```
3. **Install dependencies**  
   ```bash
   npm install
   ```
4. **Run Cypress Test Runner**  
   ```bash
   npx cypress open
   ```

---

## ▶ Running Tests  

### **Headless Mode**  
```bash
npx cypress run
```

### **Run a Specific Test**  
```bash
npx cypress run --spec cypress/integration/test_name.spec.js
```

---

## 📊 Test Reports  

**Generate Report:**  
```bash
allure generate allure-results --clean && allure open
```

---

## 👨‍💻 Contributing  

1. Fork the repository.  
2. Create a new branch.  
3. Commit your changes.  
4. Push to GitHub.  
5. Open a pull request.  

---

## 📝 License  

Licensed under the **MIT License**.  

---

<p align="center">✨ Happy Testing & Keep Automating! ✨</p>

<p align="center">
  <img src="https://media.giphy.com/media/1xVbXoJzRO2I/giphy.gif" width="200" />
</p>

