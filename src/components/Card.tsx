import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Card = ({ image }: { image: Image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={styles}
      {...listeners}
      className='w-72 h-72 hover:rotate-1 transform transition-all duration-100'
    >
      <img src={image.webformatURL} alt='' className='w-full object-cover' />
    </div>
  );
};

export default Card;
