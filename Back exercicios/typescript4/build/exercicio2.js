"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" Turma Ailton - exercicio 2 ");
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["NORMAL"] = "Normal";
})(Role || (Role = {}));
const personToArray = {
    id: 1234,
    name: "Turma Ailton :D",
    email: "br@email",
    password: "12345",
    role: Role.NORMAL,
    userAccount: true,
    userPermission: true
};
const userInfoArray = [];
userInfoArray.push(personToArray);
userInfoArray.push(personToArray);
const personAdmToArray = {
    id: "123adm",
    name: "Ailton admin",
    email: "email@ailton.adm",
    password: "passWord123",
    role: Role.ADMIN,
    admAccount: true,
    admPermission: true
};
const arrayOfPerson = [];
arrayOfPerson.push(personToArray);
arrayOfPerson.push(personAdmToArray);
console.table(arrayOfPerson);
//# sourceMappingURL=exercicio2.js.map