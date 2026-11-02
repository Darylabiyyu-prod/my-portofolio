import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Projects } from '@/components/site/projects'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </>
  )
}
