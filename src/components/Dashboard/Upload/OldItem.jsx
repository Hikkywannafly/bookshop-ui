import React, { useState, useEffect } from 'react'
import Lightbox from 'react-image-lightbox';
const OldItem = ({ value }) => {
    const [image, setImage] = useState([]);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number - 1
        });
    }
    useEffect(() => {
        setImage(value);
    }, [value]);
    return (
        <>
            {lightboxController.toggler && (
                <Lightbox
                    mainSrc={image[lightboxController.slide]}
                    nextSrc={image[(lightboxController.slide + 1) % image.length]}
                    prevSrc={image[(lightboxController.slide + image.length - 1) % image.length]}
                    onCloseRequest={() => setLightboxController({ toggler: false, slide: 1 })}
                    onMovePrevRequest={() =>
                        setLightboxController({
                            toggler: lightboxController.toggler,
                            slide: (lightboxController.slide + image.length - 1) % image.length,
                        })
                    }
                    imageTitle={`${lightboxController.slide + 1} / ${image.length}`}
                    onMoveNextRequest={() =>
                        setLightboxController({
                            toggler: lightboxController.toggler,
                            slide: (lightboxController.slide + 1) % image.length,
                        })
                    }
                />
            )}
            <br></br>
            <label className="text-sm font-semibold text-gray-600 py-2 mt-4">Old Images</label>
            <div className="w-full flex gap-4 mt-4">
                {
                    image?.map((e, i) => (
                        <div key={i} className="h-20 relative border">
                            <img src={e} alt=""
                                className="w-full h-full "
                                onClick={() => openLightboxOnSlide(i + 1)}
                            />
                        </div>
                    ))
                }

            </div>
        </>
    );
}

export default OldItem;