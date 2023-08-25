module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    hours: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
    dept: {
      type: Sequelize.STRING,
    },
    courseNo: {
      type: Sequelize.STRING,
    }
  });
  return Course;
};
