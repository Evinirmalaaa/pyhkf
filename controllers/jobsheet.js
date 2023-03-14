const db = require("../models");
const Quiz = db.quizzes;


// memperose jawaban dari satu kuis
exports.submitOne = async (req, res) => {
    try {
        var quiz = await Quiz.findOne({
            where: {
                id: req.body.quizId
            }
        })
        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message": `benar`
            });
        } else {
            res.status(200).json({
                "message": `jawaban benar adalah ${quiz.key}`
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// memproses jawaban lebih dari satu quiz dengan json array

exports.submitMany = async (req, res) => {
    const jobsheet = {
        quizId: req.body.quizId, //[2, 4]
        answer: req.body.answer //[ c, d]
    }
    try {
        let benar = 0;
        let totalSoal = jobsheet.quizId.length //2
        for (let i = 0; i < totalSoal; i++) {
            const quiz = await Quiz.findOne({
                limit: 1,
                where: {
                    id: jobsheet.quizId[i] 
                },
                order: [
                    ['id', 'desc']
                ]
            });
            if (quiz.key == jobsheet.answer[i]) {
                benar = benar + 1
            }
            
        }
        res.status(200).json({
            message: `benar ${benar} dari ${totalSoal} soal`
        })
    } catch (error) {
        res.status(500).json({ message: e.message })
    }
}