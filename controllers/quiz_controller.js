var models = require('../models/models.js');

//GET /quizes
exports.index=function(req,res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/indez.ejs',{ quizes: quizes});

	})
};






// GET /quizes/question

exports.show = function (req,res) {
	models.Quiz.find(req.params.quizId).then(function(quiz){
	res.render('quizes/show' , {pregunta: quiz});	
})
};

// GET /quizes/answer

exports.answer= function (req,res) {
	models.Quiz.find(req.params.quizId).then(function(quiz){
	if(req.query.respuesta === quiz.respuesta){
		res.render('quizes/answer' , {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer' , {respuesta: 'Incorrecto'});
	}
})
};