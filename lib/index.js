export const NumberFormat = (money) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(money);
