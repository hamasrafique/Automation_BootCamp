// import { test, expect } from '@playwright/test';

// const data = {
//   "email": "mariyam@gmail.com",
//   "username": "mariyam",
//   "password": "mariyam123"
// }
// test('Get All users API Test', async ({request}) => {
// const response = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//     data: data
//     }

// );
// console.log(await response.json());
// expect(response.status()).toBe(200);

//   const tokenData = await response.json();
//   const token = tokenData.token;

//  const GETResponse = await request.get(
//     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   );
//      console.log(GETResponse.status());
//   expect(GETResponse.status()).toBe(200);


// });

// import { test, expect } from '@playwright/test';

// const data = {

//     email: "mariyam@gmail.com",

//     username: "mariyam",

//     password: "mariyam123"

// };

// test('User API CRUD Test', async ({ request }) => {

//     // 1. LOGIN

//     const loginResponse = await request.post(

//         'https://api-testing-postman.vercel.app/api/v1/users/login',

//         {

//             data

//         }

//     );

//     expect(loginResponse.status()).toBe(200);

//     const tokenData = await loginResponse.json();

//     console.log('Login:', tokenData);

//     const token = tokenData.token;


//     // 2. AUTHORIZATION HEADER

//     const headers = {

//         Authorization: `Bearer ${token}`

//     };


//     // 3. GET USER

//     const GETResponse = await request.get(

//         'https://api-testing-postman.vercel.app/api/v1/users/current-user',

//         {

//             headers

//         }

//     );

//     expect(GETResponse.status()).toBe(200);

//     const user = await GETResponse.json();

//     console.log('Original User:', user);

//     // 4. PUT / UPDATE USER

//     const PUTResponse = await request.put(

//         'https://api-testing-postman.vercel.app/api/v1/users/register',

//         {

//             headers,

//             data: {
//                 fullname: "Mariyam yashfeen",
//                 email: "mariyam@gmail.com",
//                 username: "mariyam"

//             }

//         }

//     );

//     console.log('PUT Status:', PUTResponse.status());

//     expect(PUTResponse.status()).toBe(200);


//     // 5. GET AFTER PUT

//     const GETAfterPut = await request.get(

//         'https://api-testing-postman.vercel.app/api/v1/users/current-user',

//         {

//             headers

//         }

//     );

//     expect(GETAfterPut.status()).toBe(200);

//     const updatedUser = await GETAfterPut.json();

//     console.log('Updated User:', updatedUser);

//     expect(updatedUser.username).toBe('mariyam');



//     // 6. DELETE USER

//     const DELETEResponse = await request.delete(

//         'https://api-testing-postman.vercel.app/api/v1/users/delete-account',

//         {

//             headers

//         }

//     );

//     console.log('DELETE Status:', DELETEResponse.status());

//     expect(DELETEResponse.status()).toBe(200);


//     // 7. GET AFTER DELETE

//     const GETAfterDelete = await request.get(

//         'https://api-testing-postman.vercel.app/api/v1/users/current-user',

//         {

//             headers

//         }

//     );

//     console.log(

//         'GET After Delete Status:',

//         GETAfterDelete.status()

//     );

//     expect(GETAfterDelete.status()).toBe(404);

// });

import { test, expect } from '@playwright/test';

const data = {
    email: "mariyam@gmail.com",
    username: "mariyam",
    password: "mariyam123"
};

test('User API CRUD Test', async ({ request }) => {

    // 1. LOGIN
    const loginResponse = await request.post(
        'https://api-testing-postman.vercel.app/api/v1/users/login',
        {
            data
        }
    );

    expect(loginResponse.status()).toBe(200);

    const tokenData = await loginResponse.json();

    console.log('Login:', tokenData);

    // CORRECT TOKEN
    const token = tokenData.data.accessToken;

    // 2. AUTHORIZATION HEADER
    const headers = {
        Authorization: `Bearer ${token}`
    };

    // 3. GET USER
    const GETResponse = await request.get(
        'https://api-testing-postman.vercel.app/api/v1/users/current-user',
        {
            headers
        }
    );

    expect(GETResponse.status()).toBe(200);

    const user = await GETResponse.json();

    console.log('Original User:', user);

    // 4. PUT / UPDATE USER
    const PUTResponse = await request.put(
        'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
        {
            headers,
            data: {
                fullname: "Mariyam yashfeen",
                email: "mariyam@gmail.com",
                username: "mariyam_updated"
            }
        }
    );

    console.log('PUT Status:', PUTResponse.status());

    const PUTData = await PUTResponse.json();

    console.log('PUT Response:', PUTData);

    expect(PUTResponse.status()).toBe(200);

    // 5. GET AFTER PUT
    const GETAfterPut = await request.get(
        'https://api-testing-postman.vercel.app/api/v1/users/current-user',
        {
            headers
        }
    );

    expect(GETAfterPut.status()).toBe(200);

    const updatedUser = await GETAfterPut.json();

    console.log('Updated User:', updatedUser);

    expect(updatedUser.data.username).toBe('mariyam_updated');

    // 6. DELETE USER
    const DELETEResponse = await request.delete(
        'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
        {
            headers
        }
    );

    console.log('DELETE Status:', DELETEResponse.status());

    expect(DELETEResponse.status()).toBe(200);

    // 7. GET AFTER DELETE
    const GETAfterDelete = await request.get(
        'https://api-testing-postman.vercel.app/api/v1/users/current-user',
        {
            headers
        }
    );

    console.log(
        'GET After Delete Status:',
        GETAfterDelete.status()
    );

    expect(GETAfterDelete.status()).toBe(401);
});