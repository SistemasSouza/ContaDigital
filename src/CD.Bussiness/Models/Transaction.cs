using System;

namespace CD.Bussiness.Models
{
    public class Transaction : Entity
    {
        public decimal Amount { get; set; }
        public int Dotz { get; set; }
        public DateTime Created { get; set; }
        public string Description { get; set; }
    }
}
