import { useQueryClient } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import { useAuthContext } from './AuthContext';
import toast from 'react-hot-toast';

interface WebSocketContextProps {
    socket: Socket | null;
}

const WebSocketContext = createContext<WebSocketContextProps>({
    socket: null,
});

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    const { userData } = useAuthContext()


    const socket = io("ws://localhost:8001", {
        query: {
            userId: userData?.id,
        }
    });

    const queryClient = useQueryClient()


    useEffect(() => {
        socket.on("connect", () => {
            console.log("connect from server");
            socket.emit("join", { userId: userData?.id });
        });

        socket?.on("newOrder", () => {
            queryClient.invalidateQueries(['allOrders']);
        });

        socket?.on("newMessage", () => {
            queryClient.invalidateQueries(['getAllConversationMessages']);
        });

        socket?.on("NewAdminNotification", () => {
            toast('New Notification')
            queryClient.invalidateQueries(['checkNotificaions']);
            queryClient.invalidateQueries(['notifications']);
        });

        socket.on("leave", () => {
            console.log("Disconnected from server");
            socket.emit("disconnect", { userId: userData?.id });
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <WebSocketContext.Provider value={{ socket }}>
            {children}
        </WebSocketContext.Provider>
    );
};