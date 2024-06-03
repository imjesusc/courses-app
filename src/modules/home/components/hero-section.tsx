import { Typography } from '@/components/global'

export const HeroSection = () => {
  return (
    <section className="grid place-content-center items-center gap-10 p-5 tablet:py-20">
      <header>
        <Typography as="h1" size={'7xl'} className="text-balance text-center font-bold leading-none">
          My Courses App
        </Typography>
      </header>

      <footer>
        <Typography size={'base'} className="balance max-w-[50ch] text-center">
          <span className="underline">My Courses App</span> es una plataforma web que recopila cursos gratuitos de
          YouTube, organizados por categorías. Permite a los usuarios buscar y filtrar cursos, facilitando el acceso a
          contenido educativo.
        </Typography>
      </footer>
    </section>
  )
}
