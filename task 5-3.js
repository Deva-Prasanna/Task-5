// 3.Write a “person” class to hold all the details



class Person {
    constructor(name, age, gender, occupation) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  

    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Occupation: ${this.occupation}`);
    }
  }
  
  // SAMPLE TO CHECK THE PROGRAM:

  const person1 = new Person("Deva Prasanna A", 23, "Male", "Engineer-TCS");
  person1.displayInfo(); 
  
 
  