
const getInfo = (req,res) => {
    const db = req.app.get('db');

    db.getProjects()
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({erorr: "Erorr with Get"})
        console.log(err)
    })
}

const create = (req,res) => {
    const db = req.app.get('db');
    const {name, type, length, location, details, img, description, goals, availability, skills} =req.body;

    db.createProject([name, type, length, location, details, img, description, goals, availability, skills])
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({erorr: "Error with Post"})
        console.log(err)
    })
}

const deleteInfo = (req, res) => {
    const db = req.app.get('db');

    db.deleteProject(req.params.id)
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({error: "Erorr with Put"})
        console.log(err)
    })
}

const updateInfo = (req,res) => {
    const db = req.app.get('db');
    const {name, type, length, location, details, img, description, goals, availability, skills} =req.body;
    const {projects_id} = req.params;

    db.updateProject([ +projects_id, name, type, length, location, details, img, description, goals, availability, skills])
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({error: "Error with put"})
        console.log(err)
    })
}

const getProject = (req,res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.project(id)
    .then( info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({error: "Erorr in get"})
    })
}

module.exports = {
    getInfo,
    create,
    deleteInfo,
    updateInfo,
    getProject
}