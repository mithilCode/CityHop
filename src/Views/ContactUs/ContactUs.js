import React from 'react'
import Layout from '../../Components/Layout/PostLogin/Layout';
import styles from './Contact.module.scss';
const ContactUs = () => {
  return (
   <>
     <Layout>
        <section className={styles.contactus_section}>
            <h2 className='py-3'>Contact Us</h2>
            <form className={styles.form_data}>
              <div className='form_control'>
                  <input type="text" placeholder='Name' />
              </div>  
              <div className='form_control'>
                  <input type="email" placeholder='Email' />
              </div>  
              <div className='form_control'>
                  <input type="text" placeholder='Subject' />
              </div>  
              <div className='form_control'>
              <textarea name="" id="" placeholder='Message'></textarea>
              </div>
              <div className='submit_btn'>
              <button>Save</button>
              </div>
            </form>
        </section>
     </Layout>
   </>
  )
}

export default ContactUs