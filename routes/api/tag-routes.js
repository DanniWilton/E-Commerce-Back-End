const router = require('express').Router();
const { response, request } = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (request, response) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    response.status(200).json(tagData);
  } catch (err) {
    response.status(500).json(err);
  }
});

router.get('/:id', async (request, response) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(request.params.id, {
      include: [{ model: Product }],
    });
    if(!tagData) {
      response.status(404).json({ message: 'No tag found with that Id' });
      return;
    }
    response.status(200).json(tagData);
  } catch (err) {
    response.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    await Tag.create(request.body);
    response.status(200).json({ message: `New tag created`});
  } catch (err) {
    response.status(400).json(err);
  }
});

router.put('/:id', async (request, response) => {
  // update a tag's name by its `id` value
  const tag_id = await Tag.update(
    
  )
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
