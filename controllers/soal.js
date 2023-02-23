const { Op } = require("sequelize");
const db = require("../models");
const Soal = db.soal;

exports.create = async (req, res) => {
    try {
        let data = req.body
        if (req.file != null) {
            data.image = req.file.filename
        }else{
            data.image = 'null'
        }
        data = await Soal.create(data)
        res.json({
            message: "quiz create successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const soal = await Soal.findAll();
        res.json({
            message: "soal retrieved successfully",
            data: soal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        let data = await Soal.findByPk(id, { rejectOnEmpty: true })
        let body = req.body
        if (req.file != null) {
            body.image = req.file.filename
        }
        data.update(body, {
            where: { id }
        });
        res.json({
            message: "soal updated successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const soal = await Soal.findByPk(id, { rejectOnEmpty: true })
        soal.destroy()
        res.json({
            message: `Delete Success`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.getByCategory = async (req, res) => {
    const id  = req.params.id
    const quizzes = await Soal.findAll({
        where : {
            category: id
        }
    })
    res.json({
        message: `soal retrived successfully with categoryId=${category}`,
        data: quizzes
    })
}
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const soal = await Soal.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `soal retrived successfully with id=${id}`,
            data: soal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retriving soal",
            data: null
        })
    }
}