# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> User API CRUD Test
- Location: tests\api\user.spec.js:48:5

# Error details

```
TypeError: apiRequestContext.put: Invalid URL
```

# Test source

```ts
  4   | //   "email": "mariyam@gmail.com",
  5   | //   "username": "mariyam",
  6   | //   "password": "mariyam123"
  7   | // }
  8   | // test('Get All users API Test', async ({request}) => {
  9   | // const response = await request.post(
  10  | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  11  | //     {
  12  | //     data: data
  13  | //     }
  14  |  
  15  | // );
  16  | // console.log(await response.json());
  17  | // expect(response.status()).toBe(200);
  18  |  
  19  | //   const tokenData = await response.json();
  20  | //   const token = tokenData.token;
  21  |  
  22  | //  const GETResponse = await request.get(
  23  | //     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
  24  | //     {
  25  | //       headers: {
  26  | //         Authorization: `Bearer ${token}`
  27  | //       }
  28  | //     }
  29  | //   );
  30  | //      console.log(GETResponse.status());
  31  | //   expect(GETResponse.status()).toBe(200);
  32  |  
  33  |  
  34  | // });
  35  | 
  36  | import { test, expect } from '@playwright/test';
  37  |  
  38  | const data = {
  39  | 
  40  |   email: "mariyam@gmail.com",
  41  | 
  42  |   username: "mariyam",
  43  | 
  44  |   password: "mariyam123"
  45  | 
  46  | };
  47  |  
  48  | test('User API CRUD Test', async ({ request }) => {
  49  |  
  50  |   // 1. LOGIN
  51  |  
  52  |   const loginResponse = await request.post(
  53  | 
  54  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  55  | 
  56  |     {
  57  | 
  58  |       data
  59  | 
  60  |     }
  61  | 
  62  |   );
  63  |  
  64  |   expect(loginResponse.status()).toBe(200);
  65  |  
  66  |   const tokenData = await loginResponse.json();
  67  |  
  68  |   console.log('Login:', tokenData);
  69  |  
  70  |   const token = tokenData.token;
  71  |  
  72  | 
  73  |   // 2. AUTHORIZATION HEADER
  74  |  
  75  |   const headers = {
  76  | 
  77  |     Authorization: `Bearer ${token}`
  78  | 
  79  |   };
  80  |  
  81  | 
  82  |   // 3. GET USER
  83  |  
  84  |   const GETResponse = await request.get(
  85  | 
  86  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  87  | 
  88  |     {
  89  | 
  90  |       headers
  91  | 
  92  |     }
  93  | 
  94  |   );
  95  |  
  96  |   expect(GETResponse.status()).toBe(200);
  97  |  
  98  |   const user = await GETResponse.json();
  99  |  
  100 |   console.log('Original User:', user);
  101 |  
  102 |   // 4. PUT / UPDATE USER
  103 |  
> 104 |   const PUTResponse = await request.put(
      |                                     ^ TypeError: apiRequestContext.put: Invalid URL
  105 | 
  106 |     'PUT_URL_FROM_SWAGGER',
  107 | 
  108 |     {
  109 | 
  110 |       headers,
  111 | 
  112 |       data: {
  113 | 
  114 |         username: 'mariyamyashfeen'
  115 | 
  116 |       }
  117 | 
  118 |     }
  119 | 
  120 |   );
  121 |  
  122 |   console.log('PUT Status:', PUTResponse.status());
  123 |  
  124 |   expect(PUTResponse.status()).toBe(200);
  125 |  
  126 | 
  127 |   // 5. GET AFTER PUT
  128 |  
  129 |   const GETAfterPut = await request.get(
  130 | 
  131 |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  132 | 
  133 |     {
  134 | 
  135 |       headers
  136 | 
  137 |     }
  138 | 
  139 |   );
  140 |  
  141 |   expect(GETAfterPut.status()).toBe(200);
  142 |  
  143 |   const updatedUser = await GETAfterPut.json();
  144 |  
  145 |   console.log('Updated User:', updatedUser);
  146 |  
  147 |   expect(updatedUser.username).toBe('john_updated');
  148 |  
  149 |  
  150 | 
  151 |   // 6. DELETE USER
  152 | 
  153 |   const DELETEResponse = await request.delete(
  154 | 
  155 |     'DELETE_URL_FROM_SWAGGER',
  156 | 
  157 |     {
  158 | 
  159 |       headers
  160 | 
  161 |     }
  162 | 
  163 |   );
  164 |  
  165 |   console.log('DELETE Status:', DELETEResponse.status());
  166 |  
  167 |   expect(DELETEResponse.status()).toBe(200);
  168 |  
  169 |  
  170 |   // 7. GET AFTER DELETE
  171 |  
  172 |   const GETAfterDelete = await request.get(
  173 | 
  174 |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  175 | 
  176 |     {
  177 | 
  178 |       headers
  179 | 
  180 |     }
  181 | 
  182 |   );
  183 |  
  184 |   console.log(
  185 | 
  186 |     'GET After Delete Status:',
  187 | 
  188 |     GETAfterDelete.status()
  189 | 
  190 |   );
  191 |  
  192 |   expect(GETAfterDelete.status()).toBe(404);
  193 |  
  194 | });
  195 | 
  196 |  
```