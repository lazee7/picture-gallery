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
      className=' transition-transform hover:scale-[0.95] duration-75 transform'
    >
      <div
        className={`flex justify-center items-center h-72 overflow-hidden md:w-72 lg:w-60 rounded-md`}
      >
        <img
          src={image.webformatURL}
          alt=''
          id={`${image.id}`}
          loading='lazy'
          className='object-cover w-full h-full'
        />
      </div>
      <ul className='flex gap-2 flex-wrap py-3'>
        {image.tags.split(', ').map((item, index) => (
          <li
            key={index}
            className='border bg-pink-200 py-1 rounded-lg px-2 text-xs'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
