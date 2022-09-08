import React, { useState, useEffect } from 'react'
import { AllPictures } from "../assets/images/AllPictures"

const CustomKing = () => {
    const [img, setImg] = useState(AllPictures[0]);
    useEffect(() => {
        console.log(img)
    }, [img])

    const handleCustomKing = () => {
        let i: number = AllPictures.indexOf(img);

        if (i === AllPictures?.length - 1) {
            i = 0;
        }
        else {
            i++;
        }

        setImg(AllPictures[i]);
    }









    return (
        <div className="go-wrapper">
            <img src={img} onClick={handleCustomKing} />
        </div>
    )
}

export default CustomKing