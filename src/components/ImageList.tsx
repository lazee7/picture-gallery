import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Dispatch } from 'react';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import Card from './Card';

type ImageListProp = {
  images: Image[] | null;
  setImages: Dispatch<React.SetStateAction<Image[] | null>>;
};

const ImageList = ({ images, setImages }: ImageListProp) => {
  // handle drag and drop on mobile and desktop. from the dndkit library
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    if (!images) return null;

    const { active, over } = event;
    if (active?.id === over?.id) return;
    setImages(() => {
      const oldIndex = images?.findIndex((img) => img.id === active?.id);
      const newIndex = images?.findIndex((img) => img.id === over?.id);

      return arrayMove(images, oldIndex, newIndex);
    });
  };

  if (!images) return null;

  // when user's search query doesn't produce results
  if (images.length === 0)
    return (
      <p className='text-center py-20 text-xl text-white'>no images found...</p>
    );

  return (
    <div className='grid sl:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-7 gap-x-7 px-16 py-4'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={images} strategy={rectSortingStrategy}>
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ImageList;
