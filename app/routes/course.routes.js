module.exports = (app) => {
  const courses = require("../controllers/course.controller.js");
  //const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new Course
  router.post("/courses/", /*[authenticate],*/ courses.create);

  // Retrieve all Courses
  router.get(
    "/courses/",
    //[authenticate],
    courses.findAll
  );

  // Retrieve all published Courses
  //router.get(
  //  "/courses/published",
  //  //[authenticate],
  //  courses.findAllPublished
  //);

  // Retrieve a single Course with id
  router.get("/courses/:id", /*[authenticate],*/ courses.findOne);

  // Update a Course with id
  router.put("/courses/:id", /*[authenticate],*/ courses.update);

  // Delete a Course with id
  router.delete("/courses/:id", /*[authenticate],*/ courses.delete);

  // Delete all Course
  router.delete("/courses/:id", /*[authenticate],*/ courses.deleteAll);

  app.use("/course-t3", router);
};
