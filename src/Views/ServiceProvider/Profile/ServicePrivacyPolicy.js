import React from 'react'
import ProfileLayout from './ProfileLayout';
import styles from '../../../Assets/Styles/Profile.module.scss';
import { GetPolicy } from '../../Policy/PrivacyPolicy';
const ServicePrivacyPolicy = () => {
  return (
    <>
        <ProfileLayout>
            <div className={styles.privacypolicy}>
                    <GetPolicy/>
            </div>
        </ProfileLayout>
    </>
  )
}

export default ServicePrivacyPolicy;