import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBirthdayCake, faPhone, faLock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface Profile {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  login: {
    password: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  picture: {
    large: string;
  };
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>('name');

  const getDisplayText = () => {
    switch (hoveredIcon) {
      case 'name':
        return `Hi, my name is:\n${profile.name.first} ${profile.name.last}`;
      case 'email':
        return `My email address is:\n${profile.email}`;
      case 'dob':
        return `My birthdate is:\n${new Date(profile.dob.date).toLocaleDateString()}`;
      case 'phone':
        return `My phone number is:\n${profile.phone}`;
      case 'password':
        return `My password is:\n${profile.login.password}`;
      case 'address':
        return `My address is:\n${profile.location.street.number} ${profile.location.street.name}`;
      default:
        return `Hi, my name is:\n${profile.name.first} ${profile.name.last}`;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 relative flex flex-col items-center w-96 h-96">
      <img src={profile.picture.large} alt="Profile" className="w-24 h-24 rounded-full mb-6" />
      <div className="text-center mb-6 whitespace-pre-line">
        <h2 className="text-xl font-bold">{getDisplayText()}</h2>
      </div>
      <div className="flex space-x-6 mt-6">
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('name')}
        >
          <FontAwesomeIcon icon={faUser} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('email')}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('dob')}
        >
          <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('phone')}
        >
          <FontAwesomeIcon icon={faPhone} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('password')}
        >
          <FontAwesomeIcon icon={faLock} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('address')}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 text-2xl transition-transform transform group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;