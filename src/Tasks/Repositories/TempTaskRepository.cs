using System.Collections.Generic;
using System.Linq;

namespace Tasks
{

    public class TempTaskRepository : ITaskRepository
    {
        private static List<Task> inMemoryTasks = new List<Task> {
    new Task() { Id = 1,
                  Description= "fix heisenbug",
                  Completed= false,
                  Priority= Priority.Normal
               }};

        public IQueryable<Task> GetAllTasks()
        {
            return inMemoryTasks.AsQueryable();
        }
        public void AddTask(Task task)
        {
            task.Id = inMemoryTasks.Max(t => t.Id) + 1;
            inMemoryTasks.Add(task);
        }

        public bool DeleteTask(int id)
        {
            if (inMemoryTasks.Any(t => t.Id == id))
            {
                inMemoryTasks = inMemoryTasks.Where(t => t.Id != id).ToList();
                return true;
            }
            else
            {
                return false;
            }
        }


        public bool UpdateTask(Task task)
        {
            Task originalTask = inMemoryTasks.SingleOrDefault(t => t.Id == task.Id);
            if (originalTask == null)
            {
                return false;
            }
            originalTask.Description = task.Description; // or use AutoMapper
            originalTask.Completed = task.Completed;
            originalTask.Priority = task.Priority;
            return true;
        }
    }
}
