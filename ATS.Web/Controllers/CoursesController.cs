using ATS.Domain.Interfaces;
using ATS.Domain.Models;
using Microsoft.AspNetCore.Mvc;


namespace ATS.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IRepository<Courses> _objCourseRepository;
        private readonly IRepository<CourseStudents> _objCourseStudentsRepository;
        private readonly IRepository<Evaluations> _objEvaluationsRepository;

        private IConfiguration _config;

        public CoursesController(IRepository<Courses> oRepository,
                                 IRepository<CourseStudents> oCourseStudentsRepository,
                                 IRepository<Evaluations> oEvaluationsRepository,
                                 IConfiguration oConfig)
        {
            _objCourseRepository = oRepository;
            _objCourseStudentsRepository = oCourseStudentsRepository;
            _objEvaluationsRepository = oEvaluationsRepository;
            _config = oConfig;
        }

        [HttpGet("get")]
        public ActionResult GetAllTheCourses()
        {
            try
            {
                var listAll = _objCourseRepository.GetAll().Where(p => p.active == true).ToList();

                return Ok(listAll);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getById")]
        public ActionResult<List<Evaluations>> GetByID(Guid id, int? stars)
        {
            List<Evaluations> evaluations = new List<Evaluations>();
            try
            {
                var course = _objCourseRepository.GetById(id);

                var courseStudent = _objCourseStudentsRepository.GetAll().Where(p => p.course_id == id);

                foreach (var item in courseStudent)
                {
                     evaluations = _objEvaluationsRepository.GetAll()
                                                                       .Where(p => p.course_student_id == item.Id && 
                                                                                                              (stars == null || p.stars == stars)
                                                                             )
                                                                       .OrderBy(p => p.creation_date).ToList();
                }

                return evaluations;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}