import React from 'react';
import styles from './Contacts.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/Title/Title";
import {Fade} from "react-awesome-reveal";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";

const contactsValidationSchema =  Yup.object().shape({
    name: Yup.string().max(30, 'Too long').required('Field is required'),
    email: Yup.string().email().max(30, 'Too long').required('Field is required'),
    message: Yup.string().max(200, 'Too long').min(10, 'Too short').required('Field is required'),
})

const Contacts = () => {
    const {errors, touched, getFieldProps, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: contactsValidationSchema,
        async onSubmit(values, {resetForm}) {
            console.log(values)
            await axios.post('https://portfolio-back-plum.vercel.app/sendMessage', values)
            resetForm()
        }
    })

    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <Fade className={styles.fade} triggerOnce={true} duration={1000}>
                <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                    <Title text={'Contacts'}/>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} placeholder={'Name'} {...getFieldProps('name')}/>
                        {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
                        <input className={styles.input} placeholder={'E-mail'} {...getFieldProps('email')}/>
                        {errors.email && touched.email && <div className={styles.error}>{errors.email}</div>}
                        <textarea className={styles.textarea} placeholder={'Your message'} {...getFieldProps('message')}/>
                        {errors.message && touched.message && <div className={styles.error}>{errors.message}</div>}
                        <button className={styles.submitButton} type={"submit"}>send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;