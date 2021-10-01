const conn = require("../config/database");

module.exports = {
    
    GETpurchases:(req,res)=>{
        const query = "SELECT * FROM lojaRoupas";
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results);
        })
    },

    GETpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `SELECT * FROM lojaRoupas WHERE id_item='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results[0]);
        })
    },

    POSTpurchases:(req,res)=>{
        const { descricao, valor } = req.body;
        const query = `INSERT INTO lojaRoupas SET descricao='${descricao}', valor='${valor}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"Item criado com sucesso!" });
        })
    },

    DELETEpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `DELETE FROM lojaRoupas WHERE item_id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"Item excluído com sucesso!" });
        })
    },
}

