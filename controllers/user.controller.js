const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

const products = [
  {
    id: 1,
    name: "Minhaz",
    age: 22,
    position: "Web Developer",
    address: "sherpur, Bogura",
  },
  {
    id: 2,
    name: "Nayeem",
    age: 23,
    position: "Co-Ps",
    address: "Hapuniya, Bogura",
  },
  {
    id: 3,
    name: "Sheikh Shakil Rafi",
    age: 23,
    position: "Cs Manager",
    address: "Sariyakandi, Bogura",
  },
  {
    id: 4,
    name: "Jobayer",
    age: 24,
    position: "Computer operator",
    address: "Doripara, Bogura",
  },
  {
    id: 5,
    name: "Asadulla hil galib",
    age: 20,
    position: "MERN Developer",
    address: "Dinajpur, Bogura",
  },
];

module.exports.saveUser = async (req, res, next) => {
  try {
    const db = getDb();
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    if (result.acknowledged) {
      res.send("Successfully Save Data!");
    } else {
      res.status(400).send("Something Wrong!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const db = getDb();
    const result = await db.collection("users").find({}).toArray();
    if (result) {
      res.send(result);
    } else {
      res.status(400).send("Something Wrong!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUserWidthId = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json("invalid Id");
    }
    const objId = { _id: ObjectId(id) };
    const result = await db.collection("users").findOne(objId);
    if (!result) {
      return res.json("couldn't find user with this Id!");
    }
    if (result) {
      res.send(result);
    } else {
      res.status(400).send("Something Wrong!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json("invalid Id");
    }
    const objId = { _id: ObjectId(id) };
    const result = await db
      .collection("users")
      .updateOne(objId, { $set: req.body });
    if (!result) {
      return res.json("couldn't find user with this Id!");
    }
    if (result) {
      res.send(result);
    } else {
      res.status(400).send("Something Wrong!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json("invalid Id");
    }
    const objId = { _id: ObjectId(id) };
    const result = await db.collection("users").deleteOne(objId);
    if (!result) {
      return res.json("couldn't find user with this Id!");
    }
    if (result) {
      res.send(result);
    } else {
      res.status(400).send("Something Wrong!");
    }
  } catch (error) {
    next(error);
  }
};
