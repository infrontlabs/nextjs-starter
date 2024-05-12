import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Infront Labs Base NextJS Template</h1>
      <p>Protected page</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
