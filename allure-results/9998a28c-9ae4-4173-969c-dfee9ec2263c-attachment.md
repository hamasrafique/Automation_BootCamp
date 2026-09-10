# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api.spec.js >> User API CRUD Test
- Location: tests\api.spec.js:48:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
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
  40  |     email: "mariyam@gmail.com",
  41  | 
  42  |     username: "mariyam",
  43  | 
  44  |     password: "mariyam123"
  45  | 
  46  | };
  47  | 
  48  | test('User API CRUD Test', async ({ request }) => {
  49  | 
  50  |     // 1. LOGIN
  51  | 
  52  |     const loginResponse = await request.post(
  53  | 
  54  |         'https://api-testing-postman.vercel.app/api/v1/users/login',
  55  | 
  56  |         {
  57  | 
  58  |             data
  59  | 
  60  |         }
  61  | 
  62  |     );
  63  | 
  64  |     expect(loginResponse.status()).toBe(200);
  65  | 
  66  |     const tokenData = await loginResponse.json();
  67  | 
  68  |     console.log('Login:', tokenData);
  69  | 
  70  |     const token = tokenData.token;
  71  | 
  72  | 
  73  |     // 2. AUTHORIZATION HEADER
  74  | 
  75  |     const headers = {
  76  | 
  77  |         Authorization: `Bearer ${token}`
  78  | 
  79  |     };
  80  | 
  81  | 
  82  |     // 3. GET USER
  83  | 
  84  |     const GETResponse = await request.get(
  85  | 
  86  |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  87  | 
  88  |         {
  89  | 
  90  |             headers
  91  | 
  92  |         }
  93  | 
  94  |     );
  95  | 
  96  |     expect(GETResponse.status()).toBe(200);
  97  | 
  98  |     const user = await GETResponse.json();
  99  | 
  100 |     console.log('Original User:', user);
  101 | 
  102 |     // 4. PUT / UPDATE USER
  103 | 
  104 |     const PUTResponse = await request.put(
  105 | 
  106 |         'https://api-testing-postman.vercel.app/api/v1/users/register',
  107 | 
  108 |         {
  109 | 
  110 |             headers,
  111 | 
  112 |             data: {
  113 |                 fullname: "Mariyam yashfeen",
  114 |                 email: "mariyam@gmail.com",
  115 |                 username: "mariyam"
  116 | 
  117 |             }
  118 | 
  119 |         }
  120 | 
  121 |     );
  122 | 
  123 |     console.log('PUT Status:', PUTResponse.status());
  124 | 
> 125 |     expect(PUTResponse.status()).toBe(200);
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  126 | 
  127 | 
  128 |     // 5. GET AFTER PUT
  129 | 
  130 |     const GETAfterPut = await request.get(
  131 | 
  132 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  133 | 
  134 |         {
  135 | 
  136 |             headers
  137 | 
  138 |         }
  139 | 
  140 |     );
  141 | 
  142 |     expect(GETAfterPut.status()).toBe(200);
  143 | 
  144 |     const updatedUser = await GETAfterPut.json();
  145 | 
  146 |     console.log('Updated User:', updatedUser);
  147 | 
  148 |     expect(updatedUser.username).toBe('john_updated');
  149 | 
  150 | 
  151 | 
  152 |     // 6. DELETE USER
  153 | 
  154 |     const DELETEResponse = await request.delete(
  155 | 
  156 |         'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
  157 | 
  158 |         {
  159 | 
  160 |             headers
  161 | 
  162 |         }
  163 | 
  164 |     );
  165 | 
  166 |     console.log('DELETE Status:', DELETEResponse.status());
  167 | 
  168 |     expect(DELETEResponse.status()).toBe(200);
  169 | 
  170 | 
  171 |     // 7. GET AFTER DELETE
  172 | 
  173 |     const GETAfterDelete = await request.get(
  174 | 
  175 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  176 | 
  177 |         {
  178 | 
  179 |             headers
  180 | 
  181 |         }
  182 | 
  183 |     );
  184 | 
  185 |     console.log(
  186 | 
  187 |         'GET After Delete Status:',
  188 | 
  189 |         GETAfterDelete.status()
  190 | 
  191 |     );
  192 | 
  193 |     expect(GETAfterDelete.status()).toBe(404);
  194 | 
  195 | });
  196 | 
```