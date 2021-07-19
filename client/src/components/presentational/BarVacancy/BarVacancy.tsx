import { Link } from 'react-router-dom';

import './BarVacancy.scss';

import Social from '../../../types/Social';

interface Props {
    idGroup: string;
    groupName: string;
    socialLinks: Array<Social>;
}

const BarVacancy = ({ idGroup, groupName, socialLinks }: Props) => {
    return (
        <div className="BarVacancy">
            <div className="wrapper">
                <div className="links">
                    <Link to="/main">Главная</Link>
                    <span>{'>'}</span>
                    <Link to={`/group/${idGroup}`}>{groupName}</Link>
                </div>
                <div className="social">
                    {socialLinks
                        ? socialLinks.map((social) => (
                              <a
                                  className="itemSocial"
                                  key={social.name}
                                  href={social.link}
                                  target="_blank"
                              >
                                  <img
                                      className="social-image"
                                      src={social.image}
                                      alt={`social item ${social.name}`}
                                  />
                              </a>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default BarVacancy;
