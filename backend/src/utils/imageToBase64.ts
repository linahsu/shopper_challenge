import fs from "fs";

function convertImageToBase64(filePath: string): string {
    const imageBuffer = fs.readFileSync(filePath);
    return imageBuffer.toString('base64');
}

const base64Image = convertImageToBase64('./medidor-de-agua.jpg');

console.log(base64Image);

export {
    base64Image,
}