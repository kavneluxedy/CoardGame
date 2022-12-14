import React, { FormEvent, useState } from "react";
import useDb from "../../../utils/hooks/useDb";
import Input from "../../layout/misc/Input";
import InputFile from "../../layout/misc/InputFile";
import ICard from "../../../utils/interfaces/ICard";

const CreateUnit = ({ refresh }: { refresh: () => void }) => {
    const { dbComm } = useDb("COARD", "cards", {}, "/init");
    const [handImgData, setHandImgData] = useState<ICard["handImgData"] | ArrayBuffer | string | null>(null);
    const [boardImgData, setBoardImgData] = useState<ArrayBuffer | string | null>(null);

    const handleImg = (e: { preventDefault: () => void; target: { files: any[]; }; }, flag: string) => {
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
        let unit: ICard = {
            name: String(e.target["NAME"].value),
            cost: Number(e.target["COST"].value),
            atk: Number(e.target["ATK"].value),
            def: Number(e.target["DEF"].value),
            hp: Number(e.target["HP"].value),
            mp: Number(e.target["MP"].value),
            range: Number(e.target["RANGE"].value),
            effects: effects,
            handImgData: handImgData,
            boardImgData: boardImgData,
            type: "unit"
        };

        dbComm("COARD", "cards", { card: unit }, "/api/cards/create");
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
            <Input type="text" id="NAME" />
            <Input type="number" id="COST" />
            <Input type="number" id="ATK" />
            <Input type="number" id="DEF" />
            <Input type="number" id="HP" />
            <Input type="number" id="MP" />
            <Input type="number" id="RANGE" />
            <Input type="text" id="EFFECTS" required={false} />
            <InputFile
                id="BOARD_IMG"
                onChange={(e: any) => handleImg(e, "board")}
            />
            <InputFile
                id="HAND_IMG"
                onChange={(e: any) => handleImg(e, "hand")}
            />
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
