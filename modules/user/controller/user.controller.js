import userModel from "../../../model/user.model.js"

const getAllUsers = async (req, res) => {
    const getAllUsers = await userModel.find({})
    res.json({ message: "done", getAllUsers })
};

const addUser = async (req, res) => {
    let { users } = req.body;
    const addUser = await userModel.insertMany(users);

    res.json({ message: "added", addUser })

}

const updateUser = async (req, res) => {
    let { userName } = req.body;
    const { id } = req.params;

    try {
        const updateUser = await userModel.findByIdAndUpdate({ _id: id },
            { userName }, { new: true })
        res.json({ message: "updated", updateUser })

    } catch (error) {
        res.json({ message: "id not found", error })

    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userModel.findByIdAndDelete({ _id: id })
        res.json({ message: "deleted", deleteUser })
    } catch (error) {
        res.json({ message: "id not found", error })

    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const getUser = await userModel.findOne({ _id: id })
        res.json({ message: "done", getUser })
    } catch (error) {
        res.json({ message: "id not found", error })

    }
};


const getUserName = async (req, res) => {
    const { userName } = req.query;
    const getUser = await userModel.findOne({ userName })
    res.json({ message: "done", getUser })

}
export {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUserName
}