import classes from './SideNav.module.css'
import iseLogo from '../../Assets/Images/iseLogo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { activeToggler } from '../../HelperFunctions/activeTogglers'
import { AuthUserContext } from '../../Context/AuthUserContext'

// Utils
export const sideNavIconsHandler = (title: string) => {
  if (title === 'Dashboard') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 9H21M9 9L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9H21M9 9L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9H21M9 9L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  } else if (title === 'Courses') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
          fill="#2E2E2E"
        ></path>
      </svg>
    )
  } else if (title === 'Profile') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  } else if (title === 'Support') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.08997 8.99999C9.32507 8.33166 9.78912 7.7681 10.3999 7.40912C11.0107 7.05015 11.7289 6.91893 12.4271 7.0387C13.1254 7.15848 13.7588 7.52151 14.215 8.06352C14.6713 8.60552 14.921 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13M12 17H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.08997 8.99999C9.32507 8.33166 9.78912 7.7681 10.3999 7.40912C11.0107 7.05015 11.7289 6.91893 12.4271 7.0387C13.1254 7.15848 13.7588 7.52151 14.215 8.06352C14.6713 8.60552 14.921 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13M12 17H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.08997 8.99999C9.32507 8.33166 9.78912 7.7681 10.3999 7.40912C11.0107 7.05015 11.7289 6.91893 12.4271 7.0387C13.1254 7.15848 13.7588 7.52151 14.215 8.06352C14.6713 8.60552 14.921 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13M12 17H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  } else if (title === 'Student') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
          fill="#2E2E2E"
        ></path>
      </svg>
    )
  } else if (title === 'Schedule') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
          fill="#2E2E2E"
        ></path>
      </svg>
    )
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
          fill="#2E2E2E"
        />
      </svg>
    )
  }
}

const SideNav = () => {
  // Location
  const location = useLocation()
  const navigate = useNavigate()

  // COntext
  const { navItmesState, setNavItemsState } = useContext(AppContext)
  const { logout } = useContext(AuthUserContext)

  return (
    <section className={classes.container}>
      <div className={classes.logoSection}>
        <img
          src={iseLogo}
          onClick={() => {
            navigate('/dashboard')
          }}
          alt="Ise "
        />
      </div>
      <div className={classes.navSection}>
        {navItmesState.map((data, i) => {
          if (data.children) {
            return (
              <div key={i}>
                <div
                  key={i}
                  className={
                    data.keywords?.includes(location.pathname.slice(1)) ||
                    data.route === location.pathname ||
                    data.route?.includes(location.pathname.split('/')[1])
                      ? classes.moreMenuContentActive
                      : classes.moreMenuContentInActive
                  }
                >
                  <Link to={data.route} className={classes.link}>
                    {sideNavIconsHandler(data.title)}
                  </Link>

                  <Link to={data.route} className={classes.link}>
                    <span>{data.title}</span>
                  </Link>

                  <svg
                    onClick={() => {
                      activeToggler(i, navItmesState, setNavItemsState)
                    }}
                    style={
                      data.isActive
                        ? {
                            transform: 'rotate(-90deg)',
                            transition: 'all .3s ease-in-out',
                          }
                        : {
                            transform: 'rotate(0deg)',
                            transition: 'all .3s ease-in-out',
                          }
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="#2E2E2E"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={classes.otherOptions}
                  style={
                    data.isActive
                      ? { maxHeight: '1000px' }
                      : { maxHeight: '0px' }
                  }
                >
                  {data.children.map((datum: any, j: number) => {
                    return (
                      <Link
                        to={datum.route}
                        key={j}
                        className={
                          location.pathname === datum.route
                            ? `${classes.otherOptionsLinkActive}`
                            : classes.link
                        }
                      >
                        {datum.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          }
          return (
            <Link
              to={data.route as string}
              key={i}
              className={
                data.keywords?.includes(location.pathname.slice(1)) ||
                data.route === location.pathname ||
                data.route?.includes(location.pathname.split('/')[1])
                  ? classes.active
                  : classes.inActive
              }
            >
              {sideNavIconsHandler(data.title)}
              <span>{data.title}</span>
            </Link>
          )
        })}
        <div className={classes.logout} onClick={logout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L7 12M7 12L11 8M7 12L21 12M16 16V17C16 18.6569 14.6569 20 13 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H13C14.6569 4 16 5.34315 16 7V8"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </section>
  )
}

export default SideNav
