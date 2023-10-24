export default function AiWarning({ lang }) {
  if (lang === 'es')
    return (
      <div className="text-muted-foreground italic">
        Este es solo un prototipo. El contenido fue generado en parte por
        ChatGPT y no pretende ser factual.{' '}
      </div>
    );

  return (
    <div className="text-muted-foreground italic">
      This is just a prototype. Content was generated in part by GPT-3 and is
      not meant to be factual.
    </div>
  );
}
