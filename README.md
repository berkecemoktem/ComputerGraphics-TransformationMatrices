# ComputerGraphics-TransformationMatrices
The project aims to provide a fundamental understanding of 3D transformations and how they apply to simulating the movement and orientation of a drone using JavaScript.

![drone_project_javascript](https://github.com/berkecemoktem/ComputerGraphics-TransformationMatrices/assets/75270752/3715c15b-3787-4b5e-8bfb-f69661ca3b67)


## Detailed Explanation

### ‘GetTransform()’
#### -> function GetTransform(positionX, positionY, rotation, scale){}

1. This method is responsible for constructing a 3x3 transformation matrix representing the transformations such as scaling, rotation and translation. Let’s analyze the steps:
2. Conversion from degrees to radians;
    
    a. We get a rotation information from the users event in degrees and then convert
    it to radians since we deal with trigonometric functions (cos and sin).
3. Cosine and Sine Values Calculation;
        
    a. The code calculates the cosine and sine values of the converted angle mentioned
    above. We need these values in the transformation matrix (rotation component).
   
4. Construction of a 3x3 transformation matrix and the elements of (‘’math’’);

        scale * cosAngle: Scaling and rotation on the x-axis.
        
        -scale * sinAngle: Scaling and rotation on the y-axis (note the negative sign). 
        
        0: No rotation or scaling on the z-axis.

        scale * sinAngle: Scaling and rotation on the x-axis for the second column. 
        
        scale * cosAngle: Scaling and rotation on the y-axis for the second column. 
        
        0: No rotation or scaling on the z-axis.
        
        positionX: Translation along the x-axis.
        
        positionY: Translation along the y-axis.
    
        1: Fixed value for the third row, as it represents the z-axis.
5. Return the matrix
a. The function ends up with returning the 3x3 matrix that we will use for multiplying with the other matrix we’ll have.

### ‘ApplyTransform()’
#### -> function ApplyTransform(trans1, trans2) {}   

1. Initializing the result matrix;
    
    a. The logic starts with initializing a 3x3 result matrix and filling each cell with zero.
2. Matrix Multiplication (dot product);

    a. The do while structure was used for dot product.

    b. The nested loops go over the rows and columns of the result matrix.

    c. The third loop iterates in the interval of 0-2 and performs the corresponding rows from ‘trans1’ and ‘trans2’.

    d. To calculate the dot product, we multiply the numbers in the same positions of
    trans1 and trans2 for the current row and column, and then we add up all those products to get the sum value.

3. Returning the resulting transformation matrix;
a. The function ends up with returning the result matrix.

