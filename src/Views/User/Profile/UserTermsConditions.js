import React from 'react';
import styles from '../../../Assets/Styles/Profile.module.scss';
import ProfileLayout from './ProfileLayout';
import { GetTermCondition } from '../../Policy/TermsCondition';
const UserTermsConditions = () => {
  return (
        <>
         <ProfileLayout>
            <div className={styles.privacypolicy}>
                  <GetTermCondition/>
            </div>
        </ProfileLayout>
        </>
  )
}

export default UserTermsConditions;