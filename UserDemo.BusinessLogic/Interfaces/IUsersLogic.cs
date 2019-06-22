using System;
using System.Collections.Generic;
using System.Text;
using UserDemo.DataMapping.Entities;

namespace UserDemo.BusinessLogic.Interfaces
{
    public interface IUsersLogic
    {
        IEnumerable<User> GetUsers();
        User GetUser(int id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int id);
    }
}
