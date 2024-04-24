export default class Airport {
    planes = [];
    capacity = 10;
    
    assignPlane(plane) {       

        if (this.planes.length >= this.capacity) return;
        if (plane?.id === undefined) return;
        
        //Cancel if plane with same id already in array
        if (this.planes.some((p) => p.id === plane.id)) return; 
        
        this.planes.push(plane);
    }
    
    removePlane(id) {
        this.planes = this.planes.filter((plane) => plane.id !== id);
    }
}