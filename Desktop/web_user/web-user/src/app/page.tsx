'use client';
import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import SavedProfiles from './components/SavedProfiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

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

const Home: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [savedProfiles, setSavedProfiles] = useState<Profile[]>([]);

  const fetchProfile = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    return data.results[0];
  };

  useEffect(() => {
    const loadInitialProfile = async () => {
      const initialProfile = await fetchProfile();
      setProfile(initialProfile);
      setSavedProfiles([initialProfile]);
    };
    loadInitialProfile();
  }, []);

  const handleRefresh = async () => {
    const newProfile = await fetchProfile();
    setProfile(newProfile);
    setSavedProfiles([...savedProfiles, newProfile]);
  };

  const handleSelectProfile = (selectedProfile: Profile) => {
    setProfile(selectedProfile);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4">
        <SavedProfiles profiles={savedProfiles} onSelect={handleSelectProfile} />
      </div>
      <div className="w-3/4 p-4 flex justify-center items-center relative">
        {profile && <ProfileCard profile={profile} />}
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded"
          onClick={handleRefresh}
        >
          <FontAwesomeIcon icon={faSync} />
        </button>
      </div>
    </div>
  );
};

export default Home;