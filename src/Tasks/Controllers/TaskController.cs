using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Tasks.Controllers
{
    [Route("tasks")]
    public class TaskController : Controller
    {
        private ITaskRepository repository;

        public TaskController(ITaskRepository repository)
        {
            this.repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet()]
        public IQueryable<Task> GetAllTasks()
        {
            return repository.GetAllTasks();
        }

        [HttpPost()]
        public IActionResult AddTask([FromBody] Task task)
        {
            repository.AddTask(task);
            return Ok(GetAllTasks());
        }

        [HttpPut()]
        public IActionResult UpdateTask([FromBody] Task task)
        {
            var updateOk = repository.UpdateTask(task);
            if (updateOk)
            {
                return Ok(GetAllTasks());
            }
            else
            {
                return NotFound();
            }
        }
        
        [HttpDelete("{id:int}")]
        public IActionResult DeleteTask([FromRoute] int id)
        {
            var deleteOk = repository.DeleteTask(id);
            if (deleteOk)
            {
                return Ok(GetAllTasks());
            }
            else
            {
                return NotFound();
            }
        }

    }
}
