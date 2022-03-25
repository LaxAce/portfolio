import './index.css';
import {FiFolder, FiExternalLink, FiGithub} from 'react-icons/fi'

const OtherProject = ({project}) => {
    const {repo, url, details, title, tools} = project;

    return ( 
        <div className="other-card">
            <div className="card-head">
                <div className="icon-card">
                    <FiFolder className='folder-icon' size={42} />
                    <div className='icon-small-container'>
                        {repo && <a href={repo}><FiGithub size={21}  className='small-icon git'/></a>}
                        {url && <a href={url}><FiExternalLink size={21} className='small-icon link'/></a>}
                    </div>
                </div>
                <h2><a href={url}>{title}</a></h2>
                <p>{details}</p>
            </div>
            <h6>{tools}</h6>
        </div>
    );
}
 
export default OtherProject;