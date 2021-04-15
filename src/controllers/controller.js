const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://zxuzvcbfvztbuk:7924bd7690b7b0fb496d65258cd24ed97298e3f1e07cc9a4c7feae1f12c3a374@ec2-18-206-20-102.compute-1.amazonaws.com:5432/dcq76bm8hqg7dh';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido al himalaya'
    })
}

const getGames = async (req, res) => {
    const response = await pool.query('Select * from games;');
    res.status(200).json(response.rows);
};

module.exports = {
    welcome,
    getGames
};
