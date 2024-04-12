const express = require('express')
const router = express.Router()
const  { getRecords, setRecords, updateRecords, deleteRecords}  = require('../controllers/recordController')


router.route('/').get(getRecords).post(setRecords)
router.route('/:id').put(updateRecords).delete(deleteRecords)



module.exports = router