import React, { FormEvent, useState } from "react";
import useDb from "../../../utils/hooks/useDb";
import Input from "../../layout/misc/Input";
import InputFile from "../../layout/misc/InputFile";
import ICard from "../../../utils/interfaces/ICard";

const CreateUnit = ({ refresh }: { refresh: () => void }) => {
    const { loading, error, data, dbComm } = useDb("COARD", "cards", {}, "/init");
    const [handImgData, setHandImgData] = useState<ICard["handImgData"] | ArrayBuffer | string | null>(null);
    const [boardImgData, setBoardImgData] = useState<ArrayBuffer | string | null>(null);

    const handleImg = (e, flag: string) => {
        e.preventDefault();
        let data = e.target.files[0];
        console.log(Math.floor(data.size / 1024), " ko");
        var fileReader = new FileReader();
        fileReader.onload = function (data) {
            switch (flag) {
                case "hand":
                    setHandImgData(data!.target!.result);
                    break;
                case "board":
                    setBoardImgData(data!.target!.result);
                    break;
            }
        };
        fileReader.readAsBinaryString(data);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let effects = String(e.target["EFFECTS"].value).split("//");
        let card: ICard = {
            name: String(e.target["NAME"].value),
            cost: Number(e.target["COST"].value),
            atk: Number(e.target["ATK"].value),
            def: Number(e.target["DEF"].value),
            hp: Number(e.target["HP"].value),
            mp: Number(e.target["MP"].value),
            range: Number(e.target["RANGE"].value),
            effects: effects,
            handImg: handImgData,
            boardImg: boardImgData,
        };
        console.log(card);

        dbComm("COARD", "cards", { card: card }, "/api/cards/create");
        refresh();
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
            method="post"
            id="create-card-form"
            className="panel-container"
        >
            <Input type="text" id="NAME" defaultValue="" />
            <Input type="number" id="COST" defaultValue="" />
            <Input type="number" id="ATK" defaultValue="" />
            <Input type="number" id="DEF" defaultValue="" />
            <Input type="number" id="HP" defaultValue="" />
            <Input type="number" id="MP" defaultValue="" />
            <Input type="number" id="RANGE" defaultValue="" />
            <Input type="text" id="EFFECTS" defaultValue="" required={false} />
            <InputFile
                id="BOARD_IMG"
                onChange={(e) => handleImg(e, "board")}
            />
            <InputFile
                id="HAND_IMG"
                onChange={(e) => handleImg(e, "hand")} />
            <Input
                type="submit"
                id="submit"
                className="panel-btn create-card-btn"
                defaultValue="✅"
            />
        </form>
    );
};

export default CreateUnit;
