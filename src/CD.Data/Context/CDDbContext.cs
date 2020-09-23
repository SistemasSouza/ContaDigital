using CD.Bussiness.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace CD.Data.Context
{
    public class CDDbContext : DbContext
    {
        public CDDbContext(DbContextOptions<CDDbContext> options) : base(options) { }

        public DbSet<CreditCard> CreditCards { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CDDbContext).Assembly);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys())) relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;

            base.OnModelCreating(modelBuilder);
        }
    }
}
