import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import StackOverflowIcon from '@material-ui/icons/Help' // Material-UI doesn't have a direct Stack Overflow icon
import { social } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer center'>
    <div className='footer__content'>
      {social && (
        <div className='footer__social-links'>
          {social.github && (
            <a
              href={social.github}
              aria-label='github'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              aria-label='linkedin'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.stack}
              aria-label='linkedin'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <StackOverflowIcon />
            </a>
          )}
        </div>
      )}
    </div>
  </footer>
)

export default Footer
