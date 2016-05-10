/**
 * Created by Zac on 2016-05-09.
 */
    var myTimer = null;
    var bucket = document.getElementById('bucket');

    function bucketControls() {
        var bucketLeft = document.createElement("IMG");
        var bucketRight = document.createElement("IMG");
        var bucketMid = document.createElement("IMG");

        bucketLeft.setAttribute("src", "graphics/invisible_bucket.png");
        bucketLeft.setAttribute("width", "20%");
        bucketLeft.setAttribute("height", "20%");
        bucketLeft.setAttribute("alt", "Transparent button-left");
        bucketLeft.setAttribute("id", "LeftPlace");
        /*bucketLeft.style.position = "absolute";*/
        bucketLeft.style.position = "2%"
        bucketLeft.style.marginTop = "50%";
        document.body.appendChild(bucketLeft);

        /*bucketLeft.src = "graphics/Bucket.png";
        document.body.appendChild(bucketLeft);*/

        bucketRight.setAttribute("src", "graphics/invisible_bucket.png");
        bucketRight.setAttribute("width", "20%");
        bucketRight.setAttribute("height", "20%");
        bucketRight.setAttribute("alt", "Transparent button-right");
        bucketRight.setAttribute("id", "RightPlace");
        /*bucketRight.style.position = "absolute";*/
        bucketRight.style.marginLeft = "2%";
        bucketRight.style.marginTop = "50%";
        document.body.appendChild(bucketRight);

        bucketMid.setAttribute("src", "graphics/Bucket.png");
        bucketMid.setAttribute("width", "20%");
        bucketMid.setAttribute("height", "20%");
        bucketMid.setAttribute("alt", "Transparent button-mid");
        bucketMid.setAttribute("id", "MidPlace");
        /*bucketMid.style.position = "absolute";*/
        bucketMid.style.marginLeft = "2%";
        bucketMid.style.marginTop = "50%";
        document.body.appendChild(bucketMid);

        bucketLeft.onclick=function() {
            this.src="graphics/Bucket.png";
            bucketRight.src="graphics/invisible_bucket.png";
            bucketMid.src="graphics/invisible_bucket.png";
        }

        bucketRight.onclick=function() {
            this.src="graphics/Bucket.png";
            bucketLeft.src="graphics/invisible_bucket.png";
            bucketMid.src="graphics/invisible_bucket.png";
        }

        bucketMid.onclick=function() {
            this.src="graphics/Bucket.png";
            bucketLeft.src="graphics/invisible_bucket.png";
            bucketRight.src="graphics/invisible_bucket.png";
        }
    }






    function moveBucket() {
            bucket.style.right = parseInt(bucket.style.right) + 50 + px;
            bucket.style.left = parseInt(bucket.style.left) + 50 + px;
        }





