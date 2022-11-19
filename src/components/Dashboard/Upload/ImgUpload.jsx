import { HiOutlineUpload } from 'react-icons/hi'
import ImgItem from '~/components/Dashboard/Upload/ImgItem';
import React, { useState, useEffect } from 'react'
import FsLightbox from 'fslightbox-react';

const ImgUpload = ({ setSelectedImages, selectedImages }) => {
    const [image, setImage] = useState([]);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    const openLightboxOnSlide = (number) => {
        console.log(`number`, number);
        console.log(`lightboxController`, lightboxController)
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;

        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return { url: URL.createObjectURL(file), name: file.name, size: file.size };
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
        console.log(image);
    }, [selectedImages]);
    console.log(`image`, image)
    console.log(`asdasd`)
    return (
        <>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={image}
                slide={lightboxController.slide}
                className='w-full h-full absolute z-[1000]'
            />


            <div className="w-full flex flex-col gap-4">
                <label htmlFor='dropzone-file'
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
                {/* {
                    image?.map((e, index) => {
                        return <img
                            onClick={() => openLightboxOnSlide(index + 1)}
                            key={index} src={e} alt="" />
                    }
                    )
                } */}


            </div>
        </>
    );
}

export default ImgUpload;