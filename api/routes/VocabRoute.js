const vocabController = require('../controllers/VocabController')
const vocabRoute = (app) => {
    //purpose: declare API endpoints(urls) + method (get, post, put, ...)
    
    //endpoint without id
    app.route('/vocab')
        .get(vocabController.viewAllVocabs)
        .post(vocabController.addNewVocab)
        
    //endpoint with id
    app.route('/vocab/:id')
        .get(vocabController.viewVocabById)
        .put(vocabController.editVocab)
        .delete(vocabController.deleteVocab)
}

module.exports = vocabRoute
