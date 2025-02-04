'use client';
import { useState } from 'react';
import ListEmpty from './componnents/listEmpty';
import TitleTable from './componnents/titleTable';
import Task from './componnents/task';
import taskMock from './mock';
import TaskType from './types/task_type';

export default function Home() {
  const [taskList, setTaskList] = useState(taskMock);
  const [newTask, setNewTask] = useState('');
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [qtdCompleted, setQtdCompleted] = useState(0);

  const addNewTask = (textTask: string) => {
    setNewTask('');
    setIsListEmpty(false);
    let addTaskType: TaskType = {
      id: taskList.length + 1,
      text: textTask,
    };
    setTaskList([...taskList, addTaskType]);
  };

  const removeTask = (id: number) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
    setIsListEmpty(updatedTaskList.length === 0);
  };

  return (
    <div className="flex flex-col mx-auto items-center w-min ">
      <div className="flex gap-2 text-2xl font-bold my-10">
        <svg
          width="40"
          height="50"
          viewBox="0 0 22 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0215 2.93302C14.1472 6.9011 15.8158 11.7944 15.7553 16.8155V18.0141L16.7865 18.6416C18.119 19.4482 19.1127 20.6993 19.5866 22.1669C19.1705 21.8605 18.7352 21.5803 18.2833 21.3278L15.5333 19.7838L15.0391 22.9001C14.9963 23.1755 14.9389 23.4485 14.8672 23.718H7.16151C7.04692 23.3655 6.95382 23.0129 6.86789 22.6463L6.24484 19.8261L3.70968 21.2362C3.28615 21.473 2.87723 21.7344 2.48507 22.0188C2.96824 20.5682 3.94123 19.3242 5.24224 18.4935L6.22336 17.866V16.7521C6.24106 11.7513 7.92967 6.89523 11.0287 2.93302H11.0215ZM11.0287 0C10.868 0.000390307 10.7128 0.0579856 10.5918 0.162162L10.5274 0.218566C6.39778 4.76564 4.10466 10.6454 4.08208 16.745C2.32967 17.8643 1.03251 19.5543 0.417263 21.5197C-0.197979 23.485 -0.0921719 25.6007 0.716194 27.4971C1.56776 25.6455 2.99131 24.1058 4.7839 23.0975C4.96368 23.8642 5.2031 24.6161 5.50005 25.3467C5.53771 25.4871 5.62118 25.6114 5.73763 25.7006C5.85408 25.7898 5.99706 25.8388 6.14458 25.8402H16.0847C16.2852 25.8402 16.4857 25.6498 16.586 25.3537C16.8758 24.6592 17.0778 23.9322 17.1875 23.1892C18.9836 24.1932 20.4083 25.7342 21.2553 27.5887C22.1124 25.7017 22.2451 23.5727 21.6287 21.5967C21.0124 19.6206 19.6888 17.9319 17.9037 16.8437C17.9745 10.7082 15.6935 4.77179 11.5157 0.218566C11.4535 0.150085 11.3773 0.0952397 11.2922 0.0575871C11.2071 0.0199344 11.1149 0.000314749 11.0215 0L11.0287 0Z"
            fill="#4EA8DE"
          />
          <path
            d="M11.0216 16.1598C10.4715 16.1598 9.93376 15.9995 9.47611 15.699C9.01846 15.3986 8.6614 14.9715 8.44993 14.4716C8.23847 13.9716 8.18206 13.4213 8.28782 12.8898C8.39358 12.3584 8.65678 11.8697 9.04423 11.4853C9.43169 11.1009 9.92606 10.838 10.465 10.7298C11.004 10.6216 11.5634 10.6729 12.0728 10.8773C12.5822 11.0816 13.0188 11.4298 13.3275 11.8781C13.6361 12.3263 13.8031 12.8545 13.8074 13.396C13.8159 13.7469 13.7542 14.0961 13.6256 14.4235C13.4971 14.751 13.3043 15.0503 13.0582 15.3043C12.8121 15.5583 12.5176 15.7622 12.1915 15.9041C11.8654 16.0461 11.5141 16.1234 11.1576 16.1316C11.1126 16.1387 11.0666 16.1387 11.0216 16.1316V16.1598Z"
            fill="#4EA8DE"
          />
          <path
            d="M14.8959 27.5958C14.7167 27.5901 14.5382 27.6198 14.3708 27.683C14.2034 27.7462 14.0505 27.8416 13.9211 27.9638C13.7917 28.086 13.6884 28.2323 13.6172 28.3943C13.546 28.5563 13.5084 28.7307 13.5066 28.9072V33.067C13.5066 33.4297 13.653 33.7776 13.9135 34.0342C14.1741 34.2907 14.5274 34.4348 14.8959 34.4348C15.2644 34.4348 15.6178 34.2907 15.8783 34.0342C16.1389 33.7776 16.2852 33.4297 16.2852 33.067V28.9636C16.291 28.7877 16.2611 28.6126 16.1973 28.4482C16.1336 28.2839 16.0372 28.1337 15.9139 28.0064C15.7906 27.879 15.6428 27.7772 15.4791 27.7067C15.3154 27.6362 15.139 27.5985 14.9604 27.5958H14.8959Z"
            fill="#5E60CE"
          />
          <path
            d="M7.16154 27.5957C6.97931 27.5863 6.797 27.6129 6.62546 27.6742C6.45392 27.7355 6.29665 27.8302 6.16302 27.9525C6.02939 28.0749 5.92213 28.2224 5.84761 28.3864C5.77309 28.5504 5.73284 28.7275 5.72925 28.9071V33.067C5.72925 33.4297 5.87562 33.7776 6.13617 34.0341C6.39672 34.2906 6.7501 34.4348 7.11857 34.4348C7.48704 34.4348 7.84042 34.2906 8.10097 34.0341C8.36152 33.7776 8.50789 33.4297 8.50789 33.067V28.9635C8.51362 28.7877 8.48373 28.6125 8.41998 28.4482C8.35623 28.2838 8.25989 28.1336 8.13658 28.0063C8.01326 27.879 7.86544 27.7771 7.70173 27.7067C7.53802 27.6362 7.36169 27.5985 7.18302 27.5957H7.16154Z"
            fill="#5E60CE"
          />
          <path
            d="M10.9213 27.5958C10.7426 27.592 10.5649 27.623 10.3984 27.6869C10.2318 27.7507 10.0797 27.8463 9.95068 27.9681C9.82167 28.0899 9.71828 28.2355 9.64644 28.3966C9.5746 28.5577 9.5357 28.7312 9.53198 28.9072V34.6392C9.53198 35.002 9.67836 35.3499 9.93891 35.6064C10.1995 35.8629 10.5528 36.007 10.9213 36.007C11.2898 36.007 11.6432 35.8629 11.9037 35.6064C12.1643 35.3499 12.3106 35.002 12.3106 34.6392V28.9988C12.3164 28.823 12.2865 28.6478 12.2227 28.4835C12.159 28.3191 12.0626 28.1689 11.9393 28.0416C11.816 27.9143 11.6682 27.8124 11.5045 27.7419C11.3408 27.6714 11.1644 27.6337 10.9858 27.631L10.9213 27.5958Z"
            fill="#5E60CE"
          />
        </svg>
        <p className="text-4xl">
          <span className="text-[#4EA8DE]">to</span>
          <span className="text-[#5E60CE]">do</span>
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          className="w-[736px] h-[54px] rounded-md bg-[#262626] px-4 focus:outline-none"
        />
        <button
          onClick={() => {
            if (newTask == '') return null;
            addNewTask(newTask);
          }}
          className="flex gap-2 items-center font-bold bg-[#1E6F9F] p-4 rounded-md "
        >
          Criar
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98373 1.45158C9.27565 1.45158 10.5386 1.83468 11.6128 2.55244C12.687 3.27019 13.5242 4.29037 14.0186 5.48395C14.513 6.67754 14.6424 7.99092 14.3903 9.25802C14.1383 10.5251 13.5161 11.689 12.6026 12.6026C11.6891 13.5161 10.5252 14.1382 9.25807 14.3903C7.99097 14.6423 6.67759 14.5129 5.484 14.0185C4.29042 13.5241 3.27025 12.6869 2.55249 11.6127C1.83473 10.5385 1.45163 9.2756 1.45163 7.98368C1.45832 6.25332 2.14867 4.59574 3.37223 3.37218C4.59579 2.14862 6.25337 1.45827 7.98373 1.45158ZM7.98373 5.77648e-06C6.40611 0.00645971 4.86578 0.480174 3.55717 1.36134C2.24857 2.24252 1.23037 3.49164 0.631106 4.95102C0.031846 6.4104 -0.121605 8.01461 0.190125 9.56114C0.501855 11.1077 1.26479 12.5272 2.38262 13.6404C3.50044 14.7537 4.92304 15.5108 6.47082 15.8162C8.01861 16.1217 9.62218 15.9617 11.0791 15.3564C12.536 14.7512 13.781 13.7279 14.6568 12.4158C15.5326 11.1036 16 9.5613 16.0001 7.98368C16.0001 6.93249 15.7925 5.89165 15.3892 4.92089C14.986 3.95014 14.395 3.06857 13.6502 2.32679C12.9053 1.58501 12.0214 0.997618 11.049 0.598327C10.0766 0.199035 9.0349 -0.00429452 7.98373 5.77648e-06Z"
              fill="#F2F2F2"
            />
            <path
              d="M11.707 7.38129H8.4954V4.16968H7.41397V7.38129H4.19873V8.46271H7.41397V11.6743H8.4954V8.46271H11.707V7.38129Z"
              fill="#F2F2F2"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between w-full mt-16">
        <TitleTable title="Tarefas criadas" count={taskList.length} />
      </div>
      {isListEmpty ? (
        <ListEmpty />
      ) : (
        taskList.map((task) => (
          <Task key={task.id} text={task.text} removeTask={() => removeTask(task.id)} />
        ))
      )}
    </div>
  );
}
