# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> Complete User CRUD API Automation
- Location: tests\api\user.spec.js:10:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 400
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | import {
  4   |   readUsers,
  5   |   writeUsers,
  6   |   writeRuntimeData
  7   | } from '../../utils/testData.js';
  8   | 
  9   | 
  10  | test('Complete User CRUD API Automation', async ({ request }) => {
  11  | 
  12  |   // =====================================================
  13  |   // 1. GENERATE USER DATA
  14  |   // =====================================================
  15  | 
  16  |   const timestamp = Date.now();
  17  | 
  18  |   const user = {
  19  |     fullname: `Test User ${timestamp}`,
  20  |     email: `testuser${timestamp}@gmail.com`,
  21  |     username: `testuser${timestamp}`,
  22  |     password: 'Test@12345'
  23  |   };
  24  | 
  25  |   console.log('Generated User:', user);
  26  | 
  27  | 
  28  |   // =====================================================
  29  |   // 2. REGISTER USER
  30  |   // =====================================================
  31  | 
  32  |   const registerResponse = await request.post(
  33  |     'https://api-testing-postman.vercel.app/api/v1/users/register',
  34  |     {
  35  |       data: user
  36  |     }
  37  |   );
  38  | 
  39  |   console.log(
  40  |     'Register Status:',
  41  |     registerResponse.status()
  42  |   );
  43  | 
  44  |   console.log(
  45  |     'Register Response:',
  46  |     await registerResponse.text()
  47  |   );
  48  | 
> 49  |   expect(registerResponse.status()).toBe(201);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  50  | 
  51  | 
  52  |   // =====================================================
  53  |   // 3. WRITE REGISTERED USER TO TESTDATA
  54  |   // =====================================================
  55  | 
  56  |   const users = readUsers();
  57  | 
  58  |   users.push({
  59  |     ...user,
  60  |     status: 'registered'
  61  |   });
  62  | 
  63  |   writeUsers(users);
  64  | 
  65  |   console.log(
  66  |     'User saved to users.json'
  67  |   );
  68  | 
  69  | 
  70  |   // =====================================================
  71  |   // 4. LOGIN
  72  |   // =====================================================
  73  | 
  74  |   const loginResponse = await request.post(
  75  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  76  |     {
  77  |       data: user
  78  |     }
  79  |   );
  80  | 
  81  |   console.log(
  82  |     'Login Status:',
  83  |     loginResponse.status()
  84  |   );
  85  | 
  86  |   expect(loginResponse.status()).toBe(200);
  87  | 
  88  |   const loginData = await loginResponse.json();
  89  | 
  90  |   const token = loginData.token;
  91  | 
  92  |   console.log(
  93  |     'Token received'
  94  |   );
  95  | 
  96  | 
  97  |   // =====================================================
  98  |   // 5. SAVE TOKEN
  99  |   // =====================================================
  100 | 
  101 |   writeRuntimeData({
  102 |     user: user,
  103 |     token: token
  104 |   });
  105 | 
  106 | 
  107 |   // =====================================================
  108 |   // 6. AUTHORIZATION
  109 |   // =====================================================
  110 | 
  111 |   let headers = {
  112 |     Authorization: `Bearer ${token}`
  113 |   };
  114 | 
  115 | 
  116 |   // =====================================================
  117 |   // 7. GET CURRENT USER
  118 |   // =====================================================
  119 | 
  120 |   const getResponse = await request.get(
  121 |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  122 |     {
  123 |       headers
  124 |     }
  125 |   );
  126 | 
  127 |   console.log(
  128 |     'GET Status:',
  129 |     getResponse.status()
  130 |   );
  131 | 
  132 |   expect(getResponse.status()).toBe(200);
  133 | 
  134 |   const currentUserResponse =
  135 |     await getResponse.json();
  136 | 
  137 |   console.log(
  138 |     'Current User:',
  139 |     currentUserResponse
  140 |   );
  141 | 
  142 |   const currentUser =
  143 |     currentUserResponse.data;
  144 | 
  145 | 
  146 |   // =====================================================
  147 |   // 8. SAVE USER ID
  148 |   // =====================================================
  149 | 
```