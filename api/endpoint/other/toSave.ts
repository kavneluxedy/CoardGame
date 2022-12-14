import { Image } from 'image-js';

const toSave = async (data: string, path: string = "misc", filename: string = String(Date.now())) => {
	const filePath = String(`images/${path}/${filename}.png`).toLowerCase();

	console.log(data, "L");

	try {
		console.log("Enregistrement de l'image ... \n");
		let uint8 = Uint8Array.from(data.split('').map(data => data.charCodeAt(NaN)));
		let image = await Image.load(uint8);
		image.save(filePath);

		return filePath;
	} catch (error: any) {
		console.error(error);
	}
	finally {
		return filePath;
	}
}

const getImageDataUrl = (path: string) => {
	const src = Image.load(path).then(image => image.toDataURL());
	return src;
}

const getBlobData = (path: string) => {
	const image = Image.load(path).then(image => image.toBlob());
	return image;
}

export { toSave, getImageDataUrl };
