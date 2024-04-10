import { Header, Hero, About, Projects, Contact, Achievement, Tools, Footer  } from '@/components'


export default function Home() {
  return (
    <main className="bg-[#0f103f]">
    <Header /> 
    <Hero />
    <Achievement />
    <Tools />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </main>
  );
}
