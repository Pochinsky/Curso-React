export const getYearsDifference = (year) => new Date().getFullYear() - year;

export const calculateTrademark = (trademark) => {
  let increment;
  switch (trademark) {
    case "1":
      increment = 1.3;
      break;
    case "2":
      increment = 1.15;
      break;
    case "3":
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
};

export const calculatePlan = (plan) => (plan === "1" ? 1.2 : 1.5);

export const formatMoney = (amount) =>
  amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
