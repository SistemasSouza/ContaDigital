namespace CD.Bussiness.Models
{
    public class Account : Entity
    {
        public int AccountNumber { get; set; }
        public int AgencyNumber { get; set; }
        public decimal Amount { get; set; }
        public int Dotz { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
    }
}
