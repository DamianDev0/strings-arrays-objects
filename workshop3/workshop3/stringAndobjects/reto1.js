const users = {};

function newUser() {
  const name1 = prompt(
    "Dame tu nombre completo por favor."
  ).toLocaleLowerCase();
  const CompleteName = name1.split(" ");

  let username =
    CompleteName[0].slice(0, 3) +
    CompleteName[1].slice(0, 3) +
    CompleteName[2].slice(0, 3);
  let password =
    CompleteName[0].slice(3) +
    CompleteName[1].slice(3) +
    CompleteName[2].slice(3);

  const timesRepeatedUsername = checkTimesRepeatedUsername(username);

  if (timesRepeatedUsername > 0) {
    username += timesRepeatedUsername;
    password += timesRepeatedUsername;
  }

  const UserEmail = username + "@myDomain.com";

  alert(
    `¡Tu nuevo nombre de usuario es ${username} y tu nuevo correo es ${UserEmail} y tu contraseña por defecto es ${password}!`
  );

  users[username] = {
    email: UserEmail,
    password: password,
  };

  return users;
}

function checkTimesRepeatedUsername(usernameToCheck) {
  return Object.keys(users).filter((username) =>
    username.startsWith(usernameToCheck)
  ).length;
}

function Ask() {
  const option = prompt("¿Deseas hacer otro registro? (si/no)").toLowerCase();
  return option === "si";
}

alert("Bienvenido al generador de usuario.");
let wantToAddMoreUsers = true;
while (wantToAddMoreUsers) {
  newUser();
  wantToAddMoreUsers = Ask();
}

console.log(users);
