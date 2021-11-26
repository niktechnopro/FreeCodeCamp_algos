const Person = function(firstAndLast) {
  // Only change code below this line
  let fullName = firstAndLast;
  
  let splitter = (fullName) => {
    const [first, last] = fullName.split(" ");
    return {
      first,
      last
    }
  }
  // Complete the method below and implement the others similarly
  this.getFirstName = () => {
    return splitter(fullName).first;
  }

  this.getLastName = () => {
    return splitter(fullName).last;
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = (first) => {
    fullName = first + " " + splitter(fullName).last;
  }

  this.setLastName = (last) => {
    fullName = splitter(fullName).first + " " + last;
  }
  
  this.setFullName = (name) => {
    fullName = name;
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();