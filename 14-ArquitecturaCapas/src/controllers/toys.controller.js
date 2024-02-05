import { findAll, findById, createOne } from '../services/toys.service.js';

export const findToys = (req, res) => {
    const toys = findAll()

    if(!toys){
        res.status(404).json({message: 'None toys found. '});
    }
    res.status(200).json({message: 'Toys found', toys})
}

export const findToyById = (req, res) => {
    const { tid } = req.params;

    const toy = findById(+tid);
    if(!toy){
        return res.status(404).json({message: 'No toy found with the id provided.'});
    };

    res.status(200).json({message: 'Toy Found', toy});
};

export const createToy = (req, res) => {
    const { name, price, stock } = req.body;

    if(!name || !price || !stock){
        return res.status(400).json({message: 'All fields are required'});
    };

    const createdToy = createOne(req.body);
    res.status(200).json({message: 'Toy created.', createdToy});
};

