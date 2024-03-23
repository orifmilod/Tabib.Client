'use client';
import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { removeTodo, toggleTodo } from '@/redux/features/todo-slice';
import { ReduxDispatch, ReduxState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '@nextui-org/react';
import { BsFillTrashFill } from 'react-icons/bs';

const TodoList: React.FC = () => {
  const {  doctors } = useSelector((state: ReduxState) => state.doctors);
  const dispatch = useDispatch<ReduxDispatch>();

  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">Todo List</p>
          <p className="text-small text-default-500">Manage your tasks</p>
        </div>
      </CardHeader>
      <CardBody>
        {doctors.map((doctor) => (
          <div className="flex mb-2 justify-between" key={doctor.id}>
            <div>
              <p>{doctor.name}</p>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default TodoList;
