import React from 'react';
import { useDroppable, UniqueIdentifier } from '@dnd-kit/core';
import classNames from 'classnames';

import styles from './Droppable.module.css';

interface Props {
  children: React.ReactNode;
  dragging: boolean;
  id: UniqueIdentifier;
}

export function Droppable({ children, id, dragging }: Props) {

  const { isOver, setNodeRef, } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`  h-fit min-h-[400px] rounded-lg flex items-center justify-center border-2 
      ${isOver ? "border-green-400" : "border-gray-400"} 
      ${dragging && styles.dragging} 
      ${styles.dropped ? "bg-gray-100" : ""}
      `}
    >
      {children}
    </div>
  );
}
