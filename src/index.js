import Airport from "./airport.js";

let airport = new Airport();
let plane;

//User Story 1 ===========================================================================
console.log("Adding a plane to an airport");
console.log("==============================");

airport.planes = [];
plane = { id: 0 };

console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to add: " + JSON.stringify(plane));

airport.assignPlane(plane);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 2 ===========================================================================
console.log("\nCannot add to an airport at full capacity");
console.log("==============================");

airport.planes = [];
for (let i = 0; i < 10; i++) airport.assignPlane({ id: i });
plane = { id: 10 };

console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to add: " + JSON.stringify(plane));

airport.assignPlane(plane);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 3 ===========================================================================
console.log("\nCannot add to an airport already containing the plane");
console.log("==============================");

airport.planes = [{ id: 0 }];
plane = { id: 0 };

console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to add: " + JSON.stringify(plane));

airport.assignPlane(plane);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 4 ===========================================================================
console.log("\nRemoving a plane from an airport");
console.log("==============================");

airport.planes = [{ id: 0 }];
plane = { id: 0 };

console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to remove: " + JSON.stringify(plane));

airport.removePlane(plane.id);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 5 ===========================================================================
console.log("\nCannot remove a plane from an airport without specified plane");
console.log("==============================");

airport.planes = [{ id: 0 }];
plane = { id: 1 };

console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to remove: " + JSON.stringify(plane));

airport.removePlane(plane.id);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 6 ===========================================================================
console.log("\nOverwriting airport capacity");
console.log("==============================");

airport = new Airport();

console.log("Capacity before: " + airport.capacity);

airport.overrideCapacity(15);

console.log("Capacity after: " + airport.capacity);

//User Story 7 ===========================================================================
console.log("\nCannot add plane while weather is stormy");
console.log("==============================");

airport = new Airport();
airport.weather = "stormy";
plane = { id: 0 };

console.log("Weather: " + airport.weather);
console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to add: " + JSON.stringify(plane));

airport.assignPlane(plane);

console.log("After attempting: " + JSON.stringify(airport.planes));

//User Story 8 ===========================================================================
console.log("\nCannot remove plane while weather is stormy");
console.log("==============================");

airport = new Airport();
airport.weather = "stormy";
airport.planes = [{ id: 0 }];
plane = { id: 0 };

console.log("Weather: " + airport.weather);
console.log("Before attempting: " + JSON.stringify(airport.planes));
console.log("Plane to remove: " + JSON.stringify(plane));

airport.removePlane(plane.id);

console.log("After attempting: " + JSON.stringify(airport.planes));
