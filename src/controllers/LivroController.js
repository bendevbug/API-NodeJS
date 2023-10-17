import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(501).json({message: "Não foi possível adicionar o livro"})
        }
    }

    static async criarLivro(req, res) {
        try {
            const criaLivro = await livro.create(req.body)
            res.status(201).json({ message: "criado com sucesso", livro: criaLivro })
        } catch (error) {
            res.status
        }
    }
}


export default LivroController;