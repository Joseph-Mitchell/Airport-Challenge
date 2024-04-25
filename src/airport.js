export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {       
        //Test for undefined or NaN
        if (plane?.id === undefined || isNaN(plane.id)) return;
        
        if (this.planes.length >= this.capacity) return;
     
        //Test for same id in array
        if (this.planes.some((p) => p.id === plane.id)) return;
        
        this.planes.push(plane);
    }
    
    removePlane(id) {
        this.planes = this.planes.filter((plane) => plane.id !== id);
    }
    
    overrideCapacity(capacity) {
        //Test for undefined or NaN
        if (typeof capacity !== 'number' || isNaN(capacity)) return;
            
        this.capacity = capacity;
    }
}