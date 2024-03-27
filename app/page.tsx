import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <span>
        <UserButton /> User Details
      </span>
      <section>
        <p>
          Some random text of section 1 for some POC org
        </p>
      </section>
    </div>
  )
}