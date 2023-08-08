import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../../../hooks/useActions';
import { useNotes } from '../../../hooks/useNotes';
import { useToggle } from '../../../hooks/useToggle';

const Modal = () => {
  const { currentNote } = useToggle();
  const { notes, archive } = useNotes();
  const { toggleModal, addNote, changeNote, nullifyCurrentNote } = useActions();
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    const targetItem =
      notes.find((item) => item.id === currentNote) ||
      archive.find((item) => item.id === currentNote);
    if (targetItem) {
      setValue('name', targetItem.name);
      setValue('category', targetItem.category);
      setValue('content', targetItem.content);
    }
  }, [currentNote]);

  const handleNote = () => {
    const noteData = {
      id: currentNote ? currentNote : crypto.randomUUID(),
      icon:
        getValues('category') === 'Task'
          ? 'src/assets/cart-fill.svg'
          : getValues('category') === 'Idea'
          ? 'src/assets/lightbulb-fill.svg'
          : 'src/assets/brain-fill.svg',
      name: getValues('name'),
      created: currentNote
        ? null
        : new Date().toLocaleDateString('en-us', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
          }),
      category: getValues('category'),
      content: getValues('content'),
      dates:
        getValues('content')
          .match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g)
          ?.join(', ') || '-'
    };

    if (currentNote) {
      changeNote(noteData);
    } else {
      addNote(noteData);
    }

    toggleModal(null);
    nullifyCurrentNote();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleNote)}
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >
        <div className='relative w-96 my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Create Note</h3>
            </div>
            <div className='flex flex-col gap-5 m-5'>
              <div>
                <label>Name</label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Note name'
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <label>Category</label>
                <select
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  {...register('category', { required: true })}
                >
                  <option>Task</option>
                  <option>Random Thought</option>
                  <option>Idea</option>
                </select>
              </div>
              <div>
                <label>Content</label>
                <textarea
                  id='company'
                  rows={5}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write your content...'
                  {...register('content', { required: true })}
                />
              </div>
            </div>
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-[#999999] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => {
                  toggleModal(null);
                  nullifyCurrentNote();
                }}
              >
                Close
              </button>
              <button
                className='bg-[#999999] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='submit'
                onSubmit={handleNote}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default Modal;
