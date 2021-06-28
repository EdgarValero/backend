const { Router } = require('express');
const router = Router();

let structures = require('../structures.json');

router.get('/', (req, res) => {
  res.json(structures);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const structure = structures.find(s => s.id == id);
  res.json(structure);
});

router.post('/', (req, res) => {
  const structure = req.body;
  structure.id = structures.length + 1;
  structures.push(structure);
  res.json({ msg: 'Estructura Agregada', structures });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {
    name,
    type,
    walls,
    floors,
    windows,
    doors
  } = req.body;
  structures = structures.map(s => {
    if (s.id == id) {
      s.name = name;
      s.type = type;
      s.walls = walls;
      s.floors = floors;
      s.windows = windows;
      s.doors = doors;
    }
    return s;
  });
  res.json({ msg: 'Estructura Actualizada', structures });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  structures.forEach((s, index) => {
    if (s.id == id) {
      structures.splice(index, 1);
    }
  });
  res.json({ msg: 'Estructura Eliminada', structures });
});


module.exports = router;