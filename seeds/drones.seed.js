require("../db/index");
const Drone = require("../models/Drone.model");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  (async function () {
	try {
		await Drone.deleteMany();
		const createdDrone = await Drone.create(drones);
		console.log(`Just created ${createdDrone.length}`);
		process.exit();
	} catch (err) {
		console.error(err);
		process.exit();
	}
})();

  