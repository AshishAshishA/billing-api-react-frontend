const apiurls = [
  {
    id: 1,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/customer?api-key=[api_key]",
    description:
      "Provides list of customers with {id, name, email} of each customer",
  },
  {
    id: 2,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/customer?api-key=[api_key]&limit=[limit]",

    description:
      "Provides list of customer with the length of customer list equal to limit provided in query parameter",
  },
  {
    id: 3,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/bills?api-key=[api_key]",

    description:
      "Provides list of bills {customer detail, billitem, product name, price, quantity, total amount, date created and updated} of each bills",
  },
  {
    id: 4,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/bills?api-key=[api_key]&limit=[limit]",
    description:
      "Provides list of bills with the length of bills list equal to limit provided in query parameter",
  },
  {
    id: 5,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/customerWithBill?api-key=[api_key]",
    description:
      "Provides list of customers with all the bills of of each customer",
  },
  {
    id: 6,
    endpoint:
      "https://billing-system-api-1.onrender.com/apis/customerWithBill?api-key=[api_key]&limit=[limit]",
    description:
      "Provides list of customers with bills , length of list will be equal to list provided",
  },
];

export default apiurls;
