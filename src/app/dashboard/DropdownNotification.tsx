import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NotificationBell, PopoverNotificationCenter } from "@novu/notification-center";

const DropdownNotification = () => {



  // ! the BACKEDND how

//   import { Novu } from '@novu/node'; 

// const novu = new Novu('<API_KEY>');

// novu.trigger('on-boarding-notification', {
//     to: {
//       subscriberId: '<REPLACE_WITH_DATA>'
//     },
//     payload: {}
//   });


  return (
    <PopoverNotificationCenter
      allowedNotificationActions={false}
      colorScheme={'light'}
    >
      {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
    </PopoverNotificationCenter>
  );
};

export default DropdownNotification;
