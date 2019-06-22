using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UserDemo.DataAccess.Interfaces;
using UserDemo.DataMapping.Entities;

namespace UserDemo.DataAccess.Repositories
{
    public class UsersRepository:IUsersRepository
    {
        private readonly AppDbContext context;

        public UsersRepository(AppDbContext dbContext)
        {
            this.context = dbContext;
        }

        public IEnumerable<User> GetUsers()
        {
            return context.Users;
        }

        public User GetUser(int id)
        {
            return context.Users.FirstOrDefault(u => u.ID == id);
        }

        public void AddUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            context.Users.Update(user);
            context.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            var user = context.Users.FirstOrDefault(u => u.ID == id);
            if (user != null)
            {
                user.IsActive = false;
            }
        }
    }
}
