import { useLocation } from 'react-router-dom'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo, name, role, description} = about
  const location = useLocation()
  const showDescription = location.pathname === '/about'

  return (
    <div className='about center'>
      {photo && (
        <img height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      {role && <h2 className='about__role'>A {role}.</h2>}
      {showDescription && description && (
        <p className='about__desc'>{description}</p>
      )}
    </div>
  )
}

export default About
