# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> User API CRUD Test - hamasrafique
- Location: tests\api\user.spec.js:11:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 400
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import {
  3   |   readTestData,
  4   |   writeTestData
  5   | } from '../../utils/testData.js';
  6   | 
  7   | const users = readTestData();
  8   | 
  9   | for (const userData of users) {
  10  | 
  11  |   test(
  12  |     `User API CRUD Test - ${userData.register.username}`,
  13  |     async ({ request }) => {
  14  | 
  15  |       // ==========================================
  16  |       // 1. REGISTER
  17  |       // ==========================================
  18  | 
  19  |       const registerResponse = await request.post(
  20  |         'https://api-testing-postman.vercel.app/api/v1/users/register',
  21  |         {
  22  |           data: userData.register
  23  |         }
  24  |       );
  25  | 
  26  |       console.log(
  27  |         'Register:',
  28  |         registerResponse.status()
  29  |       );
  30  | 
> 31  |       expect(registerResponse.status()).toBe(201);
      |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  32  | 
  33  | 
  34  |       // ==========================================
  35  |       // 2. LOGIN
  36  |       // ==========================================
  37  | 
  38  |       const loginResponse = await request.post(
  39  |         'https://api-testing-postman.vercel.app/api/v1/users/login',
  40  |         {
  41  |           data: userData.register
  42  |         }
  43  |       );
  44  | 
  45  |       console.log(
  46  |         'Login:',
  47  |         loginResponse.status()
  48  |       );
  49  | 
  50  |       expect(loginResponse.status()).toBe(200);
  51  | 
  52  |       const loginData = await loginResponse.json();
  53  | 
  54  |       const token = loginData.token;
  55  | 
  56  | 
  57  |       // ==========================================
  58  |       // 3. AUTHORIZATION
  59  |       // ==========================================
  60  | 
  61  |       const headers = {
  62  |         Authorization: `Bearer ${token}`
  63  |       };
  64  | 
  65  | 
  66  |       // ==========================================
  67  |       // 4. GET
  68  |       // ==========================================
  69  | 
  70  |       const getResponse = await request.get(
  71  |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  72  |         {
  73  |           headers
  74  |         }
  75  |       );
  76  | 
  77  |       expect(getResponse.status()).toBe(200);
  78  | 
  79  |       const originalUser = await getResponse.json();
  80  | 
  81  |       console.log('Original User:', originalUser);
  82  | 
  83  | 
  84  |       // ==========================================
  85  |       // 5. PUT
  86  |       // ==========================================
  87  | 
  88  |       const putResponse = await request.put(
  89  |         'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  90  |         {
  91  |           headers,
  92  |           data: userData.update
  93  |         }
  94  |       );
  95  | 
  96  |       console.log(
  97  |         'PUT:',
  98  |         putResponse.status()
  99  |       );
  100 | 
  101 |       expect(putResponse.status()).toBe(200);
  102 | 
  103 | 
  104 |       // ==========================================
  105 |       // 6. GET AFTER PUT
  106 |       // ==========================================
  107 | 
  108 |       const getAfterPut = await request.get(
  109 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  110 |         {
  111 |           headers
  112 |         }
  113 |       );
  114 | 
  115 |       expect(getAfterPut.status()).toBe(200);
  116 | 
  117 |       const updatedUser = await getAfterPut.json();
  118 | 
  119 |       console.log(
  120 |         'Updated User:',
  121 |         updatedUser
  122 |       );
  123 | 
  124 | 
  125 |       // ==========================================
  126 |       // 7. VERIFY PUT
  127 |       // ==========================================
  128 | 
  129 |       expect(updatedUser.fullname)
  130 |         .toBe(userData.update.fullname);
  131 | 
```