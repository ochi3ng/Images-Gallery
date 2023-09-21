import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const ImageGallery = ({ images }) => {
    return (
        <Droppable droppableId="imageGallery" direction="horizontal">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {images.map((image, index) => (
                        <Draggable
                            key={image.id}
                            draggableId={image.id.toString()}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <img
                                        src={image.url}
                                        alt={`Image ${image.id}`}
                                        className="max-w-full h-auto "
                                        style={{ width: "200px", height: "200px" }}
                                    />
                                    <div className="text-center">{image.tags.join(", ")}</div>
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
            )}
        </Droppable>
    );
};

export default ImageGallery;