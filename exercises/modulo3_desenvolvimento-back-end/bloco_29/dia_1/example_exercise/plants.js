const DEFAUT_PLANTS = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: true,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const calculateWaterFrequency = (needsSun, size, origin) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
  : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)

  return waterFrequency
}

const initPlant = (id, { breed, needsSun, origin, size, specialCare }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
  return DEFAUT_PLANTS
};

const getPlantById = (id) => {
  return DEFAUT_PLANTS.filter((plant) => plant.id === Number(id));

};

const removePlantById = (id) => {
  return DEFAUT_PLANTS.filter((plant) => plant.id !== Number(id));

};

const getPlantsThatNeedsSunWithId = (id) => {
  return DEFAUT_PLANTS.filter((plant) => {
      if (plant.needsSun && plant.id === Number(id)) {
        return plant; 
      }
    });
  };

const editPlant = (plantId, newPlant) => {
  return DEFAUT_PLANTS.map((plant) => {
    if (plant.id === Number(plantId)) {
      return {
        id: plant.id,
        breed: newPlant.breed,
        size: newPlant.size,
        needsSun: plant.needsSun,
        origin: newPlant.origin,
        specialCare: plant.specialCare,
      }
    };
    return plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  DEFAUT_PLANTS.push(mappedPlant);

  return mappedPlant;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  getPlantsThatNeedsSunWithId,
  createNewPlant,
}