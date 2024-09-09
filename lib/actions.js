"use server";

import { redirect } from "next/navigation";
import { insertMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function storeMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    meal.creator_email.find('@') === -1 ||
    meal.image.size === 0
  ) {
    return {
      message: 'Error in saving'
    };
  }

  await insertMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}

function isInvalidText(text) {
  return !text || text.trim() === '';
}