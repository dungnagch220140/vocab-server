const vocabModel = require('../models/VocabModel')

const viewAllVocabs = async (req, res) =>{
    try{
        const vocabs = await vocabModel.find({}).sort({ _id : -1 })
        res.status(200).json(vocabs)
    } catch (err){
        //console.log(err)
        res.send(err)
    }
}

const viewVocabById = async (req, res) =>{
    try{
        const vocabs = await vocabModel.findById(req.params.id);
        res.status(200).json(vocabs)
        } catch (err){
            //console.log(err)
            res.send(err)
        }
}


const addNewVocab = async (req, res) =>{
    try{
        await vocabModel.create(req.body)
        res.status(201).json({message : 'Add vocab succeed !'})
        } catch (err){
            //console.log(err)
            res.send(err)
        }
}

const editVocab = async (req, res) =>{
    try{
        await vocabModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({message : 'Edit vocab succeed !'});
        } catch (err){
            //console.log(err)
            res.send(err)
        }
}
const deleteVocab = async (req, res) =>{
    try{
        await vocabModel.findByIdAndDelete(req.params.id)
        res.json({message: "Delete succeed!"})
        } catch (err){
            //console.log(err)
            res.send(err)
        }
}

const deleteAll = async () => {
    try {
        await vocabModel.deleteMany()
        res.json({message: "Delete succeed!"})
    } catch (err) {
        res.send(err)
    }
}


module.exports ={
    viewAllVocabs,
    viewVocabById,
    addNewVocab,
    editVocab,
    deleteVocab,
    deleteAll,
}