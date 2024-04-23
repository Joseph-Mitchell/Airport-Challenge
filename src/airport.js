export default class Airport {
    planes = [];
    
    assignPlane(plane) {
        if (plane?.id === undefined) return;
        
        this.planes.push(plane);
    }
}