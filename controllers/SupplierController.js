const express = require('express');
const Supplier = require('../models/Supplier');


const getAllShops = async (req, res) => {
    try{
        const seller = await Supplier.find({});
        res.status(200).json(seller);
    
      }
      catch(error){
        console.log(error);
        res.status(500).json({error:'shop not found'})
      }
}

module.exports  = {
    getAllShops
}