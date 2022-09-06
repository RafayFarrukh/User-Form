import React from "react";
import { useState, useRef, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
const Form = () => {
  const [tasks, setTasks] = useState([]);

  const taskName = useRef("");
  const taskEmail = useRef("");
  const taskDOB = useRef("");
  const taskAddress = useRef("");
  const taskNic = useRef("");
  const taskGender = useRef("");
   
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  const  createTask=()=> {
  
    setTasks([
      ...tasks,
      {
        name: taskName.current.value,
        email: taskEmail.current.value,
        DOB: taskDOB.current.value,
        Address: taskAddress.current.value,
        Nic: taskNic.current.value,
        Gender: taskGender.current.value,
      },
    ]);

    saveTasks([
      ...tasks,
      {
        name: taskName.current.value,
        email: taskEmail.current.value,
        DOB: taskDOB.current.value,
        Address: taskAddress.current.value,
        Nic: taskNic.current.value,
        Gender: taskGender.current.value,
      },
    ]);
    editTask(
        [
            ...tasks,
            {
              name: taskName.current.value,
              email: taskEmail.current.value,
              DOB: taskDOB.current.value,
              Address: taskAddress.current.value,
              Nic: taskNic.current.value,
              Gender: taskGender.current.value,
            },
          ]
    )
  }

  const  deleteTask=(index)=> {
    var clonedTasks = [...tasks];

    clonedTasks.splice(index, 1);

    setTasks(clonedTasks);

    saveTasks([...clonedTasks]);
  }

  const  loadTasks=()=> {
  
      let loadedTasks = localStorage.getItem("tasks");

      let tasks = JSON.parse(loadedTasks);
  
      if (tasks) {
        setTasks(tasks);
      }
    
    
  }
const editTask=(index)=>{
    const name = prompt("Task Name");
    const email = prompt("Task Name");
    const dob = prompt("Task Name");
    const adress = prompt("Task Name");
    const nic = prompt("Task Name");
    let data = JSON.parse(localStorage.getItem('tasks'));
    const tasks = data.map(x => {
        if (x.index === index) {
            return {
                ...x,
                name: name,
                email: email,
                dob: dob,
                adress: adress,
                nic: nic,
               
            }
        }
        return x;
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

  const  saveTasks=(tasks)=> {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <div className="mt-10 sm:mt-0 flex  ">
        <div className="md:grid md:grid-cols-3 ml-32 mx-auto  flex items-center justify-center">
          
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* <form action="#" method="POST"> */}
           
            <form action='#' onSubmit={createTask}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        ref={taskName}
                        placeholder={"Task Name"}
                        required
                        label={"Name"}
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 mr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        ref={taskEmail}
                        type="text"
                        name="email_address"
                        required

                        id="email_address"
                        autocomplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        DOB
                      </label>
                      <input
                        ref={taskDOB}
                        type="date"
                        required

                        id="birthday"
                        name="birthday"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        ref={taskGender}
                        id="country"
                        name="country"
                        autocomplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        for="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        ref={taskAddress}
                        type="text"
                        required

                        name="street_address"
                        id="street_address"
                        autocomplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="nic"
                        className="block text-sm font-medium text-gray-700"
                      >
                        NIC
                      </label>
                      <input
                        ref={taskNic}
                        type="text"
                        name="first_name"
                        required

                        id="first_name"
                        autocomplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                   
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
            <table>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-5 px-11 ml-20">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-11">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-11">
                    DOB
                  </th>
                  <th scope="col" className="py-3 px-11">
                    Address
                  </th>
                  <th scope="col" className="py-3 px-11">
                    NIC
                  </th>
                  <th scope="col" className="py-3 px-11">
                    Gender
                  </th>
                  <th scope="col" className="py-3 px-11">
                    Actions
                  </th>
                </tr>
              </thead>
            </table>

            {tasks.length > 0 ? (
              tasks.map((task, index) => {
                return (
                  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                          key={index}
                        >



                               
                                                
                                                  <th
                                                    scope="row"
                                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {task.name}
                                                </th>
                                                
                          

                          <td className="py-4 px-6">{task.email}</td>
                          <td className="py-4 px-6">{task.DOB}</td>
                         <td className="py-4 px-6">{task.Address}</td>
                          <td className="py-4 px-6">{task.Nic}</td>
                          <td className="py-4 px-6">{task.Gender}</td>
                          <td className="py-4 px-6">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <div className="flex">
                                <BsFillTrashFill
                                  size="30"
                                  onClick={() => {
                                    deleteTask(index);
                                  }}
                                />
                                          
                                           <AiFillEdit size="30" onClick={editTask}
                                />
                              </div>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })
            ) : (
              <div>you have no tasks</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;