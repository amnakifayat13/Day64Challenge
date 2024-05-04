let person: {
    name: string,
    age: number,
    jobTitle?: string,
    address: {
        street: string,
        city: string,
    }
}

person = {
    name: "Amna",
    age: 30,
    jobTitle: "Student",
    address:{
        street: "Korangi 123 Road",
        city: "Karachi"
    }
}
console.log(person);
