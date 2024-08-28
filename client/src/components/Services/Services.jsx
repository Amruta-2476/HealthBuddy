import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <h1 className='our_services'>Our Services</h1>
        <hr className='our_services_underline'/>
      <div className='services'>
      <div className="service forum-community">
        <h3>Forum Community</h3>
        <p>Interactive groups for Maternity, Senior Citizens, Working Professionals, and more ....</p>
                    <div className="bottom-row">
                    <Link to="/community">
                            <button>Learn More</button>
                    </Link>
        </div>
      </div>
      <div className="service store-records">
        <h3>Store Records</h3>
        <p>Store, access, and manage your medical records securely.</p>
        <div className="bottom-row">
        <Link to="/store-records">
            <button>Learn More</button>
        </Link>
        </div>
      </div>
      <div className="service set-reminders">
        <h3>Set Reminders</h3>
        <p>Set medicine reminders, and schedule check-up reminders.</p>
        <div className="bottom-row">
        <Link to="/set-reminders">
            <button>Learn More</button>
        </Link>
        </div>
      </div>
      <div className="service doctor-contacts">
        <h3>My Doctor Contacts</h3>
        <p>Save contact & address of your frequently visited doctors for easier appointment scheduling.</p>
        <div className="bottom-row">
        <Link to="/doc-contacts">
            <button>Learn More</button>
        </Link>
        </div>
      </div>
    </div>
      </>
    
  );
};

export default Services;
