// const obj: { name: string; age: number } = {
    const obj = {
  name: "Hassan",
  age: 30,
  hobbies:['Cricket','Coding']
};

console.log(obj.age);

for(const hobby of obj.hobbies){
    console.log(hobby.toUpperCase())
}
