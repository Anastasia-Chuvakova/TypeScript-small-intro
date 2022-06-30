let vehicles: {brand: string, engine:number} = {
    brand: "Toyota",
    engine: 4.6,
}

//Will work because of the type annotation
vehicles.brand = "Honda";
vehicles.engine = 4.2;