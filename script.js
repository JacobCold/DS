//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych

const booleanType = true;
const numberType = 15555;
const stringType = "Kurs devstock, testowy string";

console.log(
  `Loguję boolean type: ${booleanType} oraz typ zmiennej: ${typeof booleanType}. 
    Loguję number type: ${numberType} oraz typ zmiennej: ${typeof numberType}. 
    Loguję string type: ${stringType} oraz typ zmiennej: ${typeof stringType}`
);

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined

console.log("Wynik działania 2 + '2' = ", 2 + "2"); // wynik to string 22, dlatego że znak "+" ma pierwszeństwo w konkatenacji (łączniu strignów) przed dodawaniem liczb. W tym przypadku 2 typu number zostaje zamieniona na string i dwa stringi są łączone.
console.log("Wynik dwóch cyfr 2 + 2: ", 2 + 2); // wynik to po prostu 4, dwie wartości typu number są do siebie dodawane
console.log("Wynik działania 2 * '2' =", 2 * "2"); // wynik 4 przy mnożeniu została zrobiona konwersja niejawna typu string "2" na number i liczby zostały przez siebie przemnożone
console.log("Wynik porównania 1 == true: ", 1 == true); // wynik true w tym przypadku nie jest wykonane porównanie z trzech znaków równości (typy nie są porównywane) i wykonana została konwersja niejawna typu number (1) na boolean
console.log("Wynik porównania 0 == false: ", 0 == false); // sytuacja podobna jak wyżej 0 jest zamieniane na typ boolean false, czyli wynikiem porównaia false do false jest wynik true
console.log("Wynik porównania 0 == null: ", 0 == null); // wynik jest false, ponieważ 0 w JS to nie to samo co null
console.log("Wynik porównania null == undefined ", null == undefined); // wynik jest true, ponieważ zostały "luźno" porównane dwa znaki równości. W kontekście booleana obie wartości są false więc wynik wyszedł true.
//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

// "=" - jeden znak równości oznacza przypisanie wartości
// "==" - dwa znaki równości to operator porównania. Porównuje dwie wartości ale nie typy. W przypadku różnych typów JS dokonuje konwersji niejawnej.
// "===" - trzy znaki równości to operator porównania. Porównuje wartości ale i typy, a więc jeżeli wartości są różnych typów wynik zawsze będzie false. JS nie dokona konwersji.

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli

console.log(
  `Typ prosty odnosi się bezpośrednio do przypisanej wartości np: typ number const myNumber = 5; odnosi się bezpośrednio do tej wartości w pamięci, dlatego takiego consta nie nadpiszemy. Natomiast typ złożony odnosi się do referencji. Typem złożonym jest np. tablica i tablicy jako tablicy w const nie zmienimy na inny typ np. number ale już zawartość takiej array'ki możemy mdyfikować dowolnie zgodnie z zasadami JS`
);

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)

let val = 0;
let val2 = Boolean(val);

// let num = "2137" (przekonwertuj na typ Number)

let num = "2137";
let num2 = Number(num);

// let str = 007 (przekonwertuj na String)

let str = 007;
let str2 = String(str);
// let und = undefined (przekonwertuj na Boolean)

let und = undefined;
let und2 = Boolean(und);

console.log("val2", val2, "num2", num2, "str2", str2, "und2", und2);

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

const pushedArray = new Array();

pushedArray.push(1, 2, 3);

console.log("Pushed array", pushedArray);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

const myNewObject = new Object();

myNewObject["key"] = "valueOfKey";

myNewObject.newKey = "valueOfNewKey";

Object.assign(myNewObject, { a: "valueOfA" });

console.log("My new object", myNewObject);

//g)* opisz krótko czym dokładnie jest typ NaN
//NaN to wartość reprezentuje not a number, najczęściej jest wynikiem błędnego działania w JS.
//np. mnożenia stringa "string" razy number np 5. W takiej sytuacji JS nie potrafi przekonwertować
// stringa na number i z takiego działania wychodzi wartość NaN. Co ciekawe, sam NaN ma przypisany typ
// Number więc przy pisaniu programów trzeba pamiętać o zabezpieczeniu się na taki wypadek.

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

// Symbol tworzymy poprzez wywołanie Symbol() - może mieć przypisany opis w nawiasie. Symbol reprezentuje
// unikalną wartość w naszym programie i nawet jeżeli ma ten sam opis to nigdy nie będzie taki sam.

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(
  "Wyświetlam wynik funkcji sumOfThree dla trzech parametrów: 5, 4 i 3: ",
  sumOfThree(5, 4, 3)
);

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

const triangleArea = (height, base) => (height * base) / 2;

console.log("Pole trójkąta H = 5, P = 10: ", triangleArea(5, 10));

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

const yearsSinceEighteen = (actualAge) => {
  if (actualAge < 18) {
    console.log("Wygląda na to, że jeszcze nie skończyłeś 18 lat!");
  } else {
    let yearsSinceEighteen = actualAge - 18;

    return console.log(
      `Od twoich 18-tych urodzin minęło ${yearsSinceEighteen} lat :)`
    );
  }
};

yearsSinceEighteen(15);
yearsSinceEighteen(25);

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

const checkArrayLengthAndThirdElement = (arr) =>
  console.log(
    `Przekazana tablica ma ${arr.length} elementów, a elementem numer 3 jest ${arr[2]}.`
  );

checkArrayLengthAndThirdElement([5, 19, 25, 18, 16]);

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

let testPerson2 = {
  name: "Jakub",
  surname: "Kowalski",
  age: 25,
  height: 185,
};

const describePerson = (person) =>
  console.log(
    `Pan/i ${person.name} ${person.surname} ma ${person.age} lat oraz ${person.height} cm wzrostu.`
  );

describePerson(testPerson);
describePerson(testPerson2);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

const modifyPersonAge = (person, age) => (person.age = age);

modifyPersonAge(testPerson, 56);

describePerson(testPerson);

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

const fizzBuzzFunction = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    console.log("Wprowadzona wartość musi być liczbą");
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
};

console.log(fizzBuzzFunction(15));

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

const isEvenNumber = (number) =>
  number % 2 === 0
    ? console.log("Wprowadzona liczba jest parzysta")
    : console.log("Wprowadzona liczba nie jest parzysta");

isEvenNumber(6);

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

const oneToTenRandomNumber = () => Math.floor(Math.random() * (11 - 1) + 1);

console.log("Losowa liczba z przedziału od 1 do 10:", oneToTenRandomNumber());

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

const randomNumber = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum) + minNum);

console.log("Losowa liczba z zadanego przedziału:", randomNumber(-50, 1000));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//Math.pow()
const circleField = (radius) => 3.14 * Math.pow(radius, 2);

const circleField1 = circleField(5);
const circleField2 = circleField(0.5);
const circleField3 = circleField(17);

//Math.max()
const maxValueFromThree = (value1, value2, value3) =>
  Math.max(value1, value2, value3);

//Math.min()
const minValueFromThree = (value1, value2, value3) =>
  Math.min(value1, value2, value3);

console.log(
  `Największe pole z 3 podanych okręgów wynosi ${maxValueFromThree(
    circleField1,
    circleField2,
    circleField3
  )}, zgadnij który to?`
);

console.log(
  `Najmniejsze pole z 3 podanych okręgów wynosi ${minValueFromThree(
    circleField1,
    circleField2,
    circleField3
  )}, zgadnij który to?`
);

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9

const fromOneToNineCount = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
};

//b) napisz pętlę która odliczy od 9 do 1

const fromNineToOneCount = () => {
  for (let i = 9; i >= 1; i--) {
    console.log(i);
  }
};

//c) napisz pętlę która odliczy od 5 do 15

const fromFiveToFifteenCount = () => {
  for (let i = 5; i <= 15; i++) {
    console.log(i);
  }
};

//d) napisz pętlę która odliczy od 0 do -10

const fromZeroToMinusTenCount = () => {
  for (let i = 0; i >= -10; i--) {
    console.log(i);
  }
};

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2

const fromOneToTwentyCount = () => {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
const fromTenToMinusTenCountEveryFour = () => {
  for (let i = 10; i >= -10; i += -4) {
    console.log(i);
  }
};

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
const fromOneToHoundred = () => {
  for (let i = 1; i <= 100; i *= 2) {
    console.log(i);
  }
};

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
const fromOneToTenCountOddNum = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
const fromOneToTenCountOddOrEven = () => {
  for (let i = 1; i <= 10; i++) {
    i % 2 === 0
      ? console.log(i, "Liczba parzysta")
      : console.log(i, "Liczba nieparzysta");
  }
};

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

const fromOneToXCount = (x) => {
  for (let i = 1; i <= x; i++) {
    console.log(i);
  }
};

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

const fromOneToFiftyIterateEveryX = (i) => {
  for (i; i <= 50; i += i) {
    console.log(i);
  }
};

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

const welcomeFunction = (names) => {
  names.forEach((name) => console.log("Witaj na pokładzie", name));
};

welcomeFunction(arrNames);

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

const describeCar = (cars) => {
  cars.forEach((car) => console.log("Przed tobą stoi", car.color, car.brand));
};

describeCar(arrObjects);

//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko parzyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const showOnlyEvenNumbers = (array) =>
  array.forEach((element) => (element % 2 === 0 ? console.log(element) : 0));

showOnlyEvenNumbers(arrNumbers);
//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

const checkElementsFromArrayTypes = (array) => {
  array.forEach((element) => {
    if (typeof element !== "number" || isNaN(element)) {
      arrOther.push(element);
    } else if (element % 2 === 0) {
      arrEven.push(element);
      arrNubers.push(element);
    } else {
      arrNubers.push(element);
    }
  });

  return { arrOther, arrNubers, arrEven };
};

console.log(checkElementsFromArrayTypes(arrTypes));

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names = ["Seba", "Kari", "Mati", "Andżi"];

names.map((name) => console.log(name));

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array10OnlyEven = array10.filter((value) => value % 2 === 0);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const onlyWomenFromPeople = people.filter(
  (person) => person.gender === "female"
);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const readyShoppingList = shopping.toLowerCase().split(" ").sort();

console.log(readyShoppingList);

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const reversedJoinedAlphabet = alphabet.reverse().join("").toString();

console.log(reversedJoinedAlphabet);
