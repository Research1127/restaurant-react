export interface Restaurant {
  id: number;
  name: string;
  description: string;
  category: string;
  hasDelivery: boolean;
  city: string;
  street: string;
  postalCode: string;
  dishes: any[]; // later you can create Dish interface
}