# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api.spec.js >> User API CRUD Test
- Location: tests\api.spec.js:205:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 401
```

# Test source

```ts
  205 | test('User API CRUD Test', async ({ request }) => {
  206 | 
  207 |     // 1. LOGIN
  208 |     const loginResponse = await request.post(
  209 |         'https://api-testing-postman.vercel.app/api/v1/users/login',
  210 |         {
  211 |             data
  212 |         }
  213 |     );
  214 | 
  215 |     expect(loginResponse.status()).toBe(200);
  216 | 
  217 |     const tokenData = await loginResponse.json();
  218 | 
  219 |     console.log('Login:', tokenData);
  220 | 
  221 |     // CORRECT TOKEN
  222 |     const token = tokenData.data.accessToken;
  223 | 
  224 |     // 2. AUTHORIZATION HEADER
  225 |     const headers = {
  226 |         Authorization: `Bearer ${token}`
  227 |     };
  228 | 
  229 |     // 3. GET USER
  230 |     const GETResponse = await request.get(
  231 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  232 |         {
  233 |             headers
  234 |         }
  235 |     );
  236 | 
  237 |     expect(GETResponse.status()).toBe(200);
  238 | 
  239 |     const user = await GETResponse.json();
  240 | 
  241 |     console.log('Original User:', user);
  242 | 
  243 |     // 4. PUT / UPDATE USER
  244 |     const PUTResponse = await request.put(
  245 |         'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  246 |         {
  247 |             headers,
  248 |             data: {
  249 |                 fullname: "Mariyam yashfeen",
  250 |                 email: "mariyam@gmail.com",
  251 |                 username: "mariyam_updated"
  252 |             }
  253 |         }
  254 |     );
  255 | 
  256 |     console.log('PUT Status:', PUTResponse.status());
  257 | 
  258 |     const PUTData = await PUTResponse.json();
  259 | 
  260 |     console.log('PUT Response:', PUTData);
  261 | 
  262 |     expect(PUTResponse.status()).toBe(200);
  263 | 
  264 |     // 5. GET AFTER PUT
  265 |     const GETAfterPut = await request.get(
  266 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  267 |         {
  268 |             headers
  269 |         }
  270 |     );
  271 | 
  272 |     expect(GETAfterPut.status()).toBe(200);
  273 | 
  274 |     const updatedUser = await GETAfterPut.json();
  275 | 
  276 |     console.log('Updated User:', updatedUser);
  277 | 
  278 |     expect(updatedUser.data.username).toBe('mariyam_updated');
  279 | 
  280 |     // 6. DELETE USER
  281 |     const DELETEResponse = await request.delete(
  282 |         'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
  283 |         {
  284 |             headers
  285 |         }
  286 |     );
  287 | 
  288 |     console.log('DELETE Status:', DELETEResponse.status());
  289 | 
  290 |     expect(DELETEResponse.status()).toBe(200);
  291 | 
  292 |     // 7. GET AFTER DELETE
  293 |     const GETAfterDelete = await request.get(
  294 |         'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  295 |         {
  296 |             headers
  297 |         }
  298 |     );
  299 | 
  300 |     console.log(
  301 |         'GET After Delete Status:',
  302 |         GETAfterDelete.status()
  303 |     );
  304 | 
> 305 |     expect(GETAfterDelete.status()).toBe(404);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  306 | });
```