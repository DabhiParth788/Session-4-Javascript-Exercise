// Function to load code into the code display container
function loadTaskCode(fileName) {
  fetch(fileName)
    .then((response) => {
      if (!response.ok) {
        throw new Error("File not found");
      }
      return response.text();
    })
    .then((data) => {
      const codeDisplay = document.getElementById("code-display");
      codeDisplay.innerHTML = `<pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap">${data}</pre>`;
    })
    .catch((error) => {
      const codeDisplay = document.getElementById("code-display");
      codeDisplay.textContent = "Error loading file: " + error.message;
    });
}

// Show specific task and hide others
function showTask(taskId) {
  const tasks = document.querySelectorAll("#task-display > div");
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.classList.remove("hidden");
    } else {
      task.classList.add("hidden");
    }
  });
}

// Task 1
function task1(string) {
  let sum = 0;
  let tempNumber = "";
  for (let char of string) {
    if (!isNaN(char) && char !== " ") {
      tempNumber += char;
    } else if (tempNumber.length > 0) {
      sum += parseInt(tempNumber);
      tempNumber = "";
    }
  }
  if (tempNumber.length > 0) {
    sum += parseInt(tempNumber);
  }
  return sum;
}

function runTask1() {
  const input = document.getElementById("task1Input").value;
  const result = task1(input);
  document.getElementById("task1Result").innerText = result;
}

// Task 2
function task2(input) {
  let sum = 0;
  let tempNumber = "";
  for (let char of input) {
    if (char === ",") {
      if (tempNumber.length > 0) {
        sum += parseFloat(tempNumber);
        tempNumber = "";
      }
    } else {
      tempNumber += char.trim();
    }
  }
  if (tempNumber.length > 0) {
    sum += parseFloat(tempNumber);
  }
  return sum;
}

function runTask2() {
  const input = document.getElementById("task2Input").value;
  const result = task2(input);
  document.getElementById("task2Result").innerText = result;
}

// Task 3
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return 0.5 * this.base * this.height;
  }
}

function runTask3() {
  const circle = new Circle(5);
  const triangle = new Triangle(10, 6);
  const result = `Circle Area: ${circle
    .area()
    .toFixed(2)}, Triangle Area: ${triangle.area().toFixed(2)}`;
  document.getElementById("task3Result").innerText = result;
}

// Task 4
class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
    }
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    return this.departments.join(", ");
  }
}

const uni = new University("GTU");

function addDepartment() {
  const department = document.getElementById("departmentInput").value;
  uni.addDepartment(department);
  displayDepartments();
}

function removeDepartment() {
  const department = document.getElementById("departmentInput").value;
  uni.removeDepartment(department);
  displayDepartments();
}

function displayDepartments() {
  document.getElementById("task4Result").innerText = uni.displayDepartments();
}

// Task 5
function fibonacciSeries(steps) {
  if (steps <= 0) return [];
  const series = [0, 1];
  for (let i = 2; i < steps; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, steps);
}

function printFibonacci() {
  const steps = parseInt(document.getElementById("steps").value);
  const result = fibonacciSeries(steps);
  document.getElementById("task5Result").innerText = result.join(", ");
}

// Task 6
function factorial(n) {
  if (n < 0) return "Invalid Input";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function runFactorial() {
  const n = parseInt(document.getElementById("factorialInput").value);
  const result = factorial(n);
  document.getElementById("task6Result").innerText = result;
}
