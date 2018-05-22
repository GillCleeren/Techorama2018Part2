using System.Linq;

namespace Tasks
{

    public interface ITaskRepository
    {
        IQueryable<Task> GetAllTasks();
        void AddTask(Task task);
        bool UpdateTask(Task task);
        bool DeleteTask(int id);
    }


}
