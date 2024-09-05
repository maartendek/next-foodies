import Link from "next/link";

export default function MealsPage({params}) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Your {params.slug} meal!
        </h1>
        <p>
            <Link href="/">Home</Link>
        </p>
      </main>
    );
  }
  