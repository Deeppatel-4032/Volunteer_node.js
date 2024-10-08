let Storage = [];
let index =0;

const defaultCon = (req, res) => {
    res.render("index.ejs", { volunTeers: Storage });
}

const volunteerCon = (req, res) => {
    console.log("volunteerCon", req.body);

    const volunTeerObj = {
        id: Storage.length + 1,
        name: req.body.name,
        lastName: req.body.lastName,
        number: req.body.number,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        skills: req.body.skills,
        comments: req.body.comments
    }
    
    Storage = [...Storage, volunTeerObj];
    console.log("Storage", Storage);


    res.redirect("/");
}

const editVolCon = (req, res) => {
    const { id } = req.params;
    // console.log("editVolCon", req.body);

    const editsingleRecod = Storage.find((ediID) => ediID.id == id);
    res.render("editPageVol", { editsingleRecod });
    console.log("editVolCon", editsingleRecod);
}

const updateVolCon = (req, res) => {
    const { id } = req.params;
    // console.log("updateVolCon", req.body);

    const updateVolConData = Storage.find((upID) => {
        return upID.id = id;
    });

    updateVolConData.name = req.body.name;
    updateVolConData.lastName = req.body.lastName,
    updateVolConData.number = req.body.number,
    updateVolConData.email = req.body.email,
    updateVolConData.address = req.body.address,
    updateVolConData.city = req.body.city,
    updateVolConData.skills = req.body.skills,
    updateVolConData.comments = req.body.comments

    console.log("Updated Storage", Storage);
    res.redirect("/");
}

const deleteVolCon = (req, res) => {
    const { id } = req.params;
    const deleteRecod = Storage.filter((delId) => {
        return delId.id != id
    } );
    Storage = deleteRecod;
    // console.log("Updated Storage", Storage);

    res.redirect("/");
}


module.exports = { defaultCon, volunteerCon, editVolCon, updateVolCon, deleteVolCon,};
