using System;

namespace CD.Bussiness.Models
{
    public class CreditCard : Entity
    {
        public string CardNumber { get; set; }
        public DateTime ExpiringDate { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
    }
}
