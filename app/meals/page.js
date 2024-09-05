import Link from "next/link";

export default function MealsPage() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Meals!
        </h1>
        <p>
            <Link href="/meals/my-great-meal">My Great Meal</Link>
        </p>
      </main>
    );
  }
  