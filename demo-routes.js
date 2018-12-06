'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ status: 'OK', message: 'Your request was successfully received' })
})

router.post('/', (req, res) => {
    res.send({ status: 'OK', message: 'Your request was successfully received' })
})

router.put('/', (req, res) => {
    res.send({ status: 'OK', message: 'Your request was successfully received' })
})

router.delete('/', (req, res) => {
    res.send({ status: 'OK', message: 'Your request was successfully received' })
})

module.exports = router