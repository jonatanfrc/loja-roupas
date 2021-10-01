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
}

