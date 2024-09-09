"use client"

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    function handleClickPick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    return <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {!pickedImage && <p>No image picked, yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="USer selected image" fill ></Image>}
            </div>
            <input type='file' 
                className={styles.input}
                id={name} 
                accept="image/png, image/jpg"
                ref={imageInputRef}
                name={name} 
                required
                onChange={handleImageChange}/>
                <button className={styles.button} type="button" onClick={handleClickPick}>
                    Pick an image
                </button>
        </div>
    </div>
    
}