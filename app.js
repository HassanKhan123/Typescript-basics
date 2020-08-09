// const obj: { name: string; age: number } = {
// const obj: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Hassan",
//   age: 30,
//   hobbies: ["Cricket", "Coding"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var obj = {
    name: "Hassan",
    age: 30,
    hobbies: ["Cricket", "Coding"],
    role: Role.ADMIN
};
console.log(obj.age);
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
