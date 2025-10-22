module.exports = {

    clientes: ( req, res ) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    

};