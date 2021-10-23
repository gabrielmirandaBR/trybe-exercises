const bodyParser = require('body-parser')
const express = require('express')
const p = require('./plants')

const app = express()
app.use(bodyParser.json())

const PORT = 3000


app.get('/plants', (_req, res) => {
  try {
    const plants = p.getPlants();
    res.send(plants)
  } catch (error) {
    res.status(500).send(error)
  }
});

app.get('/plant/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const plant = p.getPlantById(id)
    res.send(plant)
    
  } catch (error) {
    res.status(500).send(error)
  }
});

app.get('/plant/need/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const plant = p.getPlantsThatNeedsSunWithId(id)
    res.send(plant)
    
  } catch (error) {
    res.status(500).send(error)
  }
});


app.delete('/plant/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const plant = p.removePlantById(id)
    res.send(plant)
    
  } catch (error) {
    res.status(500).send(error)
  }
});

app.put('/plant/:id', (req, res) => {
  try {
    const { id } = req.params;
    const {breed, size, origin} = req.body;
    
    const plant = p.editPlant(id, {breed, size, origin})
    res.send(plant)
    
  } catch (error) {
    res.status(500).send(error)
  }
});

app.post('/plant', (req, res) => {
  try {
    const newPlant = req.body;
    const plant = p.createNewPlant(newPlant)
    res.send(plant)
    
  } catch (error) {
    res.status(500).send(error)
  }
});




app.listen(PORT, () => console.log(`rodando na porta ${PORT}`))