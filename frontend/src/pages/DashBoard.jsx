import { Header } from "../Components/DashBoard/Header"
import { StatusBoard } from "../Components/DashBoard/StatusBoard"
import { ComplainBoard } from "../Components/DashBoard/Complain_Board"


export const Dashboard = () => {
    return (
        <>
            <div className="bg-white p-5">
                <Header name="Parth Ramani" Role="Senior Waste Management" subRole="Manage your assigned tasks and track progress"></Header>
                <StatusBoard label_1="All" label_2="Pending" label_3="In progress" label_4="Resolved"></StatusBoard>
                <ComplainBoard></ComplainBoard>
            </div>
        </>
    )
}

