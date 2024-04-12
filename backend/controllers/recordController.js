const asyncHandler = require('express-async-handler')

const Records = require('../models/recordsModel')
// @desc  Get Users
// @route  GET /api/users
// @access Private


const getRecords = asyncHandler(async (req, res) => {
    const records = await Records.find()
    res.status(200).json(records)
})

// @desc  Set Users
// @route  POST /api/users
// @access Private


const setRecords = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const record = await Records.create({
        text: req.body.text
    })
    res.status(200).json(record)
})
// @desc  Update Users
// @route  PUT /api/users/:id
// @access Private


const updateRecords = asyncHandler(async (req, res) => {
    const record = await Records.findById(req.params.id)

    if(!record){
        res.status(400)
        throw new Error('Record not found')
    }

    const updatedRecord = await Records.findByIdAndUpdate(req.params.id, req.body, {new: true,
    })
    res.status(200).json(updatedRecord)
})


// @desc  Delete Users
// @route  DELETE /api/users/:id
// @access Private


const deleteRecords = asyncHandler(async (req, res) => {
    const record = await Records.findById(req.params.id)

    if(!record){
        res.status(400)
        throw new Error('Record not found')
    }

    await record.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports ={
    getRecords,
    setRecords, 
    updateRecords,
    deleteRecords,
}