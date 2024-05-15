import React from 'react';
import { DragOverlay, useDndContext } from '@dnd-kit/core';
import { DraggableItem } from '@/app/dashboard/singleFamily/page';




export function DraggableOverlay() {
  const { active } = useDndContext();

  return (
    <DragOverlay>
      {active ?
        <DraggableItem isOverLay={true} >
        </DraggableItem> : null
      }
    </DragOverlay>
  );
}
