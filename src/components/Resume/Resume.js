import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Resume.css'

const Resume = () => {
  if (!skills.length) return null

  return (
    <section className='section Resume' id='Resume'>
      <h2 className='section__title'>Resume</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <br />
      <div className='resume__container'>
        <a
          href='https://drive.google.com/file/d/1P8jZLmcUI93h7aGQ_jbFXEfI6fsIGkSw/view?usp=drive_link'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn--outline resume__button'
        >
          View Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
