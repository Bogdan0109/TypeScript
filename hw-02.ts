// Приклад 1
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// Приклад 2
let anything: any;
anything = -20;
anything = "Text";
anything = {};

// Приклад 3
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

// Приклад 4
let person: [string, number];
person = ["Max", 21];

// Приклад 5
enum Status {
  LOADING,
  READY,
}

let stringOrNumber: string | number;

let enableOrDisable: "enable" | "disable";

// Приклад 6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Приклад 7
type DatabaseDate = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt: string;
  };
};
const page1: DatabaseDate = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: DatabaseDate = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
