
const applyCreate = (req,res) => {
    const db = req.app.get('db');
    const {bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three} =req.body;

    db.applyInfo([bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three])
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({erorr: "Error with Post apply"})
        console.log(err)
    })
}

module.exports ={
    applyCreate
}