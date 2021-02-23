import React from 'react';
import './Slider.css'
const Slider = () => {
    return (
        <>
            <div class='container'>

                <div class="ism-slider" data-transition_type="fade" id="my-slider">
                    <ol>
                        <li>
                            <img src="ism/image/slides/flower-729514_1280.jpg" />
                            <div class="ism-caption ism-caption-0">My slide caption text</div>
                        </li>
                        <li>
                            <img src="ism/image/slides/beautiful-701678_1280.jpg" />
                            <div class="ism-caption ism-caption-0">My slide caption text</div>
                        </li>
                        <li>
                            <img src="ism/image/slides/summer-192179_1280.jpg" />
                            <div class="ism-caption ism-caption-0">My slide caption text</div>
                        </li>
                    </ol>
                </div>
                <p class="ism-badge" id="my-slider-ism-badge"><a class="ism-link" href="http://imageslidermaker.com" rel="nofollow">generated with ISM</a></p>

                <section><h1>Your slider in a simple web page</h1>


                    <p>This is a working example of your slider.</p>

                    <p>To get your slider working in your web page add <em>my-slider.css</em>, <em>ism-2.2.min.js</em> and the slide images to your project directory and paste the markup into your HTML.</p>
                    <p>Please see README.txt for more detailed instructions.</p>

                    <p>* If your slider is not displayed correctly, please first make sure you have fully extracted the contents of the zip file.</p>

                </section>

            </div>

        </>
    );
}

export default Slider;