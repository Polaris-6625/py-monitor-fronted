import {Table} from "antd"
import {useSelector} from "@apiknight/store/lib/index"
import { tableStore } from "../../store/table"
import { useWebSocket } from "../../hooks/useWebSocket"

function ShowTable() {
    const columns = [
        {
            title: 'Time',
            dataIndex: 'timestamp',
        },
        {
            title: 'Sent (kB)',
            dataIndex: 'sent',
        },
        {
            title: 'Received (kB)',
            dataIndex: 'received',
        }
    ]
    const dataSource = useSelector(tableStore,state => state)
    useWebSocket()
    return (
        <div>
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    )
}

export default ShowTable;