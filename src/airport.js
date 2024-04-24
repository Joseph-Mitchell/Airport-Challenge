export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {       
        //Test for undefined or NaN
        if (plane?.id === undefined || plane?.id !== plane?.id) return;
     
        //Cancel if plane with same id already in array
        if (this.planes.some((p) => p.id === plane.id)) return; 
        if (this.planes.length >= this.capacity) return;
        
        this.planes.push(plane);
    }
    
    removePlane(id) {
        this.planes = this.planes.filter((plane) => plane.id !== id);
    }
    
    overrideCapacity(capacity) {
        //Test for undefined or NaN
        if (typeof capacity === 'number' && capacity === capacity) this.capacity = capacity;
    }
}