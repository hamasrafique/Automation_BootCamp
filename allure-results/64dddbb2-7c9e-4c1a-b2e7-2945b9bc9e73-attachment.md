# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> User API CRUD Test
- Location: tests\api\user.spec.js:9:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const data = {
  4   |   email: "hamasrafique@gmail.com",
  5   |   username: "hamasrafique",
  6   |   password: "hamas123"
  7   | };
  8   | 
  9   | test('User API CRUD Test', async ({ request }) => {
  10  | 
  11  |   // ==========================================
  12  |   // 1. LOGIN
  13  |   // ==========================================
  14  | 
  15  |   const loginResponse = await request.post(
  16  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  17  |     {
  18  |       data
  19  |     }
  20  |   );
  21  | 
> 22  |   expect(loginResponse.status()).toBe(200);
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  23  | 
  24  |   const tokenData = await loginResponse.json();
  25  | 
  26  |   console.log('Login:', tokenData);
  27  | 
  28  |   const token = tokenData.token;
  29  | 
  30  | 
  31  |   // ==========================================
  32  |   // 2. AUTHORIZATION HEADER
  33  |   // ==========================================
  34  | 
  35  |   const headers = {
  36  |     Authorization: `Bearer ${token}`
  37  |   };
  38  | 
  39  | 
  40  |   // ==========================================
  41  |   // 3. GET USER
  42  |   // ==========================================
  43  | 
  44  |   const GETResponse = await request.get(
  45  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  46  |     {
  47  |       headers
  48  |     }
  49  |   );
  50  | 
  51  |   expect(GETResponse.status()).toBe(200);
  52  | 
  53  |   const user = await GETResponse.json();
  54  | 
  55  |   console.log('Original User:', user);
  56  | 
  57  | 
  58  |   // ==========================================
  59  |   // 4. PUT / UPDATE USER
  60  |   // ==========================================
  61  | 
  62  |   const PUTResponse = await request.put(
  63  |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  64  |     {
  65  |       headers,
  66  |       data: {
  67  |         fullname: "hamas_rafique",
  68  |         email: "hamas@gmail.com",
  69  |         username: "hamas12345"
  70  |       }
  71  |     }
  72  |   );
  73  | 
  74  |   console.log('PUT Status:', PUTResponse.status());
  75  | 
  76  |   expect(PUTResponse.status()).toBe(200);
  77  | 
  78  | 
  79  |   // ==========================================
  80  |   // 5. GET AFTER PUT
  81  |   // ==========================================
  82  | 
  83  |   const GETAfterPut = await request.get(
  84  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  85  |     {
  86  |       headers
  87  |     }
  88  |   );
  89  | 
  90  |   expect(GETAfterPut.status()).toBe(200);
  91  | 
  92  |   const updatedUser = await GETAfterPut.json();
  93  | 
  94  |   console.log('Updated User:', updatedUser);
  95  | 
  96  |   expect(updatedUser.username).toBe('hamas12345');
  97  | 
  98  | 
  99  |   // ==========================================
  100 |   // 6. DELETE USER
  101 |   // ==========================================
  102 | 
  103 |   const DELETEResponse = await request.delete(
  104 |     'DELETE_URL_FROM_SWAGGER',
  105 |     {
  106 |       headers
  107 |     }
  108 |   );
  109 | 
  110 |   console.log('DELETE Status:', DELETEResponse.status());
  111 | 
  112 |   expect(DELETEResponse.status()).toBe(200);
  113 | 
  114 | 
  115 |   // ==========================================
  116 |   // 7. GET AFTER DELETE
  117 |   // ==========================================
  118 | 
  119 |   const GETAfterDelete = await request.get(
  120 |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  121 |     {
  122 |       headers
```