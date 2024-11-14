type PageParams = {
    params: {
      slugs: string[];
    };
  };
  
  export default function CursosPage({ params }: PageParams) {
    return (
      <div>
        {params.slugs.map((slug, index) => {
          return <div key={index}>{slug}</div>;
        })}
      </div>
    );
  }
  