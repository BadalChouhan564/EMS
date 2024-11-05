import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {


    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.FailedTask) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}

            {/* <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}

        </div>
    )
}

export default TaskList