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

## Test Cases

### User Story 1
- Plane assigned to airport -> Plane added to airport array
- Plane assigned to airport with existing planes -> Existing planes remain in array
- Non plane type assigned to airport -> Nothing added to airport array
- null, undefined and NaN assigned to airport -> Nothing added to airport array

### User Story 2
- Plane assigned to airport at capacity -> Plane not added to airport array
- Plane assigned to airport at capacity -> Airport array unchanged

### User Story 3
- Plane assigned to already assigned airport -> Plane not added to airport array
- Plane assigned to already assigned airport -> Airport array unchanged
  
### User Story 4
- Plane removed from airport -> Plane removed from airport array
- Plane removed from airport -> Other airport array elements unchanged
- Non-number type passed -> Airport array unchanged
- Null, undefined or NaN passed -> Airport array unchanged

### User Story 5
- Id of non-assigned plane passed -> Airport array unchanged

### User Story 6
- Airport capacity amended -> Airport capacity is changed
- Non-number type passed -> Airport capacity unchanged
- Null, undefined or NaN passed -> Airport capacity unchanged