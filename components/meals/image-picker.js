'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export const ImagePicker = ({ label, name }) => {

    const [pickedImage, setPickedImage] = useState(null)
    const imageInput = useRef()

    const handlePickClick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if(!file){
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result) 
        }

        fileReader.readAsDataURL(file)

    }

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={name}>
                    {label} + dsadasdas
                </label>


                <div className={classes.controls}>
                    <div className={classes.preview}>
                        { !pickedImage && <p> no image </p> }
                        { pickedImage && <Image src={pickedImage} alt='selected image' fill/> }

                    </div>
                    <input
                        className={classes.input}
                        id={name}
                        type='file'
                        accept='image/png , image/jpeg'
                        name={name}
                        ref={imageInput}
                        onChange={handleImageChange}
                        required
                    />

                    <button
                        className={classes.button}
                        type='button'
                        onClick={handlePickClick}
                    >
                        Select Image
                    </button>

                </div>
            </div>
        </>
    )
}
