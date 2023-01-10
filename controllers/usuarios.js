import express from 'express';
const response = express.response;

const usuariosGet = (req,res = response) => {
    const {a,b=44} = req.query;


    res.json({
        a,b
    })
};

const usuariosPost = (req,res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        nombre,edad
    })
};

const usuariosPut = (req,res = response) => {

    const id = req.params.id;
    res.json({
        id
    })
};

const usuariosDelete = (req,res = response) => {
    res.json({
        msg : 'delete API - Controller'
    })
};

export default {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};