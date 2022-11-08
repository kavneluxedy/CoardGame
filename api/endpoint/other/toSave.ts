import { Image } from 'image-js';

const toSave = async (data: string, path: string = "misc", filename: string = String(Date.now())) => {
    const filePath = String("./" + path + "/" + filename + ".png").toLowerCase();
    try {
        console.debug("Enregistrement de l'image ... \n");

        var uint8 = Uint8Array.from(data.split('').map(data => data.charCodeAt(NaN)));

        // console.log(uint8)

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