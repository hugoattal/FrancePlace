import sharp from "sharp";

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
    const outSize: TVector = { x: inSize.x * 3, y: inSize.y * 3 };

    const outputMap = await sharp({
        create: {
            background: { alpha: 0, b: 0, g: 0, r: 0 },
            channels: 4,
            height: outSize.y,
            width: outSize.x
        }
    }).raw().toBuffer({ resolveWithObject: true });

    for (let y = 0; y < inSize.y; y++) {
        for (let x = 0; x < inSize.x; x++) {
            const color = getPixel(inSize, inputMap.data, { x, y });

            if (color.a === 255) {
                setPixel(outSize, outputMap.data, { x: x * 3 + 1, y: y * 3 + 1 }, color);
            }
        }
    }

    await sharp(outputMap.data, {
        raw: {
            channels: 4,
            height: outSize.y,
            width: outSize.x
        }
    }).toFile(`${ __dirname }/output.png`);

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
