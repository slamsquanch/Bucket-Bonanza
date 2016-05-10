/**
 * Created by Zac on 2016-05-09.
 */

    function bucketControls() {
        var bucketLeft = document.createElement("IMG");
        var bucketRight = document.createElement("IMG");
        var bucketMid = document.createElement("IMG");

        bucketLeft.setAttribute("src", "graphics/invisible_bucket.png");
        /*bucketLeft.setAttribute("width", "20%");
        bucketLeft.setAttribute("height", "20%");*/
        bucketLeft.setAttribute("alt", "Transparent button-left");
        bucketLeft.setAttribute("id", "LeftPlace");
        bucketLeft.style.position = "absolute";
        bucketLeft.style.position = "15%"
        bucketLeft.style.marginTop = "80%";
        document.body.appendChild(bucketLeft);


        bucketRight.setAttribute("src", "graphics/invisible_bucket.png");
        /*bucketRight.setAttribute("width", "20%");
        bucketRight.setAttribute("height", "20%");*/
        bucketRight.setAttribute("alt", "Transparent button-right");
        bucketRight.setAttribute("id", "RightPlace");
        bucketRight.style.position = "absolute";
        bucketRight.style.marginLeft = "60%";
        bucketRight.style.marginTop = "80%";
        document.body.appendChild(bucketRight);

        bucketMid.setAttribute("src", "graphics/Bucket.png");
        /*bucketMid.setAttribute("width", "20%");
        bucketMid.setAttribute("height", "20%");*/
        bucketMid.setAttribute("alt", "Transparent button-mid");
        bucketMid.setAttribute("id", "MidPlace");
        bucketMid.style.position = "absolute";
        bucketMid.style.marginLeft = "30%";
        bucketMid.style.marginTop = "80%";
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







