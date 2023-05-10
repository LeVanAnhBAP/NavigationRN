import { Meal } from "../models/meal";

export type RootStackParamList = {
    Categories: undefined;
    MealsOverViewScreen: { mealId: string };
    MealDetailScreen: { meal: Meal };
    // các màn hình khác
  };