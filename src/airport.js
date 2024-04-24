export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {       

        if (this.planes.length >= this.capacity) return;
        
        //Test for undefined or NaN
        if (plane?.id === undefined || plane?.id !== plane?.id) return;
        
        //Cancel if plane with same id already in array
        if (this.planes.some((p) => p.id === plane.id)) return; 
        
        this.planes.push(plane);
    }
    
    removePlane(id) {
        this.planes = this.planes.filter((plane) => plane.id !== id);
    }
    
    overrideCapacity(capacity) {
        if (typeof capacity === 'number') this.capacity = capacity;
    }
}