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

enum Role {ADMIN,READ_ONLY,AUTHOR}

const obj= {
    name: "Hassan",
    age: 30,
    hobbies: ["Cricket", "Coding"],
    role: Role.ADMIN
  };

console.log(obj.age);

for (const hobby of obj.hobbies) {
  console.log(hobby.toUpperCase());
}
