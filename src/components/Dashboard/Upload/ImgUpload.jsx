import { HiOutlineUpload } from 'react-icons/hi'
import ImgItem from '~/components/Dashboard/Upload/ImgItem';
import React, { useState, useEffect } from 'react'
import Lightbox from 'react-image-lightbox';
const ImgUpload = ({ setSelectedImages, selectedImages, error, handleBlur, handleChange }) => {
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

    const onSelectFile = (event) => {

        const selectedFiles = event.target.files;

        const selectedFilesArray = Array.from(selectedFiles).reverse();

        const imagesArray = selectedFilesArray.map((file) => {
            return { url: URL.createObjectURL(file), name: file.name, size: file.size, file };
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    const deleteHandler = (image) => {
        setSelectedImages(selectedImages.filter((e) => e.url !== image));
        URL.revokeObjectURL(image);
    }
    useEffect(() => {
        setImage(selectedImages.map((e) => e.url));
    }, [selectedImages]);
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


            <div className="w-full flex flex-col gap-4">
                <label htmlFor='dropzone-file'

                    style={error ? { borderColor: `coral` } : { borderColor: `rgb(209 213 219)` }}
                    className=" cursor-pointer flex flex-col gap-10 justify-center items-center border-2 border-slate-300 rounded-2xl border-dashed bg-gray-50 w-full h-[250px]">
                    <img src='http://localhost:3000/img.png' className="w-32 w-32" alt="img upload" />
                    <div className="flex text-sm gap-1 text-slate-400">
                        <HiOutlineUpload className="text-xl text-blue-500" />
                        <span> Drop your image here. Or</span>
                        <span className="text-blue-500 font-medium">Browse</span>
                    </div>
                    <input
                        type="file"
                        name="images"
                        id="dropzone-file"
                        onBlur={handleBlur}
                        onChange={onSelectFile}
                        multiple
                        accept="image/png , image/jpeg, image/webp"
                        className='hidden'
                    />
                </label>
                {
                    selectedImages && selectedImages.map((image, index) => {
                        return <ImgItem key={index} index={index}
                            openLightboxOnSlide={openLightboxOnSlide}
                            image={image.url} name={image.name}
                            size={image.size} deleteHandler={deleteHandler} />
                    })
                }
                {
                    error && <span className="italic text-red-500 text-xs">{error}</span>
                }


            </div>
        </>
    );
}

export default ImgUpload;