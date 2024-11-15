// app/cursos/[curso]/page.tsx
import { getCurso } from '@/api/cursos';
import Link from 'next/link';

export default async function CursoPage({
  params,
}: {
  params: { curso: string };
}) {
  const { curso } = await params
  const cursoItem = await getCurso(curso);
  return (
    <main>
      <h1>{cursoItem.nome}</h1>
      <p>{cursoItem.descricao}</p>
      <p>Total Horas: {cursoItem.total_horas}</p>
      <p>Total Aulas: {cursoItem.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {cursoItem.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${cursoItem.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
