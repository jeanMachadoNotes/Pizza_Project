# Pizza_Planet_Project

 An App for ordering custom pizza's.

It will take in selected options and output a total cost underneath with order summary.

Technologies: HTML, CSS, and JavaScript.

![Pizza Planet Menu](https://user-images.githubusercontent.com/98543446/167223416-be7cd638-da49-4c8d-9fcd-c254d24e07d5.gif)

This was accomplished via Loops, Classes, and Array's. It tallied up choices made and associated values into an Array, 

```
 for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; //Would grab checked items, value i.e. 'Medium Pizza'
            text1 = text1 + selectedSize + "<br>";
        }
    }

```

and Outputed end result into a hidden 'cart' that appeared when Order button was clicked.

![menu-2](https://user-images.githubusercontent.com/98543446/167223624-e52ccbbb-7e25-4b68-93c2-be70cf903daf.png)
