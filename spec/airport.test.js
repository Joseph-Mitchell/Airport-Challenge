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
expected = 1;
testAirport.assignPlane(testPlane);
actual = testAirport.planes[testAirport.planes.length - 1].id;

//Assert
result = assertEqual(expected, actual);

//Report
console.log(`Object passed to assignPlane() => Object added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

//? Test 2
//Arrange
testAirport = new Airport();
testPlane = { };

//Act
expected = 0;
testAirport.assignPlane(testPlane);
actual = testAirport.planes.length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log(`Object without id passed to assignPlane() => Object not added to planes: ${result ? "Passed" : "Failed"}`);

CleanUp();

console.log("\n====================");