const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");

const StudentRoutes = require("../api/routes/student.routes");
const TeacherRoutes = require("../api/routes/teacher.routes");
const CourseRoutes = require("../api/routes/course.routes");
const RegistrationRoutes = require("../api/routes/registration.routes");
const SectionRoutes = require("../api/routes/section.routes");
const SubjectRoutes = require("../api/routes/subject.routes");

// business
const { StudentBusiness, TeacherBusiness, CourseBusiness, SectionBusiness, RegistrationBusiness, SubjectBusiness } = require("../domain/");

// controllers
const { StudentController, TeacherController, CourseController, SectionController, RegistrationController, SubjectController } = require("../api/controllers");

// services
const { StudentService, TeacherService, CourseService, SubjectService, RegistrationService, SectionService } = require("../services");

// repositories
const { StudentRepository, TeacherRepository, CourseRepository, RegistrationRepository, SectionRepository, SubjectRepository } = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
    CourseRoutes: asFunction(CourseRoutes).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    RegistrationRoutes: asFunction(RegistrationRoutes).singleton(),
    SectionRoutes: asFunction(SectionRoutes).singleton(),
    SubjectRoutes: asFunction(SubjectRoutes).singleton(),
    CourseController: asClass(CourseController).singleton(),
    StudentController: asClass(StudentController).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    SectionController: asClass(SectionController).singleton(),
    RegistrationController: asClass(RegistrationController).singleton(),
    SubjectController: asClass(SubjectController).singleton(),
  })
  .register({
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    CourseService: asClass(CourseService).singleton(),
    SubjectService: asClass(SubjectService).singleton(),
    RegistrationService: asClass(RegistrationService).singleton(),
    SectionService: asClass(SectionService).singleton(),
  })
  .register({
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    CourseRepository: asClass(CourseRepository).singleton(),
    RegistrationRepository: asClass(RegistrationRepository).singleton(),
    SectionRepository: asClass(SectionRepository).singleton(),
    SubjectRepository: asClass(SubjectRepository).singleton(),
  })
  .register({
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton(),
    CourseBusiness: asClass(CourseBusiness).singleton(),
    SectionBusiness: asClass(SectionBusiness).singleton(),
    RegistrationBusiness: asClass(RegistrationBusiness).singleton(),
    SubjectBusiness: asClass(SubjectBusiness).singleton(),
  });

module.exports = container;