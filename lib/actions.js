'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const submitForm = async (data) => {

    const meal = {
        title: data.get('title'),
        summary: data.get('summary'),
        instructions: data.get('instructions'),
        image: data.get('image'),
        creator: data.get('name'),
        creator_email: data.get('email'),
    }

    // console.log(meal);

    await saveMeal(meal)

    redirect("/meals")

}