export type LineFood = {
  id: string;
  line_food_ids: Array<string>;
  restaurant: {
    id: string;
    name: string;
    fee: number;
    time_required: number;
    created_at: string;
    updated_at: string;
  };
  count: number;
  each_count: Array<number>;
  amount: number;
  food_ids: Array<string>;
};

export interface RestaurantData {
  restaurantName: string;
  deliveryTime: number;
  itemCount: number;
  eachCount: Array<number>;
  totalAmount: number;
  deliveryFee: number;
  lineFoodIds: Array<string>;
  restaurantId: string;
  foodIds: Array<string>;
}
