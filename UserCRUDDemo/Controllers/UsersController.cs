using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDemo.BusinessLogic.Interfaces;
using UserDemo.DataMapping.Entities;
using UserDemo.DataMapping.ViewModels;

namespace UserCRUDDemo.Controllers
{
    [ApiController]
    public class UsersController:Controller
    {
        private readonly IUsersLogic _usersLogic;
        private readonly IMapper mapper;


        public UsersController(IUsersLogic usersLogic,IMapper mapper)
        {
            this._usersLogic = usersLogic;
            this.mapper = mapper;
        }

        [HttpGet]
        [Route("Api/Users/GetUsers")]
        public IEnumerable<User> GetUsers()
        {
            var users = _usersLogic.GetUsers();
            return users;
        }

        [HttpGet]
        [Route("Api/Users/GetUser/{id}")]
        public User GetUser(int id)
        {
            var user = _usersLogic.GetUser(id);
            return user;
        }

        [HttpPost]
        [Route("Api/Users/CreateUser")]
        public void CreateUser([FromBody] UserVM userVM)
        {
            if (ModelState.IsValid)
            {   
                var user = mapper.Map<UserVM, User>(userVM);
                _usersLogic.AddUser(user);
            }
        }

        [HttpPut]
        [Route("Api/Users/UpdateUser")]
        public void UpdateUser(User user)
        {
            var updatedUser = _usersLogic.GetUser(user.ID);
            if (updatedUser != null)
            {
                _usersLogic.UpdateUser(user);
            }
        }

        [HttpDelete]
        [Route("Api/Users/DeleteUser/{id}")]
        public void DeleteUser(int id)
        {
            var user = _usersLogic.GetUser(id);
            if (user!=null)
            {
                _usersLogic.DeleteUser(id);
            }
        }
    }
}
