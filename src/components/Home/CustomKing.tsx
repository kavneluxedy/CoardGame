import React, { useState, useEffect } from 'react'
import { AllPictures } from "../../assets/images/AllPictures"

const CustomKing = () => {

    const [nickname, setNickname] = useState("Visitor");

    // useEffect(() => {
    //     console.log(nickname)
    // }, [nickname])

    const handleNickname = (e: any) => {
        setNickname(e.target.value);
    }

    const [img, setImg] = useState(AllPictures[0]);

    // useEffect(() => {
    //     console.log(img)
    // }, [img])

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
            <label htmlFor="nickname">Nickname: </label><input type="text" id="nickname" onChange={(e) => handleNickname(e)}></input>
            <img src={img} onClick={handleCustomKing} />
        </div>
    )
}

export default CustomKing