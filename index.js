//Author: Berke Cem Oktem

// TO DO 1: Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// Initially, the transformation employs scaling, followed by rotation, and ultimately, translation.
// The specified rotation measurement is in degrees.
function GetTransform(positionX, positionY, rotation, scale) {
    // degrees to radians convertion
    var angle = (-rotation * Math.PI) / 180;
    
    // Calculate the sine & cosine vals of the rotation angle
    var cosAngle = Math.cos(angle);
    var sinAngle = Math.sin(angle);
    
    // Build the 3x3 transformation matrix in format
    var matrix = [
        scale * cosAngle, -scale * sinAngle, 0,
        scale * sinAngle, scale * cosAngle, 0,
        positionX, positionY, 1
    ];

    return matrix;
}

// TO DO 2: Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// The inputs consist of transformation matrices following the identical format.
// The resulting transformation initially employs trans1 and subsequently applies trans2.

//basically doing dot product in line
function ApplyTransform(trans1, trans2) {
    const result = new Array(9).fill(0);
  
    let row = 0;
    do {
        let col = 0;
        do {
            let sum = 0;
            let k = 0;
            do {
                sum += trans1[row * 3 + k] * trans2[k * 3 + col];
                k++;
            } while (k < 3);
            result[row * 3 + col] = sum;
            col++;
        } while (col < 3);
        row++;
    } while (row < 3);
  
    return result;
}

