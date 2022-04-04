import sharp from "sharp";

const RGB_CODE_DICTIONARY = [
    [109,0,26],
    [190,0,57],
    [255,69,0],
    [255,168,0],
    [255,214,53],
    [255,248,184],
    [0,163,104],
    [0,204,120],
    [126,237,86],
    [0,117,111],
    [0,158,170],
    [0,204,192],
    [36,80,164],
    [54,144,234],
    [81,233,244],
    [73,58,193],
    [106,92,255],
    [148,179,255],
    [129,30,159],
    [180,74,192],
    [228,171,255],
    [222,16,127],
    [255,56,129],
    [255,153,170],
    [109,72,47],
    [156,105,38],
    [255,180,112],
    [0,0,0],
    [81,82,82],
    [137,141,144],
    [212,215,217],
    [255,255,255]
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
                RGB_CODE_DICTIONARY.sort((value1, value2) => {
                    return distColor(value1) - distColor(value2);

                    function distColor(value: Array<number>): number {
                        return Math.pow(value[0] - color.r, 2) + Math.pow(value[1] - color.g, 2) + Math.pow(value[2] - color.b, 2);
                    }
                });

                const sColor = RGB_CODE_DICTIONARY[0];

                if (sColor) {
                    setPixel(inSize, outputMap.data, { x, y }, { a: 255, b: sColor[2], g: sColor[1], r: sColor[0] });
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
