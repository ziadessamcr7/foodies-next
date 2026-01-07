'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const submitForm = async (data) => {

    const isInvalidText = (text) => {
        return !text || text.trim() === ''
    }

    const meal = {
        title: data.get('title'),
        summary: data.get('summary'),
        instructions: data.get('instructions'),
        image: data.get('image'),
        creator: data.get('name'),
        creator_email: data.get('email'),
    }

    // console.log(meal);

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0

    ) {
        throw new Error('Invalid Input')
    }

    await saveMeal(meal)

    redirect("/meals")

}