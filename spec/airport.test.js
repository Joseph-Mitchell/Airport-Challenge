import { assertEqual } from "./test-framework.js";
import Airport from "../src/airport.js";

let expected, actual, result;
let testAirport, testPlane;

function CleanUp() {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testAirport = undefined;
    testPlane = undefined;
}


console.log("\nUser Story 1");
console.log("====================\n")

//? Test 1
//Arrange
testAirport = new Airport();
testPlane = { id: 1 };

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 1;
actual = testAirport.planes[0].id;
result = assertEqual(expected, actual);

//Report
console.log(`Object passed to assignPlane() => Object added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 2
//Arrange
testAirport = new Airport();
testPlane = { };

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 0;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Object without id passed to assignPlane() => Object not added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 3
//Arrange
testAirport = new Airport();
testPlane = "";

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 0;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Non-object passed to assignPlane() => Planes array unchanged: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 4
//Arrange
testAirport = new Airport();
testPlane;

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 0;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Undefined passed to assignPlane() => Planes array unchanged: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 5
//Arrange
testAirport = new Airport();
testPlane = { id: 0 };

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 0;
actual = testAirport.planes[0].id;
result = assertEqual(expected, actual);

//Report
console.log(`Object with id 0 passed to assignPlane() => Object added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

console.log("\nUser Story 2");
console.log("====================\n")

//? Test 1
//Arrange
testAirport = new Airport();
testPlane = { id: 15 };

for (let i = 0; i < 10; i++)
    testAirport.assignPlane({ id: i });

testAirport.capacity = 5;

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 10;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Object passed to assignPlane() when planes length more than capacity => Object not added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 2
//Arrange
testAirport = new Airport();
testPlane = { id: 15 };

for (let i = 0; i < 10; i++)
    testAirport.assignPlane({ id: i });

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 10;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Object passed to assignPlane() when planes length AT capacity => Object not added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

console.log("\nUser Story 3");
console.log("====================\n")

//? Test 1
//Arrange
testAirport = new Airport();
testPlane = { id: 1 };
testAirport.assignPlane(testPlane);

//Act
testAirport.assignPlane(testPlane);

//Assert
expected = 1;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Object passed to assignPlane() when object with same id already in planes => Object not added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

console.log("\nUser Story 4");
console.log("====================\n")

//? Test 1
//Arrange
testAirport = new Airport();

for (let i = 0; i < 10; i++)
    testAirport.assignPlane({ id: i });

//Act
testAirport.removePlane(5);

//Assert
expected = false;
actual = testAirport.planes.some((plane) => plane.id === 5);
result = assertEqual(expected, actual);

//Report
console.log(`Number passed to removePlanes() => Object with matching id removed from planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 2
//Arrange
testAirport = new Airport();
testPlane = "";

for (let i = 0; i < 10; i++)
    testAirport.assignPlane({ id: i });

//Act
testAirport.removePlane(testPlane);

//Assert
expected = 10;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Non-number passed to removePlanes() => Planes array unchanged: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 3
//Arrange
testAirport = new Airport();
testPlane;

for (let i = 0; i < 10; i++)
    testAirport.assignPlane({ id: i });

//Act
testAirport.removePlane(testPlane);

//Assert
expected = 10;
actual = testAirport.planes.length;
result = assertEqual(expected, actual);

//Report
console.log(`Non-number passed to removePlanes() => Planes array unchanged: ${result ? "Passed" : "Failed"}`);

CleanUp();

console.log("\n====================");