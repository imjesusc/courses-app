export const HeroSection = () => {
  return (
    <section className="grid gap-6 py-10">
      <header>
        <h1 className=" my-5 text-center text-[clamp(4rem,5vw,8rem)] font-bold leading-none">Online courses</h1>
      </header>

      <div className="flex justify-center">
        <p className="balance max-w-[50ch] text-center text-base">
          Courses Online es una plataforma web que recopila cursos gratuitos de YouTube, organizados por categorías.
          Permite a los usuarios buscar y filtrar cursos, facilitando el acceso a contenido educativo de calidad.
        </p>
      </div>
    </section>
  )
}
