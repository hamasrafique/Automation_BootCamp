# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> User API CRUD Test - hamasrafique
- Location: tests\api\user.spec.js:8:7

# Error details

```
ReferenceError: data is not defined
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { readTestData, writeTestData } from '../../utils/testData.js';
  3   | 
  4   | const users = readTestData();
  5   | 
  6   | for (const userData of users) {
  7   | 
  8   |   test(`User API CRUD Test - ${userData.username}`, async ({ request }) => {
  9   | 
  10  |      // ==========================================
  11  |   // 1. LOGIN
  12  |   // ==========================================
  13  | 
  14  |   const loginResponse = await request.post(
  15  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  16  |     {
> 17  |       data
      |       ^ ReferenceError: data is not defined
  18  |     }
  19  |   );
  20  | 
  21  |   expect(loginResponse.status()).toBe(200);
  22  | 
  23  |   const tokenData = await loginResponse.json();
  24  | 
  25  |   console.log('Login:', tokenData);
  26  | 
  27  |   const token = tokenData.token;
  28  | 
  29  | 
  30  |   // ==========================================
  31  |   // 2. AUTHORIZATION HEADER
  32  |   // ==========================================
  33  | 
  34  |   const headers = {
  35  |     Authorization: `Bearer ${token}`
  36  |   };
  37  | 
  38  | 
  39  |   // ==========================================
  40  |   // 3. GET USER
  41  |   // ==========================================
  42  | 
  43  |   const GETResponse = await request.get(
  44  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  45  |     {
  46  |       headers
  47  |     }
  48  |   );
  49  | 
  50  |   expect(GETResponse.status()).toBe(200);
  51  | 
  52  |   const user = await GETResponse.json();
  53  | 
  54  |   console.log('Original User:', user);
  55  | 
  56  | 
  57  |   // ==========================================
  58  |   // 4. PUT / UPDATE USER
  59  |   // ==========================================
  60  | 
  61  |   const PUTResponse = await request.put(
  62  |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  63  |     {
  64  |       headers,
  65  |       data: {
  66  |         fullname: "hamas_rafique",
  67  |         email: "hamas@gmail.com",
  68  |         username: "hamas12345"
  69  |       }
  70  |     }
  71  |   );
  72  | 
  73  |   console.log('PUT Status:', PUTResponse.status());
  74  | 
  75  |   expect(PUTResponse.status()).toBe(200);
  76  | 
  77  | 
  78  |   // ==========================================
  79  |   // 5. GET AFTER PUT
  80  |   // ==========================================
  81  | 
  82  |   const GETAfterPut = await request.get(
  83  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  84  |     {
  85  |       headers
  86  |     }
  87  |   );
  88  | 
  89  |   expect(GETAfterPut.status()).toBe(200);
  90  | 
  91  |   const updatedUser = await GETAfterPut.json();
  92  | 
  93  |   console.log('Updated User:', updatedUser);
  94  | 
  95  |   expect(updatedUser.username).toBe('hamas12345');
  96  | 
  97  | 
  98  |   // ==========================================
  99  |   // 6. DELETE USER
  100 |   // ==========================================
  101 | 
  102 |   const DELETEResponse = await request.delete(
  103 |     'DELETE_URL_FROM_SWAGGER',
  104 |     {
  105 |       headers
  106 |     }
  107 |   );
  108 | 
  109 |   console.log('DELETE Status:', DELETEResponse.status());
  110 | 
  111 |   expect(DELETEResponse.status()).toBe(200);
  112 | 
  113 | 
  114 |   // ==========================================
  115 |   // 7. GET AFTER DELETE
  116 |   // ==========================================
  117 | 
```