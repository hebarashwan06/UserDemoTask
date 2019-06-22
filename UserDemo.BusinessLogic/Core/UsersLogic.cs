using System;
using System.Collections.Generic;
using System.Text;
using UserDemo.BusinessLogic.Interfaces;
using UserDemo.DataAccess.Interfaces;
using UserDemo.DataMapping.Entities;

namespace UserDemo.BusinessLogic.Core
{
    public class UsersLogic:IUsersLogic
    {
        private readonly IUsersRepository _usersRepository;

        public UsersLogic(IUsersRepository usersRepository)
        {
            this._usersRepository = usersRepository;
        }

        public IEnumerable<User> GetUsers()
        {
            return _usersRepository.GetUsers();
        }

        public User GetUser(int id)
        {
            return _usersRepository.GetUser(id);
        }

        public void AddUser(User user)
        {
            _usersRepository.AddUser(user);
        }

        public void UpdateUser(User user)
        {
            _usersRepository.UpdateUser(user);
        }

        public void DeleteUser(int id)
        {
            _usersRepository.DeleteUser(id);
        }

        
    }
}
