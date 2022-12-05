import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>This is Home page</h2>
      <Link href="/about">
          <h3>go to about page</h3>
      </Link>
      <Link href="/profile">
          <h3>go to profile page</h3>
      </Link>
    </div>
  )
}
