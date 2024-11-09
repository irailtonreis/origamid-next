import Acesso from "@/components/acesso"
import ServerFetch from "@/components/server-fetch";

export default function Home() {
  return (
    <main>
      <Acesso />
      <h1>Home</h1>
      <ServerFetch />
    </main>
  );
}
