export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {
        
        if (this.planes.length >= this.capacity) return;
        if (plane?.id === undefined) return;
        if (this.planes.some((p) => p.id === plane.id)) return;
        
        this.planes.push(plane);
    }
}