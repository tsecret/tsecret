
import { Github, Linkedin, LucideIcon } from 'lucide-preact'

const Icon = ({ text, Icon, url }: { text: string, Icon: LucideIcon, url: string }) => {
  return <button
      className='btn btn-ghost row space-x-2'
      onClick={() => { (window as any).open(url, '_blank').focus() }}
    >
    <Icon />
    <p className='text-xl'>{text}</p>
  </button>
}

export const Contacts = () => {
  return <section className='col p-32'>
    <div className="row space-x-8">
      <Icon text="GitHub" Icon={Github} url="https://github.com/tsecret" />
      <Icon text="LinkedIn" Icon={Linkedin} url="https://www.linkedin.com/in/tsecret/" />
    </div>
  </section>
}
