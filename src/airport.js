export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {
        if (plane?.id === undefined || this.planes.length > this.capacity)
            return;
        
        this.planes.push(plane);
    }
}