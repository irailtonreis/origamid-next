import { getAula } from '@/api/cursos';
import Link from 'next/link';

export default async function AulaPage({
  params,
}: {
  params: { curso: string; aula: string };
}) {
const { curso, aula } = await params

  const aulaResult = await getAula(curso, aula);
  return (
    <main>
      <Link href={`/cursos/${curso}`}>{curso}</Link>
      <h1>{aulaResult.nome}</h1>
      <p>{aulaResult.descricao}</p>
      <p>Tempo: {aulaResult.tempo}</p>
    </main>
  );
}
