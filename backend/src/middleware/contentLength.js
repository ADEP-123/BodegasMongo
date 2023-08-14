
const middlewareContentLengthInventario = (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 116 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
}

const middlewareContentLengthBodegas = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 120 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
}

const middlewareContentLengthProductos = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 150 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
}

const middlewareContentLengthUpdtInventarios = (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 115 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
}




export {
    middlewareContentLengthInventario,
    middlewareContentLengthBodegas,
    middlewareContentLengthProductos,
    middlewareContentLengthUpdtInventarios
}