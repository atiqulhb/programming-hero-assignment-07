import { cacheLife } from "next/cache";
import type { Category } from "./types";

export async function getCategories(): Promise<Category[]> {
    "use cache"

    cacheLife("hours");

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        cache: 'default'
    })

     if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data = await res.json()

    return data
}