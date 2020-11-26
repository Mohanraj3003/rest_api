const { Router } = require('express')
const express = require('express')
const mongoose = require('../database/connect.js')
const { db } = require('../database/schema.js')

const route = express.Router()

const reg_scheme = require('../database/schema.js')

//get all
route.get('/', async (req, res) => {
    try {
        const result = await reg_scheme.find()
        res.json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//get by name
route.get('/:name', getregnam, (req, res) => {
    res.json(res.regName)
})

//creating new
route.post('/', async (req, res) => {
    const update = new reg_scheme({
        name: req.body.name,
        mail: req.body.mail,
        address: req.body.address
    })
    try {
        const result = await update.save()
        res.status(201).json(result)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//updating
route.patch('/:name', getregnam, async (req, res) => {
    if (req.body.address != null) {
        res.regName.address = req.body.address
    }
    if (req.body.mail != null) {
        res.regName.mail = req.body.mail
    }
    try {
        let update = await res.regName.save()
        res.json(update)
    } catch (e) {
        return res.status(500).json({ message: e })
    }
})

//delete
route.delete('/:name', getregnam, async (req, res) => {
    try {
        await res.regName.remove()
        res.json({ message: "Deleted Successfully" })
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

async function getregnam(req, res, next) {
    let regName;
    try {
        regName = await reg_scheme.findOne({ name: req.params.name })
        if (regName == null) {
            return res.status(404).json({ message: 'Cannot find name' })
        }
    } catch (e) {
        return res.status(500).json({ message: e })
    }
    res.regName = regName
    next()
}

module.exports = route
