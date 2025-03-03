# 🚀 Cypress Automation Project 🌟

![Cypress](https://img.shields.io/badge/Cypress-Testing-green?style=for-the-badge&logo=cypress&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=black) ![QA Automation](https://img.shields.io/badge/QA%20Automation-Powered%20by%20Cypress-blue?style=for-the-badge)

🚀 A modern Cypress automation project covering UI & API testing based on [AutomationExercise.com](https://www.automationexercise.com) test cases.

---

## 🌟 Features & Highlights  

- 🔥 **Complete Automation Suite:** Covers essential UI and API test cases.  
- 📊 **Detailed Reports:** Automatically generates test reports for better insights.  
- 🤖 **CI/CD Ready:** Easily integrates with GitHub Actions & Jenkins for automation.  
- 📱 **Responsive Testing:** Ensures web compatibility across different screen sizes.  
- 💾 **Data-Driven Approach:** Uses JSON fixtures to make tests dynamic and reusable.  

---

## 🌍 Table of Contents

- [🤦 Tech Stack](#-tech-stack)
- [🎯 Test Cases Implemented](#-test-cases-implemented)
- [🔗 API Testing](#-api-testing)
- [🚀 Getting Started](#-getting-started)
- [▶ Running Tests](#-running-tests)
- [📊 Test Reports](#-test-reports)
- [👨‍💻 Contributing](#-contributing)
- [📝 License](#-license)

---

## 🤦 Tech Stack  

| Technology | Purpose |
|------------|---------|
| 🟢 **Cypress** | End-to-End UI & API Testing |
| 💛 **JavaScript (ES6+)** | Writing clear & maintainable test scripts |
| 📂 **Mocha + Chai** | Assertion & Test Framework |
| 💽 **Axios** | API Testing & Request Handling |
| 🎭 **Faker.js** | Data generation for test scenarios |
| 📊 **Allure Reports** | Beautiful test reports |

---

## 🎯 Test Cases Implemented  

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

✨ Happy Testing & Keep Automating! ✨

