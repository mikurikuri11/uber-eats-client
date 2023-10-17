import { orders } from "@/url";
import { Order } from "@/features/orders/types";

export const createOrder = async (order: Order) => {
  const response = await fetch(orders, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }

  const data = await response.json();
  return data.foods;
}