const AsyncHandler = require("express-async-handler");
const goalModal = require("../models/goalModal");

const getData = AsyncHandler(async (req, res) => {
  const goals = await goalModal.find();
  res.json({
    goals,
  });
});

const postData = AsyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("plz fill the input");
  }
  const data = await goalModal.create({
    goal: req.body.name,
  });
  res.status(200).json({
    data,
  });
  res.json({
    massage: "this is post request",
  });
});

const putData = AsyncHandler(async (req, res) => {
  const checkGoal = await goalModal.findById(req.params.id);
  if (!checkGoal) {
    res.status(404);
    throw new Error("plz update");
  }
  let updategoal = await goalModal.findByIdAndUpdate(req.params.id, res.body, {
    new: true,
  });
  res.status(200).json(updategoal);
  res.json({
    message: `id no: ${req.params.id} updated`,
  });
});
const deleteData =AsyncHandler(async(req, res) => {
  const findgoal = await goalModal.findById(req.params.id)
  if(!findgoal){
    res.status(404);
    throw new Error('goal not find')
  }
  await findgoal.deleteOne();
  res.json({
    _id: findgoal.id
  });
});
module.exports = {
  getData,
  postData,
  putData,
  deleteData,
};
