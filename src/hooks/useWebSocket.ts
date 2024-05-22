import { useEffect, useRef } from "react";
import { tableStore } from "../store/table";

export const useWebSocket = () => {
    const wsRef = useRef<WebSocket>();
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8765");
        ws.onmessage = (e) => {
            console.log(e.data);
            tableStore.dispatch({
                type: "add",
                payload: JSON.parse(e.data)
            })
        };
        wsRef.current = ws;
    }, []);
}
