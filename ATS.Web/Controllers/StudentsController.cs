using ATS.Domain.Interfaces;
using ATS.Domain.Models;
using Microsoft.AspNetCore.Mvc;


namespace ATS.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IRepository<Students> _objRepository;
        private IConfiguration _config;

        public StudentsController(IRepository<Students> oRepository, IConfiguration oConfig)
        {
            _objRepository = oRepository;
            _config = oConfig;
        }

        [HttpGet("get")]
        public IActionResult GetAllTheStudents()
        {
            try
            {
                var listAll = _objRepository.GetAll().Where(p => p.active == true).ToList();

                return Ok(listAll);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getById")]
        public ActionResult<Students> GetByID(Guid id)
        {
            try
            {
                var student = _objRepository.GetById(id);

                return student;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}