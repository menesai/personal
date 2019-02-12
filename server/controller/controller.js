
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
    const {length, location, type, goals, description, details, skills, availability, name} =req.body;

    db.createProject([length, location, type, goals, description, details, skills, availability, name])
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
    const {length, location, type, goals, description, details, skills, availability, name} =req.body;
    const {projects_id} = req.params;

    db.updateProject([ +projects_id, length, location, type, goals, description, details, skills, availability, name])
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({error: "Error with put"})
        console.log(err)
    })
}

module.exports = {
    getInfo,
    create,
    deleteInfo,
    updateInfo
}