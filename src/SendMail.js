import React, { useEffect, useState } from 'react'
import './SendMail.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase/compat/app';
import { db } from './firebase';

function SendMail() {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        db.collection('emails').add({
            from: formData.from,
            to: formData.to,
            title: formData.title,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h4>New Message</h4>
            <CloseSharpIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="from" type="email" placeholder="Od" {...register("from", { required: true })} />
            {errors.from && <span className='mail__fieldRequired'>Ovo polje je obavezno!</span>}
            <input name="to" type="email" placeholder="Kome" {...register("to", { required: true })} />
            {errors.to && <span className='mail__fieldRequired'>Ovo polje je obavezno!</span>}
            <input name="title" type="text" placeholder='Naslov' {...register("title", { required: true })} />
            {errors.title && <span className='mail__fieldRequired'>Ovo polje je obavezno!</span>}
            <input name="message" type="text" className="sendMail__message" {...register("message", { required: true })} />
            {errors.message && <span className='mail__fieldRequired'>Ovo polje je obavezno!</span>}

            <div className="sendMail__options">
                <Button type="submit" className="sendMail__send">Posalji</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail