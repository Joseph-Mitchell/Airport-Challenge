export default class Airport {
    planes = [];
    capacity = 10;
    weather = "calm";
    
    assignPlane(plane) {
        if (this.weather === "stormy") return; 
        if (this.planes.length >= this.capacity) return;
        
        //Test for undefined or NaN
        if (plane?.id === undefined || isNaN(plane.id)) return;
     
        //Test for same id in array
        if (this.planes.some((p) => p.id === plane.id)) return;
        
        this.planes.push(plane);
    }
    
    removePlane(id) {
        if (this.weather === "stormy") return; 
        
        this.planes = this.planes.filter((plane) => plane.id !== id);
    }
    
    overrideCapacity(capacity) {
        //Test for undefined or NaN
        if (typeof capacity !== 'number' || isNaN(capacity)) return;
            
        this.capacity = capacity;
    }
}