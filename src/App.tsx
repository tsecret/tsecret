import { Contacts } from "./components"

export const App = () => {
  return <main className='space-y-24'>
    {/* <Header /> */}

    {/* intro */}
    <section id="home" className='row space-x-4'>
      <p className='text-[12rem]'>👨🏻‍💻</p>

      <div className='col text-3xl text-center'>
        <p>I'm Timur</p>
        <p className='text-primary'>Software Engineer</p>
      </div>

    </section>


    <Contacts />
  </main>
}
