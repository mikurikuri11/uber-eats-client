export type Restaurant = {
  id: string;
  name: string;
  fee: string;
  time_required: string;
  created_at: string;
  updated_at: string;
};

export interface RestaurantCardProps {
  restaurant: Restaurant
}

export interface RestaurantListProps {
  restaurants: Restaurant[];
}