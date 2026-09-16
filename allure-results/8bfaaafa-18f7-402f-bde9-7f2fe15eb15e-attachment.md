# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\user.spec.js >> Complete User CRUD API Automation
- Location: tests\api\user.spec.js:10:5

# Error details

```
TypeError: apiRequestContext.delete: Invalid URL
```

# Test source

```ts
  220 | 
  221 |       status: 'updated'
  222 |     };
  223 | 
  224 |   }
  225 | 
  226 |   writeUsers(allUsers);
  227 | 
  228 | 
  229 |   // =====================================================
  230 |   // 12. GET AFTER PUT
  231 |   // =====================================================
  232 | 
  233 |   const getAfterPut = await request.get(
  234 |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  235 |     {
  236 |       headers
  237 |     }
  238 |   );
  239 | 
  240 |   console.log(
  241 |     'GET After PUT:',
  242 |     getAfterPut.status()
  243 |   );
  244 | 
  245 |   expect(getAfterPut.status()).toBe(200);
  246 | 
  247 |   const updatedResponse =
  248 |     await getAfterPut.json();
  249 | 
  250 |   console.log(
  251 |     'Updated User From API:',
  252 |     updatedResponse
  253 |   );
  254 | 
  255 | 
  256 |   // =====================================================
  257 |   // 13. VERIFY UPDATE
  258 |   // =====================================================
  259 | 
  260 |   expect(updatedResponse.data.fullname)
  261 |     .toBe(updatedUser.fullname);
  262 | 
  263 |   expect(updatedResponse.data.email)
  264 |     .toBe(updatedUser.email);
  265 | 
  266 |   expect(updatedResponse.data.username)
  267 |     .toBe(updatedUser.username);
  268 | 
  269 | 
  270 |   // =====================================================
  271 |   // 14. LOGIN WITH UPDATED USER
  272 |   // =====================================================
  273 | 
  274 |   const loginAfterPut =
  275 |     await request.post(
  276 |       'https://api-testing-postman.vercel.app/api/v1/users/login',
  277 |       {
  278 |         data: {
  279 |           ...updatedUser,
  280 |           password: user.password
  281 |         }
  282 |       }
  283 |     );
  284 | 
  285 |   console.log(
  286 |     'Login After PUT:',
  287 |     loginAfterPut.status()
  288 |   );
  289 | 
  290 |   expect(loginAfterPut.status()).toBe(200);
  291 | 
  292 |   const updatedLoginData =
  293 |     await loginAfterPut.json();
  294 | 
  295 |   const newToken =
  296 |     updatedLoginData.token;
  297 | 
  298 | 
  299 |   // =====================================================
  300 |   // 15. UPDATE TOKEN
  301 |   // =====================================================
  302 | 
  303 |   headers = {
  304 |     Authorization: `Bearer ${newToken}`
  305 |   };
  306 | 
  307 |   writeRuntimeData({
  308 |     user: updatedUser,
  309 |     password: user.password,
  310 |     userId,
  311 |     token: newToken
  312 |   });
  313 | 
  314 | 
  315 |   // =====================================================
  316 |   // 16. DELETE
  317 |   // =====================================================
  318 | 
  319 |   const deleteResponse =
> 320 |     await request.delete(
      |                         ^ TypeError: apiRequestContext.delete: Invalid URL
  321 |       'YOUR_DELETE_ENDPOINT_FROM_SWAGGER',
  322 |       {
  323 |         headers
  324 |       }
  325 |     );
  326 | 
  327 |   console.log(
  328 |     'DELETE Status:',
  329 |     deleteResponse.status()
  330 |   );
  331 | 
  332 |   console.log(
  333 |     'DELETE Response:',
  334 |     await deleteResponse.text()
  335 |   );
  336 | 
  337 |   expect(deleteResponse.status()).toBe(200);
  338 | 
  339 | 
  340 |   // =====================================================
  341 |   // 17. UPDATE TESTDATA
  342 |   // =====================================================
  343 | 
  344 |   const finalUsers = readUsers();
  345 | 
  346 |   const finalIndex = finalUsers.findIndex(
  347 |     item => item.email === updatedUser.email
  348 |   );
  349 | 
  350 |   if (finalIndex !== -1) {
  351 | 
  352 |     finalUsers[finalIndex].status =
  353 |       'deleted';
  354 | 
  355 |   }
  356 | 
  357 |   writeUsers(finalUsers);
  358 | 
  359 | 
  360 |   // =====================================================
  361 |   // 18. GET AFTER DELETE
  362 |   // =====================================================
  363 | 
  364 |   const getAfterDelete =
  365 |     await request.get(
  366 |       'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  367 |       {
  368 |         headers
  369 |       }
  370 |     );
  371 | 
  372 |   console.log(
  373 |     'GET After DELETE:',
  374 |     getAfterDelete.status()
  375 |   );
  376 | 
  377 |   expect(getAfterDelete.status()).toBe(404);
  378 | 
  379 | 
  380 |   // =====================================================
  381 |   // 19. LOGIN AFTER DELETE
  382 |   // =====================================================
  383 | 
  384 |   const loginAfterDelete =
  385 |     await request.post(
  386 |       'https://api-testing-postman.vercel.app/api/v1/users/login',
  387 |       {
  388 |         data: {
  389 |           ...updatedUser,
  390 |           password: user.password
  391 |         }
  392 |       }
  393 |     );
  394 | 
  395 |   console.log(
  396 |     'Login After DELETE:',
  397 |     loginAfterDelete.status()
  398 |   );
  399 | 
  400 |   expect(loginAfterDelete.status()).toBe(404);
  401 | 
  402 | 
  403 |   // =====================================================
  404 |   // 20. FINAL RESULT
  405 |   // =====================================================
  406 | 
  407 |   writeRuntimeData({
  408 |     userId,
  409 |     originalUser: user,
  410 |     updatedUser,
  411 |     deleted: true
  412 |   });
  413 | 
  414 | });
  415 | 
```