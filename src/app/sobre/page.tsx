import ClientFetch from "@/components/client-fetch";
import Width from "@/components/width";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Página Sobre',
    description: 'Essa é a descrição da página sobre',
  };
  
export default function SobrePage() {
    return (
      <main>
        <h1>Sobre</h1>
        A Empresa
      <Width/>
      <ClientFetch />
      </main>
    );
  }
  