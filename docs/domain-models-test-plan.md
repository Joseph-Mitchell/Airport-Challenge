# Domain Models and Test Plan

## User Stories

### User Story 1
As a controller,
I want to add a plane to an airport,
So that the plane can be instructed to land there.

### User Story 2
As a controller,
I want to be unable to add a plane to an airport at full capacity,
So that a plane is not told to land at a full airport.

### User Story 3
As a controller,
I want to be unable to add a plane to an airport which already contains the plane,
So that pointless instructions are not made.

### User Story 4
As a controller,
I want to remove a plane from an airport,
So that the plane can be instructed to take off from that airport.

### User Story 5
As a controller,
I want to be unable to remove a plane from an airport if it is not at that airport,
So that pointless instructions are not made.

### User Story 6
As a controller,
I want to change the capacity of an airport,
So that the capacity represents the actual capacity of the airport.

## Domain Models

### Domain Model 1
| Objects | Properties            | Messages            | Output |
| ------- | --------------------- | ------------------- | ------ |
| Plane   |                       |                     |        |
| Airport | planes @Array[@Plane] | assignPlane(@Plane) |        |

### Domain Model 2
| Objects | Properties                                | Messages            | Output |
| ------- | ----------------------------------------- | ------------------- | ------ |
| Plane   |                                           |                     |        |
| Airport | planes @Array[@Plane]<br>capacity @Number | assignPlane(@Plane) |        |

### Domain Model 3
| Objects | Properties            | Messages            | Output |
| ------- | --------------------- | ------------------- | ------ |
| Plane   | id @Number            |                     |        |
| Airport | planes @Array[@Plane] | assignPlane(@Plane) |        |

### Domain Model 4
| Objects | Properties            | Messages             | Output |
| ------- | --------------------- | -------------------- | ------ |
| Plane   | id @Number            |                      |        |
| Airport | planes @Array[@Plane] | removePlane(@Number) |        |

### Domain Model 5
| Objects | Properties            | Messages             | Output |
| ------- | --------------------- | -------------------- | ------ |
| Plane   | id @Number            |                      |        |
| Airport | planes @Array[@Plane] | removePlane(@Number) |        |

### Domain Model 6
| Objects | Properties       | Messages                  | Output |
| ------- | ---------------- | ------------------------- | ------ |
| Airport | capacity @Number | overrideCapacity(@Number) |        |