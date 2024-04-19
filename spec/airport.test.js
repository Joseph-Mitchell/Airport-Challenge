import { assertEqual } from "./test-framework.js";
import Airport from "../src/airport.js";

let expected, actual, result;
let airport, testPlane;

function CleanUp() {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport = undefined;
    testPlane = undefined;
}

console.log("\nUser Story 1");
console.log("====================\n")

//? User Story 1 - Test 1
//* Plane is added to airport -> airport contains plane

//Arrange
airport = new Airport();
testPlane = { id: 1 };

//Act
expected = { id: 1 };
airport.assignPlane(testPlane);
actual = airport.planes[airport.planes.length - 1];

//Assert
result = assertEqual(expected.id, actual.id);

//Report
console.log(`Plane is added to airport -> airport contains plane: ${result ? "Passed" : "Failed"}`);

console.log("\n====================");