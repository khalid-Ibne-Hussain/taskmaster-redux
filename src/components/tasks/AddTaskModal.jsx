import { useDispatch } from 'react-redux';
import Modal from '../ui/Modal';
import { useForm } from 'react-hook-form';
import { addTask } from '../../redux/features/tasks/taskSlics';

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const {
        register,
        handleSubmit, reset
    } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }
    const onSubmit = (data) => {
        onCancel();
        console.log(data);
        dispatch(addTask(data))

    };


    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="abc">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="title">Title</label>
                            <input className='w-full rounded-md' type="text" id='title' {...register('title')} />

                        </div>

                        <div className='flex flex-col mb-5'>
                            <label htmlFor="description" className='mb-5'>Description</label>
                            <textarea name="" id="description"  {...register('description')}></textarea>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label htmlFor="date" className='mb-2'>
                                Deadline
                            </label>
                            <input className='w-full rounded-md' type="date" id="date" {...register('date')} />

                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className='mb-2' htmlFor="assignedTo">Assign to</label>
                            <select className='w-full rounded-md' name="" id="assignedTo" {...register('assignedTo')}>
                                <option value="Mr Fahim">Mr Fahim</option>
                                <option value="Mr Anik">Mr Anik</option>
                                <option value="Mr Tonmoy">Mr Tonmoy</option>
                                <option value="Mr Rahul">Mr Rahul</option>
                            </select>
                        </div>


                        {/* priority */}
                        <div className='flex flex-col mb-5'>
                            <label htmlFor="priority">Priority</label>
                            <select className='w-full rounded-md' name="" id="priority" {...register('priority')}>
                                <option defaultValue value="high">
                                    High
                                </option>
                                <option value="medium">
                                    Medium
                                </option>
                                <option value="low">
                                    Low
                                </option>
                            </select>

                        </div>
                        {/* button */}
                        <div className='flex gap-3 justify-end'>
                            <button onClick={() => { onCancel() }} type='button' className='btn btn-danger'>Cancel</button>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>


            </Modal>
        </div>
    );
};

export default AddTaskModal;