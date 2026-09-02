import { test, expect } from '@playwright/test';

import {
  readUsers,
  writeUsers,
  writeRuntimeData
} from '../../utils/testData.js';


test('Complete User CRUD API Automation', async ({ request }) => {

  // =====================================================
  // 1. GENERATE USER DATA
  // =====================================================

  const timestamp = Date.now();

  const user = {
    fullname: `Test User ${timestamp}`,
    email: `testuser${timestamp}@gmail.com`,
    username: `testuser${timestamp}`,
    password: 'Test@12345'
  };

  console.log('Generated User:', user);


  // =====================================================
  // 2. REGISTER USER
  // =====================================================

  const registerResponse = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/register',
    {
      data: user
    }
  );

  console.log(
    'Register Status:',
    registerResponse.status()
  );

  console.log(
    'Register Response:',
    await registerResponse.text()
  );

  expect(registerResponse.status()).toBe(201);


  // =====================================================
  // 3. WRITE REGISTERED USER TO TESTDATA
  // =====================================================

  const users = readUsers();

  users.push({
    ...user,
    status: 'registered'
  });

  writeUsers(users);

  console.log(
    'User saved to users.json'
  );


  // =====================================================
  // 4. LOGIN
  // =====================================================

  const loginResponse = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: user
    }
  );

  console.log(
    'Login Status:',
    loginResponse.status()
  );

  expect(loginResponse.status()).toBe(200);

  const loginData = await loginResponse.json();

  const token = loginData.token;

  console.log(
    'Token received'
  );


  // =====================================================
  // 5. SAVE TOKEN
  // =====================================================

  writeRuntimeData({
    user: user,
    token: token
  });


  // =====================================================
  // 6. AUTHORIZATION
  // =====================================================

  let headers = {
    Authorization: `Bearer ${token}`
  };


  // =====================================================
  // 7. GET CURRENT USER
  // =====================================================

  const getResponse = await request.get(
    'https://api-testing-postman.vercel.app/api/v1/users/current-user',
    {
      headers
    }
  );

  console.log(
    'GET Status:',
    getResponse.status()
  );

  expect(getResponse.status()).toBe(200);

  const currentUserResponse =
    await getResponse.json();

  console.log(
    'Current User:',
    currentUserResponse
  );

  const currentUser =
    currentUserResponse.data;


  // =====================================================
  // 8. SAVE USER ID
  // =====================================================

  const userId = currentUser._id;

  const runtimeData = {
    user,
    userId,
    token
  };

  writeRuntimeData(runtimeData);


  // =====================================================
  // 9. GENERATE UPDATED DATA
  // =====================================================

  const updatedUser = {
    fullname: `Updated User ${timestamp}`,
    email: `updated${timestamp}@gmail.com`,
    username: `updated${timestamp}`
  };

  console.log(
    'Updated User:',
    updatedUser
  );


  // =====================================================
  // 10. PUT
  // =====================================================

  const putResponse = await request.put(
    'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
    {
      headers,
      data: updatedUser
    }
  );

  console.log(
    'PUT Status:',
    putResponse.status()
  );

  console.log(
    'PUT Response:',
    await putResponse.text()
  );

  expect(putResponse.status()).toBe(200);


  // =====================================================
  // 11. WRITE UPDATED USER
  // =====================================================

  const allUsers = readUsers();

  const index = allUsers.findIndex(
    item => item.email === user.email
  );

  if (index !== -1) {

    allUsers[index] = {
      ...allUsers[index],

      fullname: updatedUser.fullname,
      email: updatedUser.email,
      username: updatedUser.username,

      status: 'updated'
    };

  }

  writeUsers(allUsers);


  // =====================================================
  // 12. GET AFTER PUT
  // =====================================================

  const getAfterPut = await request.get(
    'https://api-testing-postman.vercel.app/api/v1/users/current-user',
    {
      headers
    }
  );

  console.log(
    'GET After PUT:',
    getAfterPut.status()
  );

  expect(getAfterPut.status()).toBe(200);

  const updatedResponse =
    await getAfterPut.json();

  console.log(
    'Updated User From API:',
    updatedResponse
  );


  // =====================================================
  // 13. VERIFY UPDATE
  // =====================================================

  expect(updatedResponse.data.fullname)
    .toBe(updatedUser.fullname);

  expect(updatedResponse.data.email)
    .toBe(updatedUser.email);

  expect(updatedResponse.data.username)
    .toBe(updatedUser.username);


  // =====================================================
  // 14. LOGIN WITH UPDATED USER
  // =====================================================

  const loginAfterPut =
    await request.post(
      'https://api-testing-postman.vercel.app/api/v1/users/login',
      {
        data: {
          ...updatedUser,
          password: user.password
        }
      }
    );

  console.log(
    'Login After PUT:',
    loginAfterPut.status()
  );

  expect(loginAfterPut.status()).toBe(200);

  const updatedLoginData =
    await loginAfterPut.json();

  const newToken =
    updatedLoginData.token;


  // =====================================================
  // 15. UPDATE TOKEN
  // =====================================================

  headers = {
    Authorization: `Bearer ${newToken}`
  };

  writeRuntimeData({
    user: updatedUser,
    password: user.password,
    userId,
    token: newToken
  });


  // =====================================================
  // 16. DELETE
  // =====================================================

  const deleteResponse =
    await request.delete(
      'YOUR_DELETE_ENDPOINT_FROM_SWAGGER',
      {
        headers
      }
    );

  console.log(
    'DELETE Status:',
    deleteResponse.status()
  );

  console.log(
    'DELETE Response:',
    await deleteResponse.text()
  );

  expect(deleteResponse.status()).toBe(200);


  // =====================================================
  // 17. UPDATE TESTDATA
  // =====================================================

  const finalUsers = readUsers();

  const finalIndex = finalUsers.findIndex(
    item => item.email === updatedUser.email
  );

  if (finalIndex !== -1) {

    finalUsers[finalIndex].status =
      'deleted';

  }

  writeUsers(finalUsers);


  // =====================================================
  // 18. GET AFTER DELETE
  // =====================================================

  const getAfterDelete =
    await request.get(
      'https://api-testing-postman.vercel.app/api/v1/users/current-user',
      {
        headers
      }
    );

  console.log(
    'GET After DELETE:',
    getAfterDelete.status()
  );

  expect(getAfterDelete.status()).toBe(404);


  // =====================================================
  // 19. LOGIN AFTER DELETE
  // =====================================================

  const loginAfterDelete =
    await request.post(
      'https://api-testing-postman.vercel.app/api/v1/users/login',
      {
        data: {
          ...updatedUser,
          password: user.password
        }
      }
    );

  console.log(
    'Login After DELETE:',
    loginAfterDelete.status()
  );

  expect(loginAfterDelete.status()).toBe(404);


  // =====================================================
  // 20. FINAL RESULT
  // =====================================================

  writeRuntimeData({
    userId,
    originalUser: user,
    updatedUser,
    deleted: true
  });

});
