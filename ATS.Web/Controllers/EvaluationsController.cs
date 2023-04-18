using ATS.Domain.Interfaces;
using ATS.Domain.Models;
using Microsoft.AspNetCore.Mvc;


namespace ATS.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvaluationsController : ControllerBase
    {
        private readonly IRepository<Evaluations> _objRepository;
        private IConfiguration _config;

        public EvaluationsController(IRepository<Evaluations> oRepository, IConfiguration oConfig)
        {
            _objRepository = oRepository;
            _config = oConfig;
        }

        [HttpGet("get")]
        public IActionResult GetAllTheEvaluations()
        {
            try
            {
                var listAll = _objRepository.GetAll();

                return Ok(listAll);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getBySpecificCourse")]
        public IActionResult GetBySpecificCourse(int star)
        {
            try
            {
                var listAll = _objRepository.GetAll().Where(p => p.stars == star).GroupBy(p => p.CourseStudent?.Course.active == true).ToList();

                return Ok(listAll);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getById")]
        public ActionResult<Evaluations> GetByID(Guid id)
        {
            try
            {
                var evaluation = _objRepository.GetById(id);

                return evaluation;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getMaxStars")]
        public ActionResult<int?> GetMaxStars()
        {
            try
            {
                var maxStars = _objRepository.GetAll().Max(x => x.stars);

                return maxStars;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Save")]
        public ActionResult Save([FromBody] Evaluations entity)
        {
            if (entity == null)
                return NotFound();
            try
            {
                _objRepository.Save(entity);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("Update")]
        public ActionResult Update([FromBody] Evaluations entity)
        {
            if (entity == null)
                return NotFound();
            try
            {
                _objRepository.Update(entity);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id)
        {
            try
            {
                _objRepository.Delete(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}