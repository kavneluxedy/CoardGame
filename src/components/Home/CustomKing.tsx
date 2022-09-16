import React, { useState, useEffect } from 'react';
import { AllPictures } from "../../assets/images/AllPictures";

const CustomKing = (): JSX.Element => {

    const [nickname, setNickname] = useState("Visitor");

    const handleNickname = (e: any) => {
        setNickname(e.target.value);
    }

    useEffect(() => {
        console.log(nickname);
    }, [nickname])

    const [img, setImg] = useState(localStorage.getItem("player_avatar") || AllPictures[0]);

    const handleAvatar = () => {
        let i: number = AllPictures.indexOf(img);

        if (i === AllPictures?.length - 1) {
            i = 0;
        }
        else {
            i++;
        }

        setImg(AllPictures[i]);
        localStorage.setItem("player_avatar", AllPictures[i]);
    }

    return (
        <div className="go-wrapper">
            <label htmlFor="nickname">Nickname: </label><input type="text" id="nickname" onChange={(e) => handleNickname(e)}></input>
            <img src={img} onClick={handleAvatar} alt="Avatar de votre Roi" />
        </div>
    )
}

export default CustomKing