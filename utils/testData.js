import fs from 'fs';

const usersFile = './testdata/users.json';
const runtimeFile = './testdata/runtimeData.json';

export function readUsers() {
  return JSON.parse(
    fs.readFileSync(usersFile, 'utf-8')
  );
}

export function writeUsers(users) {
  fs.writeFileSync(
    usersFile,
    JSON.stringify(users, null, 2)
  );
}

export function readRuntimeData() {
  return JSON.parse(
    fs.readFileSync(runtimeFile, 'utf-8')
  );
}

export function writeRuntimeData(data) {
  fs.writeFileSync(
    runtimeFile,
    JSON.stringify(data, null, 2)
  );
}
