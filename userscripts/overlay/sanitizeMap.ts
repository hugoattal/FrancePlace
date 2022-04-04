import sharp from "sharp";

const RGB_CODE_DICTIONARY = [
    [255, 69, 0],
    [255, 168, 0],
    [255, 214, 53],
    [0, 163, 96],
    [126, 237, 86],
    [36, 80, 164],
    [54, 144, 234],
    [81, 233, 244],
    [129, 30, 159],
    [180, 74, 192],
    [255, 153, 170],
    [156, 105, 38],
    [0, 0, 0],
    [137, 141, 144],
    [212, 215, 217],
    [255, 255, 255]
];



type TVector = {
    x: number;
    y: number;
}

type TColor = {
    a: number;
    b: number;
    g: number;
    r: number;
}

(async () => {
    const inputMap = await sharp(`${ __dirname }/map.png`)
        .raw()
        .toBuffer({ resolveWithObject: true });

    const inSize: TVector = { x: inputMap.info.width, y: inputMap.info.height };

    const outputMap = await sharp({
        create: {
            background: { alpha: 0, b: 0, g: 0, r: 0 },
            channels: 4,
            height: inSize.y,
            width: inSize.x
        }
    }).raw().toBuffer({ resolveWithObject: true });

    for (let y = 0; y < inSize.y; y++) {
        for (let x = 0; x < inSize.x; x++) {
            const color = getPixel(inSize, inputMap.data, { x, y });

            if (color.a === 255) {
                if (RGB_CODE_DICTIONARY.find((value) => {
                    return value[0] === color.r && value[1] === color.g && value[2] === color.b;
                })) {
                    setPixel(inSize, outputMap.data, { x, y }, color);
                }
            }
        }
    }

    await sharp(outputMap.data, {
        raw: {
            channels: 4,
            height: inSize.y,
            width: inSize.x
        }
    }).toFile(`${ __dirname }/sanitized.png`);

})().then(() => {
    console.log("Done!");
});

function getPixel(size: TVector, buffer: Buffer, location: TVector): TColor {
    return {
        a: buffer[(location.x + location.y * size.x) * 4 + 3],
        b: buffer[(location.x + location.y * size.x) * 4 + 2],
        g: buffer[(location.x + location.y * size.x) * 4 + 1],
        r: buffer[(location.x + location.y * size.x) * 4]
    };
}

function setPixel(size: TVector, buffer: Buffer, location: TVector, color: TColor) {
    buffer[(location.x + location.y * size.x) * 4 + 3] = color.a;
    buffer[(location.x + location.y * size.x) * 4 + 2] = color.b;
    buffer[(location.x + location.y * size.x) * 4 + 1] = color.g;
    buffer[(location.x + location.y * size.x) * 4] = color.r;
}
