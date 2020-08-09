// const obj: { name: string; age: number } = {
var obj = {
    name: "Hassan",
    age: 30,
    hobbies: ["Cricket", "Coding"],
    role: [2, "author"]
};
console.log(obj.age);
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
