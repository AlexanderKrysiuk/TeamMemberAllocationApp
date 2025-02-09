import Teams from "./Teams";
import TeamMembers from "./TeamMembers";
const Employees = ({employees,selectedTeam,handelEmployeeCardClick,handleTeamSelectionChange}) => {
    return(
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
            </div>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        <TeamMembers employees={employees} handlingEmployeeCardClick={handelEmployeeCardClick} selectedTeam={selectedTeam}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employees