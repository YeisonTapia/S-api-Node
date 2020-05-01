const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ StudentRoutes, TeacherRoutes, CourseRoutes, RegistrationRoutes, SectionRoutes, SubjectRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  apiRoute.use("/student", StudentRoutes);
  apiRoute.use("/teacher", TeacherRoutes);
  apiRoute.use("/course", CourseRoutes);
  apiRoute.use("/registration", RegistrationRoutes);
  apiRoute.use("/section", SectionRoutes);
  apiRoute.use("/subject", SubjectRoutes);
  router.use("/api", apiRoute);

  return router;
};