import { Image } from 'image-js';

const toSave = async (data: string, path: string = "misc", filename: string = String(Date.now())) => {

    // ? Image path in database
    const filePath = String("images/" + path + "/" + filename + ".png").toLowerCase();



    try {
        console.log("Enregistrement de l'image ... \n");
        console.log(filePath);

        var uint8 = Uint8Array.from(data.split('').map(data => data.charCodeAt(NaN)));

        let image = await Image.load(uint8);
        image.save(filePath);

    } catch (error) {
        console.error(error);
    }
    finally {
        return filePath;
    }
}

export default toSave;